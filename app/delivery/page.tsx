'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DeliveryPage() {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const shippingPartners = [
    {
      name: 'Maersk',
      description: 'Reliable weekly schedule via Surabaya',
      logo: 'Maersk',
      image: '/maersk.jpg',
      info: 'Maersk offers consistent weekly departures from Surabaya port, ensuring timely deliveries to destinations worldwide. With extensive global network coverage and reliable transit times.',
      expedition: {
        routes: [
          { destination: 'Europe', transitTime: '25-30 days', frequency: 'Weekly', ports: 'Rotterdam, Hamburg, Antwerp' },
          { destination: 'Middle East', transitTime: '15-20 days', frequency: 'Weekly', ports: 'Jebel Ali, Dammam, Jeddah' },
          { destination: 'North America', transitTime: '30-35 days', frequency: 'Weekly', ports: 'Los Angeles, New York, Savannah' },
          { destination: 'Asia Pacific', transitTime: '10-15 days', frequency: 'Weekly', ports: 'Singapore, Hong Kong, Shanghai' },
        ],
        containerTypes: ['20ft Container', '40ft Container', '40ft High Cube', 'Refrigerated Container'],
        services: ['FCL (Full Container Load)', 'LCL (Less than Container Load)', 'Door-to-Door', 'Port-to-Port'],
        advantages: [
          'Weekly departures from Surabaya port',
          'Global network coverage to 130+ countries',
          'Real-time cargo tracking system',
          'Comprehensive insurance options',
          'Expert handling of bulk cargo',
        ],
      },
    },
    {
      name: 'Evergreen',
      description: 'Efficient container services',
      logo: 'Evergreen',
      image: '/evergreen.jpg',
      info: 'Evergreen Line operates an extensive global container shipping network with 150+ weekly services connecting 75 countries across 204 ports. With a modern fleet of 228 vessels and 1.84 million TEU capacity, Evergreen provides efficient container services with comprehensive logistics solutions.',
      expedition: {
        routes: [
          { destination: 'Europe', transitTime: '28-32 days', frequency: 'Weekly', ports: 'Rotterdam, Hamburg, Felixstowe, Le Havre' },
          { destination: 'Middle East', transitTime: '18-22 days', frequency: 'Weekly', ports: 'Jebel Ali, Dammam, Jeddah, Port Said' },
          { destination: 'North America', transitTime: '32-38 days', frequency: 'Weekly', ports: 'Los Angeles, Long Beach, New York, Savannah' },
          { destination: 'Asia Pacific', transitTime: '8-12 days', frequency: 'Weekly', ports: 'Singapore, Hong Kong, Shanghai, Busan' },
        ],
        containerTypes: ['20ft Container', '40ft Container', '40ft High Cube', 'Refrigerated Container', 'Open Top Container'],
        services: ['FCL (Full Container Load)', 'LCL (Less than Container Load)', 'Door-to-Door', 'Port-to-Port', 'Intermodal Services'],
        advantages: [
          '150+ weekly services connecting 75 countries',
          'Modern fleet with 1.84 million TEU capacity',
          '295 global offices serving 315+ locations',
          'Comprehensive intermodal transportation',
          'Advanced e-Commerce booking platform',
        ],
      },
    },
    {
      name: 'OOCL',
      description: 'Fast Europe-bound shipping',
      logo: 'OOCL',
      image: '/OOCLshipping.jpg',
      info: 'Orient Overseas Container Line (OOCL) is a leading global container shipping company with extensive network coverage, particularly strong on Asia-Europe routes. OOCL connects 78 countries across 212 ports with 144 distinct services, providing fast and reliable shipping with efficient transit times.',
      expedition: {
        routes: [
          { destination: 'Europe', transitTime: '24-28 days', frequency: 'Weekly', ports: 'Rotterdam, Hamburg, Antwerp, Southampton' },
          { destination: 'Middle East', transitTime: '16-20 days', frequency: 'Weekly', ports: 'Jebel Ali, Dammam, Jeddah, Salalah' },
          { destination: 'North America', transitTime: '28-33 days', frequency: 'Weekly', ports: 'Los Angeles, Long Beach, New York, Vancouver' },
          { destination: 'Asia Pacific', transitTime: '7-14 days', frequency: 'Weekly', ports: 'Singapore, Hong Kong, Shanghai, Tokyo' },
        ],
        containerTypes: ['20ft Container', '40ft Container', '40ft High Cube', 'Refrigerated Container', 'Specialized Containers'],
        services: ['FCL (Full Container Load)', 'LCL (Less than Container Load)', 'Door-to-Door', 'Port-to-Port', 'Reefer Services', 'Dangerous Goods Handling'],
        advantages: [
          'Strong Asia-Europe route expertise',
          '144 services connecting 78 countries',
          'Advanced container management systems',
          'Comprehensive reefer and specialized cargo handling',
          'Real-time sailing schedule and tracking',
        ],
      },
    },
    {
      name: 'Samudera',
      description: 'Regional shipping expertise',
      logo: 'Samudera',
      image: '/samuderaship.jpg',
      info: 'Samudera Shipping Line specializes in regional shipping with deep expertise in Southeast Asian markets. Operating feeder and liner services across Southeast Asia, Indian Subcontinent, Far East, and Middle East, providing reliable and cost-effective shipping solutions for regional trade.',
      expedition: {
        routes: [
          { destination: 'Southeast Asia', transitTime: '5-10 days', frequency: 'Weekly', ports: 'Singapore, Port Klang, Bangkok, Ho Chi Minh' },
          { destination: 'India', transitTime: '12-18 days', frequency: 'Bi-weekly', ports: 'Mumbai, Chennai, Kolkata, Nhava Sheva' },
          { destination: 'Middle East', transitTime: '18-25 days', frequency: 'Bi-weekly', ports: 'Jebel Ali, Dammam, Jeddah' },
          { destination: 'China', transitTime: '10-15 days', frequency: 'Weekly', ports: 'Shanghai, Ningbo, Shenzhen, Hong Kong' },
        ],
        containerTypes: ['20ft Container', '40ft Container', '40ft High Cube'],
        services: ['Feeder Services (SOC)', 'Liner Services (COC)', 'Port-to-Port', 'Regional Routes'],
        advantages: [
          'Deep expertise in Southeast Asian markets',
          'Cost-effective regional shipping solutions',
          'Regular routes connecting major Indonesian ports',
          'Feeder services for main line operators',
          'Local knowledge and regional network coverage',
        ],
      },
    },
  ];

  const handleBoxClick = (partnerName: string) => {
    setSelectedPartner(selectedPartner === partnerName ? null : partnerName);
  };

  const closeCard = () => {
    setSelectedPartner(null);
  };

  return (
    <main className="min-h-screen bg-black page-transition">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              Shipping & Transportation
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-gray-300 px-4">
              We partner with leading global shipping lines to ensure reliable and efficient delivery of your charcoal products worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Partners Logos */}
      <section className="py-8 sm:py-12 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
            {shippingPartners.map((partner) => (
              <div
                key={partner.name}
                onClick={() => handleBoxClick(partner.name)}
                className="relative flex flex-col items-center justify-center p-0 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer w-full overflow-hidden group"
              >
                <div className="relative w-full h-48 sm:h-56 lg:h-64">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1">
                    {partner.logo}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 text-center">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Card */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeCard}
        >
          <div
            className="relative bg-green-950 rounded-lg border border-green-800 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCard}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {shippingPartners
              .filter((p) => p.name === selectedPartner)
              .map((partner) => (
                <div key={partner.name}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {partner.name}
                  </h3>
                  <div className="w-12 h-1 bg-green-600 mb-4"></div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    {partner.info}
                  </p>
                  
                  {/* Expedition Information */}
                  {partner.expedition && (
                    <div className="space-y-6 mb-6">
                      {/* Routes */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Shipping Routes</h4>
                        <div className="space-y-3">
                          {partner.expedition.routes.map((route, idx) => (
                            <div key={idx} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-white font-medium">{route.destination}</span>
                                <span className="text-green-400 text-sm">{route.transitTime}</span>
                              </div>
                              <div className="text-xs text-gray-400 space-y-1">
                                <p>Frequency: {route.frequency}</p>
                                <p>Ports: {route.ports}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Container Types */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Container Types</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.expedition.containerTypes.map((type, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Available Services</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {partner.expedition.services.map((service, idx) => (
                            <div key={idx} className="bg-gray-800/50 rounded p-2 text-sm text-gray-300 border border-gray-700">
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Advantages */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Advantages</h4>
                        <ul className="space-y-2">
                          {partner.expedition.advantages.map((advantage, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-300">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>{advantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Pick Expedition Button */}
                  {partner.expedition && (
                    <button
                      onClick={() => {
                        // Handle pick expedition action
                        alert(`${partner.name} expedition selected! Please contact us for booking details.`);
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Pick Expedition
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}

