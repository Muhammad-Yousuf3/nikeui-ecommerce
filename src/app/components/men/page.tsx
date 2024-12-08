import Image from 'next/image'


export default function Men() {
  return (
    <div className="min-h-screen bg-white">
    

      {/* Top Notice Bar (Free Delivery) */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center text-sm text-gray-700">
          <span className="font-medium">Free Delivery</span>
          <span className="ml-2 text-gray-500">Applies to orders of ₹ 14,000.00 or more.</span>
          <a href="#"
             className="ml-2 text-blue-600 hover:underline">
             View details
          </a>
        </div>
      </div>

      {/* Main Content Bag Items on left, Summary on right for large screens. */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Bag Title */}
        <h1 className="text-2xl font-semibold mb-6">Bag</h1>
        
        {/* Grid layout: Items (2/3 width) | Summary (1/3 width) on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          
          {/* Left Column: Bag Items */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 
              Example Item 1 
              Adjust spacing as needed for pixel perfection.
            */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex space-x-4">
                {/* Product Image */}
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image 
                    src="/nikeshirt.jpeg"
                    alt="Nike Dri-FIT ADV TechKnit Ultra"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h2>
                  <p className="text-sm text-gray-700">Men&apos;s Short-Sleeve Running Top</p>
                  <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                  
                  {/* Size and Quantity */}
                  <div className="flex items-center space-x-6 mt-1 text-sm text-gray-600">
                    <span>Size <span className="font-medium text-gray-800">L</span></span>
                    <span>Quantity <span className="font-medium text-gray-800">1</span></span>
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex-shrink-0 text-right whitespace-nowrap">
                  <span className="font-medium">MRP: ₹ 3,895.00</span>
                </div>
              </div>
              
              {/* Action Icons (Wishlist & Delete) */}
              <div className="flex items-center space-x-4 mt-4 pl-28 text-gray-700">
                {/* Heart Icon */}
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Add to Wishlist">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8a5 5 0 0 1 8-4A5 5 0 0 1 19 8c0 6-8 10-8 10S3 14 3 8z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {/* Trash Icon */}
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Remove Item">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h14M9 6V4h2v2m4 0h2m-2 0v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h10z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 
              Example Item 2 
              Repeat structure for more items as needed.
            */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex space-x-4">
                {/* Product Image */}
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image 
                    src="/nikeairmax90.jpeg"
                    alt="Nike Air Max 97 SE"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="font-medium">Nike Air Max 97 SE</h2>
                  <p className="text-sm text-gray-700">Men&apos;s Shoes</p>
                  <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                  
                  {/* Size and Quantity */}
                  <div className="flex items-center space-x-6 mt-1 text-sm text-gray-600">
                    <span>Size <span className="font-medium text-gray-800">8</span></span>
                    <span>Quantity <span className="font-medium text-gray-800">1</span></span>
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex-shrink-0 text-right whitespace-nowrap">
                  <span className="font-medium">MRP: ₹ 16,995.00</span>
                </div>
              </div>
              
              {/* Action Icons */}
              <div className="flex items-center space-x-4 mt-4 pl-28 text-gray-700">
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Add to Wishlist">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8a5 5 0 0 1 8-4A5 5 0 0 1 19 8c0 6-8 10-8 10S3 14 3 8z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Remove Item">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h14M9 6V4h2v2m4 0h2m-2 0v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h10z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Favorites Section */}
            <div className="pt-8">
              <h2 className="text-lg font-semibold mb-2">Favourites</h2>
              <p className="text-sm text-gray-700">There are no items saved to your favourites.</p>
            </div>
          </div>
          
          {/* Right Column: Summary */}
          <aside className="mt-8 lg:mt-0">
            <div className="border border-gray-200 p-6 rounded-md">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-2 text-sm text-gray-700">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              
              {/* Delivery & Handling */}
              <div className="flex items-center justify-between mb-2 text-sm text-gray-700">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
              
              {/* Total */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300 text-base font-medium">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
              
              {/* Checkout Button */}
              <button className="mt-6 w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-900">
                Member Checkout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
