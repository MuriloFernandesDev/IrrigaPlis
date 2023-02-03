import Image from 'next/image'
import Link from 'next/link'
import DefaultImg from '../../assets/images/default.png'

interface ProductCardProps {
   title: string
   description: string
   img: string | null
   id: number
}

const ProductCard = ({ title, description, img, id }: ProductCardProps) => {
   return (
      <Link href={`/produtos/${id}`}>
         <div className="card card-compact bg-base-100 shadow-xl sm:card-normal max-w-xs transition-all duration-300 md:hover:scale-105 max-h-[420px] min-h-[420px]">
            <div className="card-body p-3">
               <figure className="w-[80%] mx-auto">
                  <Image
                     src={img ? img : DefaultImg}
                     width={250}
                     height={240}
                     layout="intrinsic"
                  />
               </figure>
               <h2 className="card-title text-xl font-medium">{title}</h2>
               <p className="text-sm font-normal">{description}</p>
               <div className="card-actions justify-start">
                  <button className="btn btn-success text-base-100 btn-block">
                     Detalhes
                  </button>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default ProductCard
