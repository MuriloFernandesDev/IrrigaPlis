import Image from 'next/image'
import { useRouter } from 'next/router'
import DefaultImg from '../../assets/images/default.png'

interface ProductCardProps {
   title: string
   description: string
   img: string | null
   id: number
}

const ProductCard = ({ title, description, img, id }: ProductCardProps) => {
   const router = useRouter()
   return (
      <div className="card card-compact bg-base-100 shadow-xl sm:card-normal max-w-xs transition-all duration-300 hover:scale-105 min-h-[450px]">
         <div className="card-body">
            <figure className="w-[100%]">
               <Image
                  src={img ? img : DefaultImg}
                  width={250}
                  height={240}
                  layout="fixed"
               />
            </figure>
            <h2 className="card-title text-xl font-medium">{title}</h2>
            <p className="text-sm font-normal">{description}</p>
            <div className="card-actions justify-start">
               <button
                  onClick={() => router.push(`/produtos/${id}`)}
                  className="btn btn-success text-base-100 btn-block"
               >
                  Detalhes
               </button>
            </div>
         </div>
      </div>
   )
}

export default ProductCard
