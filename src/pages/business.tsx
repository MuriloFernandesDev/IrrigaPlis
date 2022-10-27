import Image from 'next/image'
import Banner from '../components/Banner'
import MapaImg from '../assets/images/mapa.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import FrameYt from '../components/FrameYt'

function Business() {
   return (
      <div>
         <Banner title="A irrigação penápolis" />
         <div className="my-16 px-4">
            <div className="max-w-7xl mx-auto">
               <div className="w-full flex justify-center md:justify-start my-11">
                  <div className="flex flex-col items-center">
                     <div className="flex gap-3 items-center">
                        <FontAwesomeIcon
                           icon={faBuilding}
                           className="w-9 h-9 text-error"
                        />
                        <h1 className="text-primary text-4xl md:text-5xl font-bold uppercase">
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
            <div className="max-w-7xl mx-auto mt-28">
               <div className="flex items-center w-full justify-center">
                  <FontAwesomeIcon
                     icon={faYoutube}
                     className="w-14 h-9 text-red-800"
                  />
                  <span className="text-primary text-2xl md:text-5xl font-bold uppercase">
                     Estamos no youtube!
                  </span>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
                  <FrameYt video="https://www.youtube.com/embed/ru98mjyRIW4" />
                  <FrameYt video="https://www.youtube.com/embed/ru98mjyRIW4" />
                  <FrameYt video="https://www.youtube.com/embed/ru98mjyRIW4" />
                  <FrameYt video="https://www.youtube.com/embed/ru98mjyRIW4" />
                  <FrameYt video="https://www.youtube.com/embed/ru98mjyRIW4" />
                  <FrameYt video="https://www.youtube.com/embed/ru98mjyRIW4" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Business
