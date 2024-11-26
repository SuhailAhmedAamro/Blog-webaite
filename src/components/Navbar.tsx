'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 shadow-md' : 'bg-gray-900'
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-wrap items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold">
          <span className={`${isScrolled ? 'text-blue-600' : 'text-blue-400'}`}>
            Sakeena
          </span>
          <span className="ml-1">Blogs</span>
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-4 md:space-x-6 mt-3 md:mt-0">
          <Link
            href="https://www.linkedin.com/in/sakeena-majeed-86b58732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="hover:text-blue-600 transition-all"
          >
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link
            href="https://www.facebook.com/sukaina.majeed.98?mibextid=ZbWKwL"
            target="_blank"
            className="hover:text-blue-600 transition-all"
          >
            <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}