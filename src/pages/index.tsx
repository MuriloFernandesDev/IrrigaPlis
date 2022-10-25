import type { NextPage } from 'next'
import Image from 'next/image'
import Container from '../components/Container'
import BannerImg from '../assets/images/bannerHome.webp'
import CircleImg1 from '../assets/images/circleImg1.webp'
import CircleDetails from '../components/CircleDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import MapaImg from '../assets/images/mapa.webp'

const Home: NextPage = () => {
   return (
      <Container>
         <>
            <div className="py-32 mx-auto max-w-[1600px] bg-cover bg-no-repeat bg-center bg-[url(../../src/assets/images/bannerHome.webp)]">
               <div className="flex items-center justify-between h-full">
                  <div className="justify-center p-10 bg-base-100/90 w-2/3 md:w-2/5">
                     <h1 className="text-3xl font-medium">PIVÔ DE IRRIGAÇÃO</h1>
                     <span className="text-base font-medium">
                        Utilização de modernas e avançadas técnicas de cálculos
                        e projetos, adequando-os ás condições de solo,
                        topografia, clima e cultura, com obtenção do melhor
                        rendimento no cultivo e economia operacional.
                     </span>
                  </div>
                  <div className="w-28 py-28 bg-base-100/90 hidden md:flex"></div>
               </div>
            </div>

            <div className="w-full max-w-lg mx-auto mt-16 gap-5 items-center flex flex-col">
               <h1 className="text-4xl text-center text-primary font-bold uppercase">
                  CONFIRA NOSSOS PRODUTOS EM DESTAQUE
               </h1>
               <div className="w-36 h-[3px] bg-error" />
            </div>

            <div className="flex flex-wrap w-full max-w-7xl my-10 mx-auto justify-around">
               <CircleDetails image={CircleImg1} title="PIVÔ IRRIGAÇÃO" />
               <CircleDetails image={CircleImg1} title="PIVÔ IRRIGAÇÃO" />
               <CircleDetails image={CircleImg1} title="PIVÔ IRRIGAÇÃO" />
               <CircleDetails image={CircleImg1} title="PIVÔ IRRIGAÇÃO" />
               <CircleDetails image={CircleImg1} title="PIVÔ IRRIGAÇÃO" />
               <CircleDetails image={CircleImg1} title="PIVÔ IRRIGAÇÃO" />
            </div>
            <div className="max-w-7xl mx-auto px-4">
               <div className="w-full flex justify-center md:justify-start my-11">
                  <div className="flex flex-col items-center">
                     <div className="flex gap-3 items-center">
                        <FontAwesomeIcon
                           icon={faBuilding}
                           className="w-9 h-9 text-error"
                        />
                        <h1 className="text-primary text-5xl font-bold">
                           Quem somos
                        </h1>
                     </div>
                     <div className="w-36 h-[3px] bg-error mt-5" />
                  </div>
               </div>
               <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mb-16">
                  <div className="w-full">
                     <p>
                        Irrigação Penápolis com grande experiência no mercado,
                        atua na fabricação e comércio de Sistemas de Irrigação,
                        Peças e Assistência Técnica. Está localizada na cidade
                        de Penápolis região Noroeste do Estado de São Paulo,
                        delimitada por uma área de 80.000m², sendo 6.000 m²
                        destinados à planta fabril.
                     </p>
                     <p>
                        A Irrigação Penápolis proporciona ao mercado produtos de
                        primeiríssima qualidade, devido a grandes parcerias com
                        fornecedores de alto grau de desenvolvimento tecnológico
                        e ao conceito dos valores fundamentais: Segurança,
                        Respeito e Ética na seleção de sua equipe de
                        profissionais, visando sempre o respeito ao
                        consumidor,com qualidade e pontualidade.
                     </p>
                     <p>
                        Possui uma equipe de vendedores que está presente em
                        todo o território nacional, oferecendo ao cliente um
                        atendimento diferenciado, baseado sempre nos valores
                        fundamentais da Empresa.{' '}
                     </p>
                  </div>
                  <div className="w-full">
                     <Image src={MapaImg} layout="responsive" />
                  </div>
               </div>
            </div>
         </>
      </Container>
   )
}

export default Home
