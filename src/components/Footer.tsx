import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, ArrowUp, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Head Office Section */}
          <div className="group min-w-[200px]">
            <h3 className="text-gray-800 font-semibold text-lg mb-6 relative">
              Head Office
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500 transform origin-left transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
              1A, Tiamiyu Savage Street,<br />
              Victoria Island, Lagos State, Nigeria
            </p>
          </div>

          {/* Construction Yard Section */}
          <div className="group min-w-[200px]">
            <h3 className="text-gray-800 font-semibold text-lg mb-6 relative">
              Construction Yard
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500 transform origin-left transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
              Shell Location Road<br />
              Opposite Agbada 2 Flowstation off<br />
              Airport Road<br />
              Igwuruta Port-Harcourt
            </p>
          </div>

          {/* Contact Section */}
          <div className="group min-w-[200px]">
            <h3 className="text-gray-800 font-semibold text-lg mb-6 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500 transform origin-left transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <div className="space-y-3">
              <a href="mailto:send@email.com"
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors group">
                <Mail size={18} className="mr-2 group-hover:text-red-500 transition-colors" />
                Send Email
              </a>
              <p className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2" />
                +234 1 453 8880
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="group min-w-[200px]">
            <h3 className="text-gray-800 font-semibold text-lg mb-6 relative">
              Social
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500 transform origin-left transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <div className="flex space-x-6">
              <a href="#" className="transform hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-2 md:mb-0 hover:text-gray-700 transition-colors">
              © 2025 Seflam SGL All Rights Reserved.
            </p>
            <p className="hover:text-gray-700 transition-colors">
              Website by Peacedev
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 bg-red-500 text-white rounded-full p-3 shadow-lg
          hover:bg-red-600 transform hover:scale-110 transition-all duration-300 focus:outline-none
          focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;