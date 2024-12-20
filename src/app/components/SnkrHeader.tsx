'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function SnkrHeader(){

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return(
   <main>

{/* Top Visit Bar */}

<div className="border-b border-gray-200 h-10 flex items-center px-4 text-sm text-gray-700">
<Link href="#" className="hover:underline">Visit Nike.com</Link>
</div>

{/* Main Header Row ,Logo on left, main nav in center*/}

<header className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

  {/* Left Part  */}

  <div className="flex items-center space-x-4">
    {/* Red Nike & SNKRS logos */}
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/nikelogo.png" alt="Nike" width={40} height={20} />
    </Link>
  </div>

  {/* Center Nav */}

  <nav className="hidden md:flex space-x-8 text-sm font-medium">
    <Link href="../components/snkrsFeed" className="hover:underline focus:underline text-gray-700">Feed</Link>
    {/* 'In Stock' presumably active with underline */}
    <div className="relative pb-2">
      <Link href="../components/snkrs" className="hover:underline focus:underline text-gray-700">In Stock</Link>
    </div>
    <Link href="#" className="hover:underline focus:underline text-gray-700">Upcoming</Link>
  </nav>

  {/* Right Part */}

  <div className="flex items-center space-x-4">
    {/* On larger screens: Join/Log In, Help, India */}
    <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
      <Link href="../components/signin" className="hover:underline whitespace-nowrap">Join/Log In</Link>
      <Link href="../components/help" className="hover:underline whitespace-nowrap">Help</Link>
      <Link href="#" className="hover:underline whitespace-nowrap">Pakistan</Link>
    </div>

    {/* Mobile Menu Button */}
    <button 
      onClick={() => setMobileMenuOpen(true)}
      className="md:hidden p-2 hover:bg-gray-100 rounded"
      aria-label="Open menu"
    >
      <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
      </svg>
    </button>
  </div>

</div>
</header>

{/* Mobile Menu */}

{mobileMenuOpen && (
<div className="fixed inset-0 z-50">
  <div 
    onClick={() => setMobileMenuOpen(false)} 
    className="absolute inset-0 bg-black bg-opacity-50"
  />
  <div className="relative bg-white w-64 h-full p-6">
    <button 
      onClick={() => setMobileMenuOpen(false)}
      className="mb-4 p-2 hover:bg-gray-100 rounded"
      aria-label="Close menu"
    >
      <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
      </svg>
    </button>

    <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
      <Link href="../components/snkrsFeed" className="hover:underline">Feed</Link>
      <Link href="../components/snkrs" className="hover:underline">In Stock</Link>
      <Link href="#" className="hover:underline">Upcoming</Link>
    </nav>
    
    <div className="mt-8 border-t pt-4 text-sm text-gray-600">
      <Link href="../components/signin" className="block hover:underline mb-2">Join/Log In</Link>
      <Link href="../components/help" className="block hover:underline mb-2">Help</Link>
      <Link href="#" className="block hover:underline mb-2">Pakistan</Link>
    </div>
  </div>
</div>
  )}

   </main>

  )
    }