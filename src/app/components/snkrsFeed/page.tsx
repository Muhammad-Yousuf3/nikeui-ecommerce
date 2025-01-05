import Image from 'next/image'
import SnkrHeader from '../SnkrHeader'

export default function Home() {

  

  // Products - Replace these placeholder images & data with real info
  const products = [
    {id:1, src:"/snkr/blackstyle.png", alt:"Product 1"},
    {id:2, src:"/snkr/snkr2.jpeg", alt:"Product 2"},
    {id:3, src:"/snkr/snkr3.jpeg", alt:"Product 3"},
    {id:4, src:"/snkr/snkr4.jpeg", alt:"Product 4"},
    {id:5, src:"/snkr/snkr5.jpeg", alt:"Product 5"},
    {id:6, src:"/snkr/redstyle.png", alt:"Product 6"},
    {id:7, src:"/snkr/snkr7.jpeg", alt:"Product 7"},
    {id:8, src:"/snkr/blueshoe.png", alt:"Product 8"},
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
     <SnkrHeader/>

      {/* Product Grid  */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-gray-100 aspect-square ">
              <Image 
                src={product.src} 
                alt={product.alt}
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}
