import { StaticImageData } from 'next/image'

interface BannerProps {
   title: string
   image?: string
}
const Banner = ({
   title,
   image = 'bg-[url(../../src/assets/images/banner.webp)]',
}: BannerProps) => {
   return (
      <div className={`bg-cover bg-no-repeat ${image} max-w-[1600px] mx-auto`}>
         <div className="flex justify-center py-16">
            <div className="flex flex-col gap-8 items-center text-center md:text-start">
               <h1 className="text-5xl text-base-100 font-bold uppercase">
                  {title}
               </h1>
               {title !== 'trabalhe conosco' && (
                  <div className="h-[3px] bg-error w-36" />
               )}
            </div>
         </div>
      </div>
   )
}

export default Banner
