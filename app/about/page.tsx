export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black page-transition">
      {/* Main Content Section */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/woodcharcoal.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay untuk readability */}
        <div className="absolute inset-0 z-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Main Content - Centered */}
          <div className="flex flex-col items-center">
            {/* Text Content - Centered */}
            <div className="text-center max-w-3xl px-4">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8"
                style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
              >
                Royal Merchant
              </h2>
              <p 
                className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
                style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
              >
                Royal Merchant is an Indonesian exporter of premium coconut charcoal briquettes crafted for shisha and BBQ markets worldwide. With high production standards, carefully selected raw materials, and eco-friendly processing, we ensure long-lasting burn time, low ash residue, and consistent product quality. Committed to integrity and professionalism, we aim to be a trusted global partner by delivering reliable supply, exceptional service, and charcoal products that meet international expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

