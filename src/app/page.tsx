import Image from 'next/image';
import Link from 'next/link';


export default function HomePage() {
  return (

    <main className="w-full min-h-screen bg-white">
      {/* Top Notification Bar */}
      <header className="w-full border-b border-gray-200 py-2 text-center text-sm text-gray-700">
        <div className="container mx-auto px-4">
          <span>Hello Nike App</span>
          <span className="mx-2">|</span>
          <span>Download the app to access everything Nike. <Link href="#"><span className="underline hover:no-underline">Get Your Great</span></Link></span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-8">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-8">
            <Image
              src="/homepage/mainairpulse.png"
              alt="Nike Air Max Pulse"
              fill
              className="object-cover object-center rounded"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-2">First Look</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">
              Nike Air Max Pulse
            </h1>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — 
              designed to push you past your limits and help you go to the max.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#">
                <button className="rounded-2xl px-6 py-3 bg-black text-white text-sm uppercase font-medium hover:bg-gray-900 transition-colors">
                  Notify Me
                </button>
              </Link>
              <Link href="#">
                <button className="rounded-2xl px-6 py-3 border border-black text-black text-sm uppercase font-medium hover:bg-gray-100 transition-colors">
                  Shop Air Max
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <main className="w-full bg-white">
      {/* "Best of Air Max" Section */}
      <section className="w-full py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold">
              Best of Air Max
            </h2>
            <Link href="#" className="text-sm font-medium hover:underline">
              Shop
            </Link>
          </div>
          
          {/* Horizontal Scrollable Product Row */}
          <div className="relative">
            {/* Simple horizontal scroll container: 
                For pixel-perfect control, adjust min-w, spacing, and card dimensions as needed */}
            <div className="flex overflow-x-auto gap-6 scrollbar-none pb-2">
              
              {/* Product Card 1 */}
              <div className="flex-shrink-0 w-[280px]">
                <div className="relative w-full h-64 mb-4 bg-gray-100">
                  <Image 
                    src="/homepage/airpulse1.jpeg" 
                    alt="Nike Air Max Pulse" 
                    fill 
                    className="object-contain p-4" 
                    sizes="(min-width: 1024px) 280px, (min-width: 768px) 280px, 100vw"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Nike Air Max Pulse</h3>
                <p className="text-sm font-light text-gray-700 mb-1">Women&apos;s Shoes</p>
                <p className="text-sm font-medium">₹ 13 995</p>
              </div>

              {/* Product Card 2 */}
              <div className="flex-shrink-0 w-[280px]">
                <div className="relative w-full h-64 mb-4 bg-gray-100">
                  <Image 
                    src="/homepage/airpulse2.jpeg" 
                    alt="Nike Air Max Pulse" 
                    fill 
                    className="object-contain p-4" 
                    sizes="(min-width: 1024px) 280px, (min-width: 768px) 280px, 100vw"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Nike Air Max Pulse</h3>
                <p className="text-sm font-light text-gray-700 mb-1">Men&apos;s Shoes</p>
                <p className="text-sm font-medium">₹ 13 995</p>
              </div>

              {/* Product Card 3 */}
              <div className="flex-shrink-0 w-[280px]">
                <div className="relative w-full h-64 mb-4 bg-gray-100">
                  <Image 
                    src="/homepage/airpulse3.png" 
                    alt="Nike Air Max 97 SE" 
                    fill 
                    className="object-contain p-4" 
                    sizes="(min-width: 1024px) 280px, (min-width: 768px) 280px, 100vw"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">Nike Air Max 97 SE</h3>
                <p className="text-sm font-light text-gray-700 mb-1">Men&apos;s Shoes</p>
                <p className="text-sm font-medium">₹ 16 995</p>
              </div>
              
              {/* Duplicate Product Cards as needed */}
            </div>

            {/* Scroll Controls (optional): For a pixel-perfect match, 
                add functional buttons or indicators if required by design */}
            <div className="absolute right-4 top-[50%] flex flex-col gap-2">
              {/* Placeholder for scroll arrows/icons */}
              {/* Implement using onClick handlers to scroll, or integrate a carousel library */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="w-full py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Featured
          </h2>
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <Image 
              src="/homepage/runninginfield1.png" 
              alt="Featured Running" 
              fill 
              className="object-cover object-center"
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
          </div>
        </div>
      </section>
    </main>

    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="max-w-md mx-auto text-gray-700 text-sm sm:text-base mb-6">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <Link href="#">
          <button className="px-6 py-3 bg-black text-white text-sm font-medium uppercase hover:bg-gray-900 transition-colors">
            Find Your Shoe
          </button>
        </Link>
      </section>

      {/* Gear Up Section */}
      <section className="w-full py-12 sm:py-16 ">
        <div className="container mx-auto px-4 ">

          {/* Section Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8">
            Gear Up
          </h2>

          {/* Shop Men's Row */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-md sm:text-lg font-semibold">
              Shop Men&apos;s
            </h3>
            <div className="flex items-center gap-2">
              {/* Left Arrow (if needed) */}
              {/* Implement click handlers and scroll logic if required */}
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <span className="material-icons text-gray-600 text-sm">{'<'}</span>
              </button>
              {/* Right Arrow */}
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <span className="material-icons text-gray-600 text-sm">{'>'}</span>
              </button>
            </div>
          </div>

          {/* Horizontal scroll for Men's Products */}
          <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-none">
            <div className="min-w-[240px] flex-shrink-0">
              <div className="relative w-full h-64 mb-4 bg-gray-100">
                <Image 
                  src="/homepage/nikeshirt.jpeg" 
                  alt="Nike Dri-FIT ADV TechKnit Ultra" 
                  fill 
                  className="object-contain p-4" 
                />
              </div>
              <h4 className="text-sm font-medium mb-1">
                Nike Dri-FIT ADV TechKnit Ultra
              </h4>
              <p className="text-sm font-medium mb-1">
                ₹ 3 895
              </p>
              <p className="text-xs text-gray-600">
                Men&apos;s Short-Sleeve Running Top
              </p>
            </div>

            <div className="min-w-[240px] flex-shrink-0">
              <div className="relative w-full h-64 mb-4 bg-gray-100">
                <Image 
                  src="/homepage/menshort.png" 
                  alt="Nike Dri-FIT Challenger" 
                  fill 
                  className="object-contain p-4" 
                />
              </div>
              <h4 className="text-sm font-medium mb-1">
                Nike Dri-FIT Challenger
              </h4>
              <p className="text-sm font-medium mb-1">
                ₹ 2 495
              </p>
              <p className="text-xs text-gray-600">
                Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
              </p>
            </div>
            
            {/* Add more men's products as needed */}
          </div>

          {/* Shop Women's Row */}
          <div className="flex justify-between items-center mt-12 mb-6">
            <h3 className="text-md sm:text-lg font-semibold">
              Shop Women&apos;s
            </h3>
            <div className="flex items-center gap-2">
              {/* Left Arrow */}
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <span className="material-icons text-gray-600 text-sm">{'<'}</span>
              </button>
              {/* Right Arrow */}
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <span className="material-icons text-gray-600 text-sm">{'>'}</span>
              </button>
            </div>
          </div>

          {/* Horizontal scroll for Women's Products */}
          <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-none">
            <div className="min-w-[240px] flex-shrink-0">
              <div className="relative w-full h-64 mb-4 bg-gray-100">
                <Image 
                  src="/homepage/womenshirt.png" 
                  alt="Nike Dri-FIT ADV Run Division" 
                  fill 
                  className="object-contain p-4" 
                />
              </div>
              <h4 className="text-sm font-medium mb-1">
                Nike Dri-FIT ADV Run Division
              </h4>
              <p className="text-sm font-medium mb-1">
                ₹ 2 295
              </p>
              <p className="text-xs text-gray-600">
                Women&apos;s Long-Sleeve Running Top
              </p>
            </div>

            <div className="min-w-[240px] flex-shrink-0">
              <div className="relative w-full h-64 mb-4 bg-gray-100">
                <Image 
                  src="/homepage/womentrouser.png" 
                  alt="Nike Fast" 
                  fill 
                  className="object-contain p-4" 
                />
              </div>
              <h4 className="text-sm font-medium mb-1">
                Nike Fast
              </h4>
              <p className="text-sm font-medium mb-1">
                ₹ 3 795
              </p>
              <p className="text-xs text-gray-600">
                Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
              </p>
            </div>

            {/* Add more women's products as needed */}
          </div>
        </div>
      </section>
    </main>

    <main className="w-full bg-white">

      {/* Top Section */}
      <section className="w-full py-8 sm:py-12 px-4">
        <div className="container mx-auto">

          {/* "Don't Miss" Label (If needed as a floating label) */}
          <div className="mb-4 text-lg font-extrabold text-gray-800">
            Don&apos;t Miss
          </div>

          {/* Split Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100">
              <Image
                src="/homepage/jordan-left.png" // Replace with your image
                alt="Jordan Brand Model"
                fill
                className=""
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Right Image Panel with Text */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-50 flex items-center justify-center">
              <div className="absolute top-6 text-xs uppercase tracking-wide space-y-1 text-gray-800 flex ">
                <div>Jordan Brand Spring 2024</div>
              </div>
              <div className="relative w-3/4 h-3/4 bg-white shadow-md flex items-center justify-center">
                <Image
                  src="/homepage/jordan-right.png" // Replace with your image
                  alt="Jordan Brand Feature"
                  fill
                  className=""
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute top-6 left-6 text-xs uppercase text-gray-800 font-medium">
                {/* Could place a small logo or brand mark here if needed */}
                <span className="inline-block w-6 h-6 bg-[url('/images/jordan-logo.svg')] bg-contain bg-no-repeat"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Essentials Section */}
      <section className="w-full py-12 sm:py-16 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4">
            Flight Essentials
          </h2>
          <p className="max-w-md mx-auto text-sm sm:text-base text-gray-700 mb-8">
            Your built-to-last, all-week wears— but with style only Jordan Brand can deliver.
          </p>

          <Link href="#">
            <button className="px-6 py-3 bg-black text-white text-sm font-medium uppercase hover:bg-gray-900 transition-colors">
              Shop
            </button>
          </Link>
        </div>
      </section>

    </main>

    
    <main className="w-full bg-white">
      <section className="w-full py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            The Essentials
          </h2>

          {/* Top Three Images Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {/* Men's */}
            <div className="relative w-full h-64 sm:h-[400px] bg-gray-100">
              <Image
                src="/homepage/essentials-men.png" // Replace with your image
                alt="Men's Essentials"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <Link href="#">
                  <button className="px-4 py-2 bg-white text-black text-sm font-medium uppercase hover:bg-gray-100 transition-colors">
                    Men&apos;s
                  </button>
                </Link>
              </div>
            </div>

            {/* Women's */}
            <div className="relative w-full h-64 sm:h-[400px] bg-gray-100">
              <Image
                src="/homepage/essentials-women.png" // Replace with your image
                alt="Women's Essentials"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <Link href="#">
                  <button className="px-4 py-2 bg-white text-black text-sm font-medium uppercase hover:bg-gray-100 transition-colors">
                    Women&apos;s
                  </button>
                </Link>
              </div>
            </div>

            {/* Kids' */}
            <div className="relative w-full h-64 sm:h-[400px] bg-gray-100">
              <Image
                src="/homepage/essentials-kids.png" // Replace with your image
                alt="Kids' Essentials"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <Link href="#">
                  <button className="px-4 py-2 bg-white text-black text-sm font-medium uppercase hover:bg-gray-100 transition-colors">
                    Kids&apos;
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">
            {/* Icons */}
            <div>
              <h3 className="font-medium mb-3">Icons</h3>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="#" className="hover:underline">Air Force 1</Link></li>
                <li><Link href="#" className="hover:underline">Huarache</Link></li>
                <li><Link href="#" className="hover:underline">Air Max 90</Link></li>
                <li><Link href="#" className="hover:underline">Air Max 95</Link></li>
              </ul>
            </div>

            {/* Shoes */}
            <div>
              <h3 className="font-medium mb-3">Shoes</h3>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="#" className="hover:underline">All Shoes</Link></li>
                <li><Link href="#" className="hover:underline">Custom Shoes</Link></li>
                <li><Link href="#" className="hover:underline">Jordan Shoes</Link></li>
                <li><Link href="#" className="hover:underline">Running Shoes</Link></li>
              </ul>
            </div>

            {/* Clothing */}
            <div>
              <h3 className="font-medium mb-3">Clothing</h3>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="#" className="hover:underline">All Clothing</Link></li>
                <li><Link href="#" className="hover:underline">Modest Wear</Link></li>
                <li><Link href="#" className="hover:underline">Hoodies & Pullovers</Link></li>
                <li><Link href="#" className="hover:underline">Shirts & Tops</Link></li>
              </ul>
            </div>

            {/* Kids' */}
            <div>
              <h3 className="font-medium mb-3">Kids&apos;</h3>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="#" className="hover:underline">Infant & Toddler Shoes</Link></li>
                <li><Link href="#" className="hover:underline">Kids&apos; Shoes</Link></li>
                <li><Link href="#" className="hover:underline">Kids&apos; Jordan Shoes</Link></li>
                <li><Link href="#" className="hover:underline">Kids&apos; Basketball Shoes</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>

    </main>
  );
}
