'use client';

/**
 * PropertyMap — Mapbox GL JS implementation
 * Replaces the Google Maps version with no billing required.
 *
 * Install:
 *   npm install mapbox-gl @types/mapbox-gl react-map-gl
 *
 * Add to .env:
 *   NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1...
 *
 * Get a free token at: https://account.mapbox.com
 * Free tier = 50,000 map loads/month — more than enough.
 *
 * In your next.config.js add:
 *   transpilePackages: ['mapbox-gl'],
 */
import { Property } from '@/types';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
} from 'react-map-gl/mapbox';
import type { MapRef } from 'react-map-gl/mapbox';
import { MapPin, Maximize2, Layers, Sun, Moon, X } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { createRoot } from 'react-dom/client';

// ─── Types ────────────────────────────────────────────────────────────────────

interface WalkScores {
  walk: number;
  transit: number | null;
  bike: number | null;
}

interface PropertyMapProps {
  properties: Property[];
  hoveredId: string | null;
  selectedId: string | null;
  onPinHover: (id: string | null) => void;
  onPinClick: (property: Property) => void;
  isDark: boolean;
  onStyleChange: (isDark: boolean) => void;
  renderPopup: (property: Property, onClose: () => void) => React.ReactElement; // <-- Add this line
}

// ─── Map Styles ───────────────────────────────────────────────────────────────

const MAP_STYLES = {
  light: 'mapbox://styles/mapbox/light-v11',
  dark: 'mapbox://styles/mapbox/dark-v11',
  satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
};

// ─── Score helpers ────────────────────────────────────────────────────────────

const getScoreColor = (score: number): string => {
  if (score >= 90) return '#22c55e';
  if (score >= 70) return '#eab308';
  if (score >= 50) return '#f97316';
  return '#ef4444';
};

// ─── Walk Score Mini Ring (SVG only, no framer deps in popup) ─────────────────

const MiniScoreRing: React.FC<{ score: number; label: string }> = ({ score, label }) => {
  const size = 38;
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (score / 100) * circ;
  const color = getScoreColor(score);

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke={color} strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.8s ease' }}
          />
        </svg>
        <span style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 10, fontWeight: 600, fontFamily: 'Inter, sans-serif',
          color: '#1a1a1a',
        }}>
          {score}
        </span>
      </div>
      <span style={{
        fontSize: 9, textTransform: 'uppercase',
        letterSpacing: '0.12em', color: '#6b7280',
        fontFamily: 'Inter, sans-serif',
      }}>
        {label}
      </span>
    </div>
  );
};

// ─── Custom Pin Component ─────────────────────────────────────────────────────

interface PropertyPinProps {
  property: Property;
  isHovered: boolean;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PropertyPin: React.FC<PropertyPinProps> = ({ 
  property, 
  isHovered, 
  isSelected, 
  onClick, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const active = isHovered || isSelected;
  const scale = isSelected ? 1.4 : isHovered ? 1.2 : 1;
  const bodyColor = isSelected ? '#4a3520' : isHovered ? '#6b4c2a' : '#8B7355';
  const glowColor = isSelected ? 'rgba(139,115,85,0.4)' : isHovered ? 'rgba(139,115,85,0.25)' : 'transparent';

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        cursor: 'pointer',
        transform: `scale(${scale})`,
        transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
        transformOrigin: 'bottom center',
        filter: active ? `drop-shadow(0 0 8px ${glowColor})` : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="48"
        viewBox="0 0 36 48"
      >
        {/* Shadow */}
        <ellipse cx="18" cy="46" rx="6" ry="2" fill="rgba(0,0,0,0.2)" />
        {/* Pin body */}
        <path
          d="M18 0C8.059 0 0 8.059 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.059 27.941 0 18 0z"
          fill={bodyColor}
        />
        {/* Outer ring when active */}
        {active && (
          <circle cx="18" cy="17" r="10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        )}
        {/* Inner white circle */}
        <circle cx="18" cy="17" r="6" fill="#faf9f7" />
        {/* Center dot */}
        <circle cx="18" cy="17" r="2.5" fill={bodyColor} />
      </svg>

      {/* Price label bubble — shows on hover */}
      {active && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: 4,
          whiteSpace: 'nowrap',
          backgroundColor: bodyColor,
          color: '#faf9f7',
          fontSize: 10,
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.08em',
          padding: '3px 8px',
          pointerEvents: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          {property.title}
          {/* Arrow */}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: `5px solid ${bodyColor}`,
          }} />
        </div>
      )}
    </div>
  );
};

// ─── Hover Card ───────────────────────────────────────────────────────────────

interface HoverCardProps {
  property: Property;
  onClose: () => void;
  onViewDetails: (property: Property) => void;
}

const HoverCard: React.FC<HoverCardProps> = ({ property, onClose, onViewDetails }) => {
  return (
    <div style={{
      width: 280,
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      overflow: 'hidden',
      fontFamily: 'Inter, sans-serif',
    }}>
      {/* Image */}
      <div style={{ position: 'relative', height: 140, overflow: 'hidden' }}>
        {property.thumbnailUrl ? (
          <img
            src={property.thumbnailUrl}
            alt={property.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 12, color: '#9ca3af' }}>No image</span>
          </div>
        )}
        {/* Gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
        }} />
        {/* Type badge */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          backgroundColor: '#8B7355',
          color: '#faf9f7',
          fontSize: 9,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '3px 8px',
        }}>
          {property.propertyType}
        </div>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 8, right: 8,
            width: 24, height: 24,
            backgroundColor: 'rgba(255,255,255,0.9)',
            border: '1px solid #e5e7eb',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={12} color="#374151" />
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Title + address */}
        <div>
          <h3 style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 600,
            color: '#111827',
            lineHeight: 1.3,
            fontFamily: 'Cormorant Garamond, Georgia, serif',
          }}>
            {property.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
            <MapPin size={11} color="#9ca3af" />
            <span style={{ fontSize: 11, color: '#6b7280' }}>
              {property.address}, {property.city}
            </span>
          </div>
        </div>

        {/* Price + size */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontSize: 17,
            fontWeight: 600,
            color: '#111827',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
          }}>
            {property.price}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Maximize2 size={11} color="#9ca3af" />
            <span style={{ fontSize: 11, color: '#6b7280' }}>{property.squareFootage}</span>
          </div>
        </div>

        {/* Walk scores */}
        {property.walkScores && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: 10,
            borderTop: '1px solid #f3f4f6',
          }}>
            <MiniScoreRing score={property.walkScores.walk} label="Walk" />
            {property.walkScores.transit !== null && (
              <MiniScoreRing score={property.walkScores.transit} label="Transit" />
            )}
            {property.walkScores.bike !== null && (
              <MiniScoreRing score={property.walkScores.bike} label="Bike" />
            )}
          </div>
        )}

        {/* CTA */}
        <button
          onClick={() => onViewDetails(property)}
          style={{
            width: '100%',
            padding: '8px 0',
            backgroundColor: '#1a1a1a',
            color: '#faf9f7',
            border: 'none',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            marginTop: 2,
          }}
        >
          View Details →
        </button>
      </div>
    </div>
  );
};

// ─── Property Popup Component for Mapbox GL ───────────────────────────────────

interface PropertyPopupProps {
  property: Property;
  onClose: () => void;
}

const PropertyPopup: React.FC<PropertyPopupProps> = ({ property, onClose }) => {
  return (
    <div style={{
      padding: '12px',
      minWidth: '200px',
      fontFamily: 'Inter, sans-serif',
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>
        {property.title}
      </h3>
      <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
        {property.address}, {property.city}
      </p>
      <p style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 700, color: '#111' }}>
        {property.price}
      </p>
      <button
        onClick={onClose}
        style={{
          padding: '6px 12px',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '11px',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </div>
  );
};

// ─── Main Map Component ───────────────────────────────────────────────────────

const PropertyMap: React.FC<PropertyMapProps> = ({
  properties,
  hoveredId,
  selectedId,
  onPinHover,
  onPinClick,
  isDark,
  onStyleChange,
}) => {
  const mapRef = useRef<MapRef>(null);
  const mapboxMapRef = useRef<mapboxgl.Map | null>(null);
  const [popupProperty, setPopupProperty] = useState<Property | null>(null);
  const [mapStyle, setMapStyle] = useState<'dark' | 'light' | 'satellite'>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  const validProperties = properties.filter(
    (p) => p.location?.lat && p.location?.lng
  );

  // Get underlying mapbox map instance
  useEffect(() => {
    if (mapRef.current) {
      mapboxMapRef.current = mapRef.current.getMap();
    }
  }, [mapRef.current]);

  // Fit map to all properties
  const fitAll = useCallback(() => {
    if (!mapRef.current || validProperties.length === 0) return;
    if (validProperties.length === 1) {
      mapRef.current?.flyTo({
        center: [validProperties[0].location.lng, validProperties[0].location.lat],
        zoom: 14,
        duration: 1200,
      });
      return;
    }
    const lngs = validProperties.map((p) => p.location.lng);
    const lats = validProperties.map((p) => p.location.lat);
    mapRef.current?.fitBounds(
      [
        [Math.min(...lngs), Math.min(...lats)],
        [Math.max(...lngs), Math.max(...lats)],
      ],
      { padding: { top: 80, bottom: 80, left: 80, right: 80 }, duration: 1200 }
    );
  }, [validProperties]);

  // Fly to selected property when drawer opens
  useEffect(() => {
    if (!selectedId || !mapRef.current) return;
    const prop = validProperties.find((p) => p._id === selectedId);
    if (!prop) return;
    mapRef.current?.flyTo({
      center: [prop.location.lng, prop.location.lat],
      zoom: 15,
      offset: [-200, 0],
      duration: 800,
    });
  }, [selectedId, validProperties]);

  const handleStyleToggle = (style: 'light' | 'dark' | 'satellite') => {
    setMapStyle(style);
    onStyleChange(style === 'dark');
  };

  // Native Mapbox GL popup with React component (optional enhancement)
  useEffect(() => {
    const map = mapboxMapRef.current;
    if (!map) return;

    // This is an example of how to add native mapbox popups
    // You can remove this if you're using the react-map-gl Popup component instead
    const handleClick = (e: mapboxgl.MapMouseEvent) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['properties-layer']
      });
      
      if (!features.length) return;
      
      const feature = features[0];
      const coordinates = (feature.geometry as GeoJSON.Point).coordinates.slice() as [number, number];
      const property = feature.properties as unknown as Property;

      const popupNode = document.createElement('div');
      const root = createRoot(popupNode);
      
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: [0, -10],
        className: 'property-popup',
      });

      root.render(
        <PropertyPopup 
          property={property} 
          onClose={() => popup.remove()} 
        />
      );

      popup
        .setLngLat(coordinates)
        .setDOMContent(popupNode)
        .addTo(map);

      popup.on('close', () => {
        root.unmount();
      });
    };

    // Only add if you have a properties-layer
    // map.on('click', 'properties-layer', handleClick);

    return () => {
      // map.off('click', 'properties-layer', handleClick);
    };
  }, []);

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

  if (!token) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-secondary">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Add <code className="bg-secondary px-1">NEXT_PUBLIC_MAPBOX_TOKEN</code> to your .env
          </p>
          <a
            href="https://account.mapbox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary underline"
          >
            Get a free token at mapbox.com →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Map
        ref={mapRef}
        mapboxAccessToken={token}
        initialViewState={{
          longitude: validProperties[0]?.location.lng ?? 36.8219,
          latitude: validProperties[0]?.location.lat ?? -1.2921,
          zoom: 11,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle={MAP_STYLES[mapStyle]}
        onLoad={() => {
          setIsLoaded(true);
          fitAll();
        }}
      >
        {/* Navigation controls */}
        <NavigationControl position="bottom-right" showCompass={false} />

        {/* Property Pins */}
        {isLoaded && validProperties.map((property) => (
          <Marker
            key={property._id}
            longitude={property.location.lng}
            latitude={property.location.lat}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupProperty(
                popupProperty?._id === property._id ? null : property
              );
              onPinClick(property);
            }}
          >
            <PropertyPin
              property={property}
              isHovered={hoveredId === property._id}
              isSelected={selectedId === property._id}
              onClick={() => {}}
              onMouseEnter={() => onPinHover(property._id)}
              onMouseLeave={() => onPinHover(null)}
            />
          </Marker>
        ))}

        {/* Hover/Click Popup */}
        {popupProperty && (
          <Popup
            longitude={popupProperty.location.lng}
            latitude={popupProperty.location.lat}
            anchor="bottom"
            offset={[0, -52]}
            closeButton={false}
            closeOnClick={false}
            onClose={() => setPopupProperty(null)}
            maxWidth="none"
            style={{ padding: 0 }}
          >
            <HoverCard
              property={popupProperty}
              onClose={() => setPopupProperty(null)}
              onViewDetails={(p) => {
                onPinClick(p);
                setPopupProperty(null);
              }}
            />
          </Popup>
        )}
      </Map>

      {/* ── Map Controls Overlay ──────────────────────────────────────────── */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
        {/* Style switcher */}
        <div className="flex items-center gap-0 border border-border/50 overflow-hidden shadow-md">
          {([
            { key: 'light', icon: <Sun className="w-3.5 h-3.5" />, label: 'Light' },
            { key: 'dark', icon: <Moon className="w-3.5 h-3.5" />, label: 'Dark' },
            { key: 'satellite', icon: <Layers className="w-3.5 h-3.5" />, label: 'Satellite' },
          ] as const).map(({ key, icon, label }) => (
            <button
              key={key}
              onClick={() => handleStyleToggle(key)}
              title={label}
              className={`px-3 py-2 transition-colors flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase ${
                mapStyle === key
                  ? 'bg-foreground text-background'
                  : 'bg-background/90 backdrop-blur-sm text-muted-foreground hover:bg-secondary'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Fit all button */}
      <button
        onClick={fitAll}
        className="absolute bottom-10 left-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm border border-border/50 px-4 py-2 text-[10px] tracking-[0.2em] uppercase hover:bg-secondary transition-colors shadow-md z-10"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <Layers className="w-3.5 h-3.5" />
        Fit All
      </button>

      {/* Property count badge */}
      <div
        className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border border-border/50 px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase text-muted-foreground shadow-md z-10"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {validProperties.length} {validProperties.length === 1 ? 'property' : 'properties'}
      </div>

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-background flex items-center justify-center z-20">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Loading Map
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyMap;