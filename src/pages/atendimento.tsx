import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Banner from '../components/Banner'
import {
   Accordion,
   AccordionItem,
   AccordionItemHeading,
   AccordionItemButton,
   AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

function Treatment() {
   return (
      <div>
         <Banner title="atendimento" />

         <div className="my-16">
            <div className="max-w-7xl mx-auto px-4">
               <h1 className="text-2xl font-bold text-primary uppercase">
                  FAQ - PERGUNTAS FREQUENTES
               </h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
                  <Accordion className="bg-base-100" allowZeroExpanded={true}>
                     <AccordionItem>
                        <AccordionItemHeading>
                           <AccordionItemButton>
                              Tubulação de Aço Zincado aguenta quantos kilos de
                              pressão?
                           </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                           <p>
                              nossos tubos são testados com 21 kg de pressão,
                              mas o indicado é 18 kg de pressão (PN 180).
                           </p>
                        </AccordionItemPanel>
                     </AccordionItem>
                  </Accordion>

                  <Accordion className="bg-base-100" allowZeroExpanded={true}>
                     <AccordionItem>
                        <AccordionItemHeading>
                           <AccordionItemButton>
                              Quanto custa o Hectare do Pivô?
                           </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                           <p>
                              Cada área tem uma necessidade. Neste caso o
                              indicado é fazer o projeto para a área a ser
                              irrigada, realizamos projetos sem compromisso,
                              entre em contato conosco.
                           </p>
                        </AccordionItemPanel>
                     </AccordionItem>
                  </Accordion>

                  <Accordion className="bg-base-100" allowZeroExpanded={true}>
                     <AccordionItem>
                        <AccordionItemHeading>
                           <AccordionItemButton>
                              Como funciona o sistema de recolhimento da
                              mangueira?
                           </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                           <p>
                              É feito pela força hidráulica fornecidade pela
                              motobomba, a vazão e pressão que passa pela
                              turbina ligada juntamente ao redutor faz que o
                              equipamento consiga ter potência para recolhimento
                              da mangueira.
                           </p>
                        </AccordionItemPanel>
                     </AccordionItem>
                  </Accordion>

                  <Accordion className="bg-base-100" allowZeroExpanded={true}>
                     <AccordionItem>
                        <AccordionItemHeading>
                           <AccordionItemButton>
                              Para que serve o painel solar?
                           </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                           <p>
                              Utilizado para manter a bateria carregada que
                              fornece energia ao painel eletrônico.
                           </p>
                        </AccordionItemPanel>
                     </AccordionItem>
                  </Accordion>
               </div>
               <h2 className="text-2xl font-bold text-primary uppercase mt-16 mb-4">
                  FALE DIRETAMENTE CONOSCO
               </h2>
               <div className="flex flex-col md:flex-row justify-between w-full gap-5">
                  <a
                     href="https://wa.me/+551836542248"
                     target={'_blank'}
                     className="card shadow-md w-full hover:scale-105 transition-all duration-200"
                  >
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
                  </a>
                  <a
                     href="https://wa.me/+551836542248"
                     target={'_blank'}
                     className="card shadow-md w-full hover:scale-105 transition-all duration-200"
                  >
                     <div className="card-body items-center justify-center">
                        <FontAwesomeIcon
                           icon={faEnvelope}
                           className="h-14 w-14 text-error"
                        />
                        <div className="card-title">
                           <h1>Enviar mensagem</h1>
                        </div>
                     </div>
                  </a>
                  <a
                     href="https://wa.me/+551836542248"
                     target={'_blank'}
                     className="card shadow-md w-full hover:scale-105 transition-all duration-200"
                  >
                     <div className="card-body items-center justify-center">
                        <FontAwesomeIcon
                           icon={faWhatsapp}
                           className="h-14 w-14 text-error"
                        />
                        <div className="card-title">
                           <h1>Falar pelo WhatsApp</h1>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Treatment
