import { useRouter } from 'next/router'
const ProductCard = ({title, description, img}) => {
   const router = useRouter()
   return (
      <div className="card card-compact mx-auto bg-base-100 shadow-xl sm:card-normal max-w-xs transition-all duration-300 hover:scale-105">
         <div className="card-body">
            <figure>
               {/* <Image src={img} width={190} height={190} layout="responsive" /> */}
               <img src={img} alt="" />
            </figure>
            <h2 className="card-title text-xl font-medium">
               {title}
            </h2>
            <p className="text-sm font-normal">{description}</p>
            <div className="card-actions justify-start">
               <button
                  onClick={() => router.push('/produtos/produto')}
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
