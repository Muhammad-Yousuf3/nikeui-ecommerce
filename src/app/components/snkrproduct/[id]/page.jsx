// app/product/[id]/page.js
import {products} from '@/app/components/snkrProduct'
import Link from 'next/link';
import Image from 'next/image';

/** 
 * Tells Next.js which routes to generate statically at build-time.
 */
export async function generateStaticParams() {
  return products.map((products) => ({
    id: products.id,
  }));
}



export default function ProductPage({ params }) {
  // 'params' contains the URL segments, e.g. { id: 'nike-air-force-1-mid-07' }
  const product = products.find((p) => p.id === params.id);

  if (!products) {
    return (
      <div className="p-4">
        <h2>Product not found</h2>
        <Link href="../components/snkrs">
          <span className="text-blue-500 underline cursor-pointer">&larr; Go Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 border-b border-gray-200 flex items-center">
        <Link href="./components/snkrs" className="mr-4 text-blue-500 hover:underline">
          &larr; Back
        </Link>
        <h1 className="text-xl font-bold">{product.title}</h1>
      </header>

      {/* Main Content */}
      <main className="p-4 flex flex-col md:justify-center md:flex-row  md:bg-gray-50">
        {/* Product Image */}
        <div className="ml-10 p-4">
        <Image src={product.src} alt={product.id} width='300' height='300' className= 'h-auto object-contain'></Image>
        </div>

        {/* Product Info */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-gray-900 text-xl mb-4">
            MRP: ₹{product.price}.00
          </p>
          {product.badge && (
            <p className="text-red-500 font-medium mb-4">{product.badge}</p>
          )}

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
}
