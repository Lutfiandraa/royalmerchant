export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black page-transition">
      {/* Hero Section — responsif: gambar mengisi layar mobile (9:16 / memanjang ke bawah) */}
      <section
        className="relative flex min-h-[100dvh] min-h-[100vh] items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-16 sm:min-h-[500px] sm:py-20 md:min-h-[600px] md:py-24"
        style={{
          backgroundImage: 'url(/charcoaldefault.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-2xl font-bold leading-tight tracking-tight text-white break-words sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
            >
              INDONESIAN FINEST COCONUT CHARCOAL
            </h1>
            <p
              className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 sm:mt-4 sm:text-base md:mt-6 md:text-lg"
              style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Royal Merchant provides premium charcoal products crafted for shisha and BBQ markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section — Natural, Quality, Fine Process, Layering + icon (ticker) */}
      <section className="overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="features-ticker-track" aria-hidden="true">
          {[1, 2].map((key) => (
            <div key={key} className="features-ticker-set flex shrink-0 items-center gap-10 sm:gap-14">
              <div className="features-ticker-item flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/30 sm:h-16 sm:w-16">
                  <svg className="h-6 w-6 text-green-500 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white sm:text-lg">Natural</h3>
              </div>
              <div className="features-ticker-item flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/30 sm:h-16 sm:w-16">
                  <svg className="h-6 w-6 text-green-500 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white sm:text-lg">Quality</h3>
              </div>
              <div className="features-ticker-item flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/30 sm:h-16 sm:w-16">
                  <svg className="h-6 w-6 text-green-500 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white sm:text-lg">Fine Process</h3>
              </div>
              <div className="features-ticker-item flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/30 sm:h-16 sm:w-16">
                  <svg className="h-6 w-6 text-green-500 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white sm:text-lg">Layering</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
