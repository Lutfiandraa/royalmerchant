'use client';

import { useState } from 'react';

export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample products - bisa diganti dengan data real
  const products = [
    {
      id: 1,
      title: 'Premium Coconut Charcoal Briquettes',
      description: 'High-quality coconut shell charcoal briquettes perfect for shisha and BBQ. Clean burn, low ash, long-lasting heat.',
      image: '/handcharcoal.jpg',
    },
    {
      id: 2,
      title: 'Coconut Charcoal Briquettes',
      description: 'Premium quality briquettes crafted for shisha and BBQ markets worldwide.',
      image: '/handcharcoal.jpg',
    },
    {
      id: 3,
      title: 'Export Quality Charcoal',
      description: 'International standard charcoal products ready for global export.',
      image: '/handcharcoal.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="min-h-screen bg-black page-transition">
      {/* Product Catalog Slider */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Discover Our Product
            </h2>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Arrow Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-lg border border-white/20"
              aria-label="Previous product"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-lg border border-white/20"
              aria-label="Next product"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Product Cards Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-full px-4 sm:px-6 lg:px-8"
                  >
                    <div className="bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="relative h-56 sm:h-72 lg:h-96">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-7 lg:p-10 flex flex-col justify-center">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                            {product.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-5">
                            {product.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-3">
                            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300">
                              Get Quotation
                            </button>
                            <button className="px-6 py-3 border border-gray-600 hover:border-gray-400 text-white font-semibold rounded-lg transition-colors duration-300">
                              Specification
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-green-500 w-8 sm:w-10'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
