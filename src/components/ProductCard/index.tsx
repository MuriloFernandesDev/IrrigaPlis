import Image from 'next/image'
import { useRouter } from 'next/router'
import TuboImg from '../../assets/images/tuboaco.png'
const ProductCard = () => {
   const router = useRouter()
   return (
      <div className="card card-compact mx-auto bg-base-100 shadow-xl sm:card-normal max-w-xs transition-all duration-300 hover:scale-105">
         <div className="card-body">
            <figure>
               <Image src={TuboImg} width={190} height={190} />
            </figure>
            <h2 className="card-title text-xl font-medium">
               Tubo de aço zincado - IP-20
            </h2>
            <p className="text-sm font-normal">Tamanhos variados</p>
            <div className="card-actions justify-start">
               <button
                  onClick={() => router.push('/products/produto')}
                  className="btn btn-success text-base-100"
               >
                  Detalhes
               </button>
            </div>
         </div>
      </div>
   )
}

export default ProductCard
