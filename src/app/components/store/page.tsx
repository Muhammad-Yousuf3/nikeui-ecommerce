import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full font-sans bg-white">
      {/* Left Panel */}
      <div className="lg:w-1/3 w-full lg:border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold mb-2">Find a Nike Store</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search Location" 
              className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <svg 
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" 
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* Store List Container */}
        <div className="overflow-auto flex-1">
          {/* Example Store Item */}
          <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
            <h2 className="font-semibold text-lg">Nike NYC - House of Innovation 000</h2>
            <p className="text-sm text-gray-600">650 5th Ave, New York, NY, 10019, US</p>
            <span className="text-sm text-red-600">Closed - Opens at 11:00 am</span>
          </div>

          <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
            <h2 className="font-semibold text-lg">Nike By Upper East Side</h2>
            <p className="text-sm text-gray-600">1131 3rd Ave, New York, NY, 10065, US</p>
            <span className="text-sm text-red-600">Closed - Opens at 11:00 am</span>
          </div>

          <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
            <h2 className="font-semibold text-lg">Nike By Flatiron</h2>
            <p className="text-sm text-gray-600">156 5th Ave, New York, NY, 10010, US</p>
            <span className="text-sm text-red-600">Closed - Opens at 11:00 am</span>
          </div>

          {/* Repeat as needed or map through dynamic data */}
          <div className="p-4 border-t border-gray-200 hover:bg-gray-50 cursor-pointer">
            <h2 className="font-semibold text-base text-black hover:underline">View All Stores</h2>
          </div>
        </div>
      </div>

      <Image src="/store/store.png" alt='Map' height={1} width={900} className='w-full'></Image>


        {/* Add additional markers as needed */}
      </div>
   
  );
}
