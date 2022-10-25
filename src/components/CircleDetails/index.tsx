import Image, { StaticImageData } from 'next/image'

interface CircleProps {
   image: string | StaticImageData
   title: string
}
const CircleDetails = ({ image, title }: CircleProps) => {
   return (
      <div className="flex flex-col justify-center items-center">
         <Image src={image} width={160} height={160} className="rounded-full" />
         <p className="text-base font-bold text-center text-primary">{title}</p>
      </div>
   )
}

export default CircleDetails
