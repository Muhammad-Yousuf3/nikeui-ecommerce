import Image from 'next/image'



export default function NewandFeatured() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-black">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto flex-1 w-full px-4 py-8">
        {/* Heading and Filter Bar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">New (500)</h1>
          <div className="text-sm space-x-4">
            <button className="underline">Hide Filters</button>
            <button className="underline">Sort By</button>
          </div>
        </div>

        <div className="flex space-x-8">
          {/* Sidebar Filters */}
          <aside className="w-1/4 hidden lg:block">
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h2 className="font-semibold mb-2">Gender</h2>
                <ul className="space-y-1 text-sm">
                  <li><button className="hover:underline">Men</button></li>
                  <li><button className="hover:underline">Women</button></li>
                  <li><button className="hover:underline">Unisex</button></li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-2">Kids</h2>
                <ul className="space-y-1 text-sm">
                  <li><button className="hover:underline">Boys</button></li>
                  <li><button className="hover:underline">Girls</button></li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-2">Shop by Price</h2>
                <ul className="space-y-1 text-sm">
                  <li><button className="hover:underline">Under ₹ 2,500.00</button></li>
                  <li><button className="hover:underline">₹ 2,501.00+</button></li>
                </ul>
              </div>
              {/* Add more filters as needed */}
            </div>
          </aside>

         {/* Product Grid */}
<section className="flex-1">
  {/* Define your products array */}
  {/*
    This array can come from your props, a CMS, or a static file.
    Each product object has its own image source and details.
  */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {[
      {
        id: 1,
        image: "/nikeairmax.png",
        title: "Nike Air Force 1 Mid '07",
        category: "Men's Shoes",
        colorCount: 1,
        price: "₹ 10,795.00",
        label: "Just In",
      },
      {
        id: 2,
        image: "/nikeairmax90.jpeg",
        title: "Nike Air Max 90",
        category: "Men's Shoes",
        colorCount: 2,
        price: "₹ 11,495.00",
        label: "New Arrival",
      },
      {
        id: 3,
        image: "/nikeairvapormax.jpeg",
        title: "Nike Air VaporMax",
        category: "Men's Shoes",
        colorCount: 3,
        price: "₹ 15,995.00",
        label: "Just In",
      },
      {
        id: 4,
        image: "/nikezoomx.jpeg",
        title: "Nike ZoomX",
        category: "Running Shoes",
        colorCount: 2,
        price: "₹ 12,995.00",
        label: "New",
      },
      // Add more products as needed
    ].map((product) => (
      <div key={product.id} className="group cursor-pointer">
        <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-2">
          {product.label && (
            <p className="text-xs uppercase text-red-500 mb-1">
              {product.label}
            </p>
          )}
          <h3 className="text-sm font-medium">{product.title}</h3>
          <p className="text-sm text-gray-700">{product.category}</p>
          <p className="text-sm">{product.colorCount} Colour{product.colorCount > 1 ? 's' : ''}</p>
          <p className="text-sm font-medium mt-1">MRP: {product.price}</p>
        </div>
      </div>
    ))}
  </div>
</section>

        </div>
      </main>

    </div>
  )
}
