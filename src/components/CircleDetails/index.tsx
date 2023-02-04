import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface CircleProps {
   image: string | StaticImageData
   title: string
   url: number | null
}
const CircleDetails = ({ image, title, url }: CircleProps) => {
   return (
      <Link href={url ? `/produtos/${url}` : '/'}>
         <div className="flex gap-2 flex-col justify-start items-center transition-all hover:scale-105 duration-200 cursor-pointer">
            <Image
               src={image}
               width={160}
               height={160}
               className="rounded-full"
            />
            <p className="text-base font-bold text-center text-primary">
               {title ?? 'Sem título'}
            </p>
         </div>
      </Link>
   )
}

export default CircleDetails
