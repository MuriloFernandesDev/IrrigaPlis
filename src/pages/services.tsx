import Banner from '../components/Banner'
import BannerCard1 from '../assets/images/bannercard1.webp'
import Image from 'next/image'
import CardServices from '../components/CardServices'

function Services() {
   return (
      <div>
         <Banner title="nossos serviços" />
         <div className="my-16">
            <div className="max-w-7xl mx-auto px-4 mt-28">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-9">
                  <CardServices
                     title="Manutenção de Bombas Centrífugas"
                     span="Bombas hidrostáticas: São bombas de deslocamento positivo, que fornecem determinada quantidade de fluido a cada rotação ou ciclo. São bombas utilizadas para transmitir força hidráulica em um equipamento industrial. "
                  />
                  <CardServices
                     title="Assistência Técnica"
                     span="Equipe para assistencia tecnica, montagem e acompanhamento de Sistemas de Irrigação."
                  />
                  <CardServices
                     title="Conjunto Motobombas"
                     span="Montagem de Conjuntos Motobombas com motores a diesel e eletrico para Sistemas de Irrigação, Fertirrigação e combate a incêndio."
                  />
                  <CardServices
                     title="Projetos de sistemas de Irrigação"
                     span="Projetos para Sistemas de Irrigação com Carretel Autopropelido ou Pivo central."
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services
