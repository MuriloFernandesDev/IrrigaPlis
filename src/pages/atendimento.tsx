import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Banner from '../components/Banner'

function Treatment() {
   return (
      <div>
         <Banner title="atendimento" />

         <div className="my-16">
            <div className="max-w-7xl mx-auto px-4">
               <h1 className="text-2xl font-bold text-primary uppercase">
                  FAQ - PERGUNTAS FREQUENTES
               </h1>
               <div className="grid grid-cols-2 gap-5 mt-12">
                  <div className="p-5 flex justify-start items-center border">
                     <span>COMO EU FAÇO PARA COMPRAR?</span>
                  </div>
                  <div className="p-5 flex justify-start items-center border">
                     <span>COMO EU FAÇO PARA COMPRAR?</span>
                  </div>
                  <div className="p-5 flex justify-start items-center border">
                     <span>COMO EU FAÇO PARA COMPRAR?</span>
                  </div>
                  <div className="p-5 flex justify-start items-center border">
                     <span>COMO EU FAÇO PARA COMPRAR?</span>
                  </div>
               </div>
               <h2 className="text-2xl font-bold text-primary uppercase mt-16 mb-4">
                  FALE DIRETAMENTE CONOSCO
               </h2>
               <div className="grid grid-cols-3 gap-12">
                  <div className="card shadow-md">
                     <div className="card-body items-center justify-center">
                        <FontAwesomeIcon
                           icon={faPhone}
                           className="h-14 w-14 text-error"
                        />
                        <div className="card-title">
                           <h1>(18) 3654-2248</h1>
                        </div>
                        <span className="text-center text-[#787878]">
                           Segunda a Sexta-feira 06h00 às 19h00, aos sábados,
                           das 08h00 às 12h00 e das 13h00 às 17h00 e aos
                           domingos e feriados, das 8h00 às 12h00.
                        </span>
                     </div>
                  </div>
                  <div className="card shadow-md">
                     <div className="card-body items-center justify-center">
                        <FontAwesomeIcon
                           icon={faEnvelope}
                           className="h-14 w-14 text-error"
                        />
                        <div className="card-title">
                           <h1>Enviar mensagem</h1>
                        </div>
                     </div>
                  </div>
                  <div className="card shadow-md">
                     <div className="card-body items-center justify-center">
                        <FontAwesomeIcon
                           icon={faWhatsapp}
                           className="h-14 w-14 text-error"
                        />
                        <div className="card-title">
                           <h1>Falar pelo WhatsApp</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Treatment
