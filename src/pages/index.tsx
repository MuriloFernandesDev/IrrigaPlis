import type { NextPage } from 'next'
import Image from 'next/image'
import Container from '../components/Container'
import BannerImg from '../assets/images/bannerHome.webp'
import CircleImg1 from '../assets/images/circleImg1.webp'

const Home: NextPage = () => {
   return (
      <Container>
         <div className="py-32 mx-auto max-w-[1600px] bg-cover bg-no-repeat bg-center bg-[url(../../src/assets/images/bannerHome.webp)]">
            <div className="flex items-center justify-between h-full">
               <div className="justify-center p-10 bg-base-100/90 w-2/5">
                  <h1 className="text-3xl font-medium">PIVÔ DE IRRIGAÇÃO</h1>
                  <span className="text-base font-medium">
                     Utilização de modernas e avançadas técnicas de cálculos e
                     projetos, adequando-os ás condições de solo, topografia,
                     clima e cultura, com obtenção do melhor rendimento no
                     cultivo e economia operacional.
                  </span>
               </div>
               <div className="w-28 py-28 bg-base-100/90"></div>
            </div>
         </div>
         <div>
            <div className="w-full max-w-lg mx-auto mt-16 gap-5 items-center flex flex-col">
               <h1 className="text-4xl text-center text-primary font-bold uppercase">
                  CONFIRA NOSSOS PRODUTOS EM DESTAQUE
               </h1>
               <div className="w-36 h-[3px] bg-error" />
            </div>
         </div>
         <div className="flex w-full max-w-7xl mt-10 mx-auto justify-around">
            <div className="flex flex-col justify-center items-center">
               <Image
                  src={CircleImg1}
                  width={160}
                  height={160}
                  className="rounded-full"
               />
               <p className="text-base font-bold text-center text-primary">
                  PIVÔ IRRIGAÇÃO
               </p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <Image
                  src={CircleImg1}
                  width={160}
                  height={160}
                  className="rounded-full"
               />
               <p className="text-base font-bold text-center text-primary">
                  PIVÔ IRRIGAÇÃO
               </p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <Image
                  src={CircleImg1}
                  width={160}
                  height={160}
                  className="rounded-full"
               />
               <p className="text-base font-bold text-center text-primary">
                  PIVÔ IRRIGAÇÃO
               </p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <Image
                  src={CircleImg1}
                  width={160}
                  height={160}
                  className="rounded-full"
               />
               <p className="text-base font-bold text-center text-primary">
                  PIVÔ IRRIGAÇÃO
               </p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <Image
                  src={CircleImg1}
                  width={160}
                  height={160}
                  className="rounded-full"
               />
               <p className="text-base font-bold text-center text-primary">
                  PIVÔ IRRIGAÇÃO
               </p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <Image
                  src={CircleImg1}
                  width={160}
                  height={160}
                  className="rounded-full"
               />
               <p className="text-base font-bold text-center text-primary">
                  PIVÔ IRRIGAÇÃO
               </p>
            </div>
         </div>
      </Container>
   )
}

export default Home
