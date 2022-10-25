import Image, { StaticImageData } from 'next/image'
import BannerCard1 from '../../assets/images/bannercard1.webp'

interface CardServicesProps {
   title: string
   span: string
   image?: string | StaticImageData
}
const CardServices = ({
   title,
   span,
   image = BannerCard1,
}: CardServicesProps) => {
   return (
      <div className="card card-compact max-w-sm bg-base-100 shadow-xl transition-all duration-300 hover:scale-105">
         <div className="card-body">
            <Image src={image} width={218} height={121} quality={100} />

            <h2 className="card-title">{title}</h2>
            <span className="text-[#787878] text-sm">{span}</span>
         </div>
      </div>
   )
}

export default CardServices
