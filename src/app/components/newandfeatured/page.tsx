// pages/index.js
import Link from 'next/link';
import { products } from '@/app/product';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold">New (500)</h1>
      </header>

      {/* Main Content: sidebar + product list */}
      <main className="flex flex-col md:flex-row">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5 p-4 bg-gray-50 border-r border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Gender</h3>
            <ul className="space-y-1">
              <li><button className="hover:underline">Men</button></li>
              <li><button className="hover:underline">Women</button></li>
              <li><button className="hover:underline">Unisex</button></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Kids</h3>
            <ul className="space-y-1">
              <li><button className="hover:underline">Boys</button></li>
              <li><button className="hover:underline">Girls</button></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Shop by Price</h3>
            <ul className="space-y-1">
              <li><button className="hover:underline">Under ₹2,500</button></li>
              <li><button className="hover:underline">₹2,501 +</button></li>
            </ul>
          </div>
        </aside>

        {/* Product List */}
        <section className="w-full md:w-3/4 lg:w-4/5 p-4">
          {/* Sort & Filter Toggle (optional) */}
          <div className="flex justify-end mb-4">
            <button className="mr-4 border px-2 py-1 hover:bg-gray-200 rounded">
              Hide Filters
            </button>
            <button className="border px-2 py-1 hover:bg-gray-200 rounded">
              Sort By
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <div 
                key={product.id}
                className="p-4 border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="text-sm font-medium text-red-500 mb-2">
                    {product.badge}
                  </div>
                )}

                {/* Image + Link to Dynamic Page */}
                <Link href={`/product/${product.id}`}>
                  
                   <Image src={product.src} alt={product.id} width='200' height='200'></Image>
                  
                </Link>

                {/* Info */}
                <p className="font-semibold">{product.title}</p>
                <p className="text-gray-600 text-sm">{product.category}</p>
                <p className="text-gray-900 mt-1">
                  MRP: ₹{product.price.toLocaleString('en-IN')}.00
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
