export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black page-transition">
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Contact Card */}
          <div className="flex justify-center">
            <div className="bg-black/30 backdrop-blur-md border border-gray-800/50 rounded-2xl p-8 sm:p-10 md:p-12 max-w-lg w-full shadow-2xl">
              <div className="space-y-6 sm:space-y-8">
                {/* Header Content */}
                <div className="text-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                    Contact
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    Get in touch with us for inquiries and partnerships
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-5 sm:space-y-6 pt-4">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a
                        href="mailto:E-mail@gmail.com"
                        className="text-base sm:text-lg text-white hover:text-gray-300 transition-colors"
                      >
                        E-mail@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <a
                        href="tel:+62xxxx-xxx"
                        className="text-base sm:text-lg text-white hover:text-gray-300 transition-colors"
                      >
                        62+xxxx-xxx
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-base sm:text-lg text-white">
                        Sanur, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

