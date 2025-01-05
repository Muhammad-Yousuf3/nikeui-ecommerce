import Image from 'next/image'
import SnkrHeader from '../SnkrHeader'
import {products} from '@/app/components/snkrProduct'
import Link from 'next/link'


export default function Home() {

  

  // Products - Replace these placeholder images & data with real info


  return (
    <div className="min-h-screen flex flex-col bg-white">
      
     <SnkrHeader/>

      {/* Product Grid  */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-gray-100 aspect-square flex items-center justify-center">
             <Link href={`./snkrproduct/${product.id}`}>
                  
                  <Image src={product.src} alt={'product'} width='200' height='200'></Image>
                 
               </Link>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}
