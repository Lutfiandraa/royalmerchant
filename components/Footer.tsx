export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">ROYAL MERCHANT</h3>
            <p className="text-sm text-gray-400">
              Specializes of coconut charcoal for shisha and BBQ. Export quality from Indonesia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="text-sm text-gray-400">
              Get in touch with us for inquiries and orders.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Royal Merchant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

