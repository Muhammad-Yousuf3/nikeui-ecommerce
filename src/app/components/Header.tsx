'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      {/* Top Bar (For example, a Jordan icon) */}
      <div className="flex justify-between items-center h-10 px-4 border-b border-gray-200 bg-gray-100">
        <Link href="/">
          <Image 
            src="/jordan.png"
            alt="Jordan"
            width={20}
            height={20}
            className="object-contain"
          />
        </Link>

        {/* Utility Links (Hidden on very small screens if desired) */}
        <div className="hidden md:flex items-center space-x-2 text-gray-600">
              <Link href="#" className="hover:underline whitespace-nowrap">Find a Store</Link>
              <span>|</span>
              <Link href="#" className="hover:underline whitespace-nowrap">Help</Link>
              <span>|</span>
              <Link href="#" className="hover:underline whitespace-nowrap">Join Us</Link>
              <span>|</span>
              <Link href="../components/signin" className="hover:underline whitespace-nowrap">Sign In</Link>
            </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Nike Logo & Hamburger on Mobile */}
          <div className="flex items-center space-x-6">
            {/* Mobile: Hamburger Icon */}
            <button 
              className="lg:hidden p-2 rounded hover:bg-gray-100" 
              onClick={() => setMobileMenuOpen(true)} 
              aria-label="Open Menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Nike Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/nikelogo.png"
                alt="Nike"
                width={50}
                height={20}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Center Nav Links (Hidden on mobile) */}
          <nav className="hidden lg:flex lg:space-x-8 text-sm font-medium">
            <Link href="../components/newandfeatured" className="hover:underline">New & Featured</Link>
            <Link href="../components/men" className="hover:underline">Men</Link>
            <Link href="#" className="hover:underline">Women</Link>
            <Link href="#" className="hover:underline">Kids</Link>
            <Link href="#" className="hover:underline">Sale</Link>
            <Link href="../components/snkrs" className="hover:underline">SNKRS</Link>
          </nav>

          {/* Right Section: Links & Icons */}
          <div className="flex items-center space-x-4 text-sm text-gray-700">
            

            {/* Search Box (On large screens, an input; on smaller, could just be an icon) */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1.5">
              <svg width="16" height="16" fill="none" stroke="currentColor" className="text-gray-500 mr-2">
                <circle cx="7" cy="7" r="5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 11l3 3" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent text-sm focus:outline-none placeholder-gray-500"
              />
            </div>

            {/* Icons: Heart & Bag */}
            <button className="p-2 rounded hover:bg-gray-100" aria-label="Favorites">
              <svg width="24" height="24" fill="none" stroke="currentColor" className="text-gray-700">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.21 1.79-4 
                4-4 1.54 0 2.94.82 3.73 2.07h.54C12.06 5.32 13.46 4.5 15 4.5c2.21 
                0 4 1.79 4 4 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <Link href={'../components/cart'}>
            
            <button className="p-2 rounded hover:bg-gray-100" aria-label="Bag">
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path d="M5 4h14l-1.68 10.5c-.09.59-.67 1.02-1.27 1H7.95c-.6 0-1.18-.41-1.28-1L5 4z" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="19" r="1" />
                <circle cx="15" cy="19" r="1" />
              </svg>
            </button>

            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          {/* Slide-out Menu (From left) */}
          <div className="relative bg-white w-64 h-full p-6">
            <button 
              className="mb-6 p-2 rounded hover:bg-gray-100" 
              onClick={() => setMobileMenuOpen(false)} 
              aria-label="Close Menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
              <Link href="../components/newandfeatured" className="hover:underline">New & Featured</Link>
              <Link href="../components/men" className="hover:underline">Men</Link>
              <Link href="#" className="hover:underline">Women</Link>
              <Link href="#" className="hover:underline">Kids</Link>
              <Link href="#" className="hover:underline">Sale</Link>
              <Link href="../components/snkrs" className="hover:underline">SNKRS</Link>
            </nav>

            {/* Additional Links - could show/hide as needed */}
            <div className="mt-8 border-t pt-4 text-sm text-gray-600">
              <Link href="#" className="block hover:underline mb-2">Find a Store</Link>
              <Link href="#" className="block hover:underline mb-2">Help</Link>
              <Link href="#" className="block hover:underline mb-2">Join Us</Link>
              <Link href="../components/signin" className="block hover:underline mb-2">Sign In</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
