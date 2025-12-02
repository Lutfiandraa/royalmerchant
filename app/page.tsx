export default function Home() {
  return (
    <main className="min-h-screen bg-black page-transition">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/charcoaldefault.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay untuk readability */}
        <div className="absolute inset-0 z-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white px-2"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
            >
              INDONESIAN FINEST COCONUT CHARCOAL
            </h1>
            <p 
              className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 px-4"
              style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Royal Merchant provides premium charcoal products crafted for shisha and BBQ markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center px-4 sm:px-0">
              <div className="mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-900/30 flex items-center justify-center">
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Natural</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                Natural, High quality, Non Toxic, No Chemical
              </p>
            </div>

            <div className="text-center px-4 sm:px-0">
              <div className="mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-900/30 flex items-center justify-center">
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Quality</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                Healthy Clean, Smokeless, Odorless, Tasteless
              </p>
            </div>

            <div className="text-center px-4 sm:px-0">
              <div className="mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-900/30 flex items-center justify-center">
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Fine Process
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                Great quality, Green, Renewable, Certificated
              </p>
            </div>

            <div className="text-center px-4 sm:px-0">
              <div className="mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-900/30 flex items-center justify-center">
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Layering</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                Ready for Request Packing & Private Labeling (OEM)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

