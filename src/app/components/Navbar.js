"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsProductsOpen(false);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsServicesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav
      id="home-nav"
      className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4 md:px-2"
    >
      <div className="flex items-center justify-between bg-[#fff] backdrop-blur-sm rounded-lg px-4 py-3 gap-5 shadow-lg w-full max-w-[950px]">
        <Link href="/" className="flex items-center  min-w-[75px]">
          <Image
            src="/assets/main-logo.svg"
            alt="Maleo AI Logo"
            width={90}
            height={90}
            className="object-contain w-[75px] md:w-[75px]"
            priority
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-[#004360] p-2"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-[#004360] p-2 rounded-lg">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
            } text-white px-8 py-2 rounded-lg text-sm font-light transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
            } text-white px-8 py-2 rounded-lg text-sm font-light transition-colors`}
            style={{ whiteSpace: "nowrap" }}
          >
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={toggleServices}
              className={`${
                pathname === "/services" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
              } text-white px-8 py-2 rounded-lg text-sm font-light transition-colors flex items-center gap-1`}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-[600px] bg-[#E5F4FF] rounded-2xl shadow-lg z-10 p-4 grid grid-cols-2 gap-4">
                <Link
                  href="/services/ai-solutions"
                  className="flex items-center gap-3 px-6 py-4 text-[#004360] rounded-xl hover:bg-[#00A0E466] transition-colors"
                >
                  <span className="text-sm font-medium">AI Solution</span>
                </Link>

                <Link
                  href="/services/web-app-development"
                  className="flex items-center gap-3 px-6 py-4 text-[#004360] rounded-xl hover:bg-[#00A0E466] transition-colors"
                >
                  <span className="text-sm font-medium">
                    Web and App Development
                  </span>
                </Link>

                <Link
                  href="/services/remote-tech-talent"
                  className="flex items-center gap-3 px-6 py-4 text-[#004360] rounded-xl hover:bg-[#00A0E466] transition-colors"
                >
                  <span className="text-sm font-medium">
                    Remote Talent Outsourcing
                  </span>
                </Link>

                <Link
                  href="/services/ai-training"
                  className="flex items-center gap-3 px-6 py-4 text-[#004360] rounded-xl hover:bg-[#00A0E466] transition-colors"
                >
                  <span className="text-sm font-medium">
                    AI Training and Workshop
                  </span>
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleProducts}
              className={`${
                pathname === "/products" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
              } text-white px-8 py-2 rounded-lg text-sm font-light transition-colors flex items-center gap-1`}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductsOpen && (
              <div className="absolute left-0 mt-2 w-[200px] bg-[#E5F4FF] rounded-2xl shadow-lg z-10 p-4">
                <Link
                  href="/products/chat-assistly-ai"
                  className="flex items-center gap-3 px-6 py-4 text-[#004360] rounded-xl hover:bg-[#00A0E466] transition-colors"
                >
                  <span className="text-sm font-medium">Chat Assistly AI</span>
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className={`text-nowrap ${
              pathname === "/contact" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
            } text-white px-8 py-2 rounded-lg text-sm font-light transition-colors`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg flex-col w-full p-4`}
        >
          <Link
            href="/"
            className={`${
              pathname === "/" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
            } text-white bg-[#004360] px-4 py-2 rounded-lg text-sm font-light transition-colors mb-2`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
            } text-white bg-[#004360] px-4 py-2 rounded-lg text-sm font-light transition-colors mb-2`}
            style={{ whiteSpace: "nowrap" }}
          >
            About Us
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="w-full mb-2">
            <button
              onClick={toggleServices}
              className={`${
                pathname === "/services" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
              } text-white bg-[#004360] px-4 py-2 rounded-lg text-sm font-light transition-colors w-full text-left flex justify-between items-center`}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="bg-[#E5F4FF] rounded-lg mt-2 p-2 flex flex-col gap-2">
                <Link
                  href="/services/ai-solutions"
                  className="px-4 py-2 text-[#004360] rounded-lg hover:bg-[#00A0E466] transition-colors"
                >
                  AI Solution
                </Link>
                <Link
                  href="/services/web-app-development"
                  className="px-4 py-2 text-[#004360] rounded-lg hover:bg-[#00A0E466] transition-colors"
                >
                  Web and App Development
                </Link>
                <Link
                  href="/services/remote-tech-talent"
                  className="px-4 py-2 text-[#004360] rounded-lg hover:bg-[#00A0E466] transition-colors"
                >
                  Remote Talent Outsourcing
                </Link>
                <Link
                  href="/services/ai-training"
                  className="px-4 py-2 text-[#004360] rounded-lg hover:bg-[#00A0E466] transition-colors"
                >
                  AI Training and Workshop
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Products Dropdown */}
          <div className="w-full mb-2">
            <button
              onClick={toggleProducts}
              className={`${
                pathname === "/products" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
              } text-white bg-[#004360] px-4 py-2 rounded-lg text-sm font-light transition-colors w-full text-left flex justify-between items-center`}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductsOpen && (
              <div className="bg-[#E5F4FF] rounded-lg mt-2 p-2 flex flex-col gap-2">
                <Link
                  href="/products/chat-assistly-ai"
                  className="px-4 py-2 text-[#004360] rounded-lg hover:bg-[#00A0E466] transition-colors"
                >
                  Chat Assistly AI
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`${
              pathname === "/contact" ? "bg-[#FF6B2C]" : "hover:bg-[#FF6B2C]"
            } text-white bg-[#004360] px-4 py-2 rounded-lg text-sm font-light transition-colors mb-2`}
          >
            Contact Us
          </Link>

          <Link
            href="https://cal.com/maleoai/30min?date=2025-01-06&month=2025-01"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white px-4 py-2 rounded-lg text-sm font-light transition-colors text-nowrap"
          >
            Book a Session
          </Link>
        </div>

        {/* Desktop Book Session Button */}
        <Link
          href="https://cal.com/maleoai/30min?date=2025-01-06&month=2025-01"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:block ml-1 text-nowrap ${
            pathname === "/book"
              ? "bg-[#FF6B2C]"
              : "bg-[#FF6B2C] hover:bg-[#FF6B2C]/90"
          } text-white px-4 py-3 rounded-lg text-sm font-light transition-colors`}
        >
          Book a Session
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
