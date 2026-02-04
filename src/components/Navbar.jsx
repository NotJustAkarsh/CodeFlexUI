import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/20 transition-all duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex gap-2 group cursor-pointer">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Code Flex"
                className="sm:h-8 sm:w-8 h-6 w-6"
              />
            </div>
            <span>
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                Code<span className="text-blue-500">Flow</span>
              </span>
            </span>
          </div>
          <div className="hidden gap-6 lg:gap-8 md:flex items-center">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
