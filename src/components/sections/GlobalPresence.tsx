'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, Award } from 'lucide-react';

const GlobalPresence = () => {
  const locations = [
    {
      city: "Nairobi",
      country: "Kenya",
      properties: "45+",
      value: "$500M",
      image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      city: "Mombasa",
      country: "Kenya", 
      properties: "18+",
      value: "$42M",
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      city: "Kampala",
      country: "Uganda",
      properties: "9+",
      value: "$28M",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      city: "Dar es Salaam",
      country: "Tanzania",
      properties: "12+",
      value: "$35M",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const achievements = [
    {
      icon: Building,
      title: "Market Leadership",
      description: "Recognized as East Africa's premier luxury real estate investment firm"
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Serving high-net-worth individuals across 47 countries"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Winner of 'International Real Estate Investment Firm of the Year'"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
<<<<<<< HEAD
          {...({ className: "text-center mb-16" } as any)}
=======
          className="text-center mb-16"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            A Global Presence with
            <span className="block font-extralight italic text-slate-300">
              Local Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Our carefully established presence across East Africa's most promising markets 
            ensures unparalleled access to the region's finest investment opportunities.
          </p>
        </motion.div>

        {/* Market Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {locations.map((location, index) => (
            <motion.div
              key={index}
<<<<<<< HEAD
              {...({ className: "bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-750 transition-colors" } as any)}
=======
              className="bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-750 transition-colors"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-32">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-medium">{location.city}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-slate-400 text-sm mb-2">{location.country}</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300 text-sm">Properties</span>
                    <span className="text-white font-medium">{location.properties}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300 text-sm">Portfolio Value</span>
                    <span className="text-white font-medium">{location.value}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
<<<<<<< HEAD
              {...({ className: "text-center" } as any)}
=======
              className="text-center"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-2xl mb-6">
                <achievement.icon className="h-8 w-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">
                {achievement.title}
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;