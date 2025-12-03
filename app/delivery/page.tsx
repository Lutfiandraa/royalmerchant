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
    },
    {
      name: 'Evergreen',
      description: 'Efficient container services',
      logo: 'Evergreen',
      image: '/evergreen.jpg',
      info: 'Evergreen provides efficient container services with comprehensive logistics solutions. Known for reliable shipping schedules and excellent cargo handling capabilities.',
    },
    {
      name: 'OOCL',
      description: 'Fast Europe-bound shipping',
      logo: 'OOCL',
      image: '/OOCLshipping.jpg',
      info: 'Orient Overseas Container Line (OOCL) is a leading global container shipping company with extensive network coverage, particularly strong on Asia-Europe routes. OOCL provides fast and reliable shipping services with efficient transit times, advanced container management systems, and comprehensive logistics solutions. Known for operational excellence and customer-focused service, OOCL ensures timely delivery of cargo to major ports worldwide.',
    },
    {
      name: 'Samudera',
      description: 'Regional shipping expertise',
      logo: 'Samudera',
      image: '/samuderaship.jpg',
      info: 'Samudera specializes in regional shipping with deep expertise in Southeast Asian markets. Provides reliable and cost-effective shipping solutions for regional trade.',
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
            className="relative bg-gray-900 rounded-lg border border-gray-800 shadow-2xl max-w-md w-full p-6 sm:p-8 animate-in"
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
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {partner.info}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}

