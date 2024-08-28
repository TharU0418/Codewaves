'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="welcome py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Link href="/" className="text-black text-2xl font-bold">
              {/* <Image
                source='/images/logo.png'
                alt='LOGO'
              /> */}
              <img
            src="/images/5.png"
            alt="get-started"
            //className="w-[90%] h-[90%] object-contain"
            width={80}
            height={80}
          />
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden sm:block sm:ml-6 absolute inset-y-0 right-0 items-center space-x-4 mt-1">
            <div className="flex space-x-4">
              {/* <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">
                HOME
              </Link> */}
              <Link href="/Our-works" className="text-white hover:bg-white hover:text-red-800 px-3 py-2 rounded-md text-m font-medium">
                OUR PROJECT
              </Link>
              <Link href="/aboutus" className="text-white hover:bg-white hover:text-red-800 px-3 py-2 rounded-md text-m font-medium">
                ABOUT US
              </Link>
              <Link href="/careers" className="text-white hover:bg-white hover:text-red-800 px-3 py-2 rounded-md text-m font-medium">
               CAREERS
              </Link>
              <Link href="/contact" className="text-white hover:bg-white hover:text-red-800 px-3 py-2 rounded-md text-m font-medium">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            HOME
          </Link> */}
          <Link href="/Our-works" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          OUR PROJECT
          </Link>
          <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
           ABOUT US
          </Link>
          <Link href="/careers" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            CAREERS
          </Link> 
          <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
