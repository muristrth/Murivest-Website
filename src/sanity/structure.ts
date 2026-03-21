import type { StructureResolver } from 'sanity/structure'
import { 
  Building2, 
  TreePine, 
  Star, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Users, 
  Settings,
  MapPin,
  TrendingUp,
  Shield,
  Globe,
  Newspaper,
  BarChart3
} from 'lucide-react'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Murivest Realty')
    .items([
      
      // ═══════════════════════════════════════════════════════════════
      // DASHBOARD / OVERVIEW
      // ═══════════════════════════════════════════════════════════════
      S.listItem()
        .title('Dashboard')
        .icon(() => '🏛️')
        .child(
          S.list()
            .title('Dashboard')
            .items([
              S.listItem()
                .title('Recently Updated')
                .icon(Clock)
                .child(
                  S.documentList()
                    .title('Recently Updated')
                    .filter('_type in ["property", "ukProperty", "usProperty", "land"] && _updatedAt > now() - 7*24*60*60')
                    .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('Featured All-Markets')
                .icon(Star)
                .child(
                  S.documentList()
                    .title('Global Featured Listings')
                    .filter('featured == true')
                ),
            ])
        ),

      S.divider(),

      // ═══════════════════════════════════════════════════════════════
      // INTERNATIONAL REAL ESTATE (UK & US)
      // ═══════════════════════════════════════════════════════════════
      S.listItem()
        .title('International Properties')
        .icon(Globe)
        .child(
          S.list()
            .title('Global Markets')
            .items([
              S.documentTypeListItem('ukProperty')
                .title('UK Portfolio')
                .icon(() => '🇬🇧'),
              S.documentTypeListItem('usProperty')
                .title('US Portfolio')
                .icon(() => '🇺🇸'),
            ])
        ),

      // ═══════════════════════════════════════════════════════════════
      // KENYA COMMERCIAL REAL ESTATE
      // ═══════════════════════════════════════════════════════════════
      S.listItem()
        .title('Commercial Real Estate')
        .icon(Building2)
        .child(
          S.list()
            .title('Commercial Properties')
            .items([
              S.documentTypeListItem('property')
                .title('All Properties')
                .icon(Building2),
              
              S.divider(),
              
              S.listItem()
                .title('By Asset Class')
                .icon(Shield)
                .child(
                  S.list()
                    .title('Asset Class')
                    .items([
                      ['Commercial Office', '🏢'],
                      ['Retail', '🛍️'],
                      ['Industrial', '🏭'],
                      ['Mixed Use', '🏘️'],
                      ['Hospitality', '🏨'],
                      ['Healthcare', '🏥'],
                    ].map(([type, icon]) => 
                      S.documentListItem()
                        .title(type as string)
                        .icon(() => icon)
                        .schemaType('property')
                        .child(
                          S.documentList()
                            .title(`${type} Properties`)
                            .filter('_type == "property" && propertyType == $type')
                            .params({ type })
                        )
                    ))
                ),
            ])
        ),

      S.divider(),

      // ═══════════════════════════════════════════════════════════════
      // LAND BANKING
      // ═══════════════════════════════════════════════════════════════
      S.listItem()
        .title('Land Banking')
        .icon(TreePine)
        .child(
          S.list()
            .title('Land Parcels')
            .items([
              S.documentTypeListItem('land')
                .title('All Land Parcels')
                .icon(TreePine),
              
              S.listItem()
                .title('Investment Analysis')
                .icon(TrendingUp)
                .child(
                  S.list()
                    .title('Analysis')
                    .items([
                      S.documentListItem()
                        .title('High IRR Targets')
                        .icon(TrendingUp)
                        .schemaType('land')
                        .child(
                          S.documentList()
                            .title('High Return Opportunities')
                            .filter('_type == "land" && investmentMetrics.targetIRR match "*2*"')
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),

      // ═══════════════════════════════════════════════════════════════
      // INSIGHTS & EDITORIAL
      // ═══════════════════════════════════════════════════════════════
      S.listItem()
        .title('Insights & Media')
        .icon(Newspaper)
        .child(
          S.list()
            .title('Editorial Content')
            .items([
              S.documentTypeListItem('post')
                .title('Blog Posts')
                .icon(FileText),
              S.documentTypeListItem('insight')
                .title('Market Insights')
                .icon(BarChart3),
              S.divider(),
              S.listItem()
                .title('Media Assets')
                .icon(() => '📷')
                .child(
                  S.documentList()
                    .title('All Images')
                    .filter('_type == "sanity.imageAsset"')
                ),
            ])
        ),

      S.divider(),

      // ═══════════════════════════════════════════════════════════════
      // SETTINGS
      // ═══════════════════════════════════════════════════════════════
      S.listItem()
        .title('Settings')
        .icon(Settings)
        .child(
          S.list()
            .title('Configuration')
            .items([
              S.documentTypeListItem('broker')
                .title('Brokers & Advisors')
                .icon(Users),
              S.listItem()
                .title('Site Configuration')
                .icon(Settings)
                .child(
                  S.editor()
                    .id('siteSettings')
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
            ])
        ),
    ])