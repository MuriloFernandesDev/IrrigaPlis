import Image from 'next/image'
import BndesImg from '../../assets/images/bndes.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
   return (
      <footer className="footer grid grid-cols-4 p-10 bg-primary text-base-100">
         <div className="flex flex-col col-span-1 w-full">
            <span className="footer-title">Irrigação Penápolis</span>
            <span>
               Rod. Sarg. Luciano Arnaldo Covolan S/N KM 0.315 CEP: 16300-000
               Telefone: (18) 3654-2248
            </span>
         </div>
         <div className="col-span-1 w-full flex justify-center">
            <div className="flex flex-col">
               <span className="footer-title">Menu</span>
               <a className="link link-hover">Empresa</a>
               <a className="link link-hover">Produtos</a>
               <a className="link link-hover">Serviços</a>
               <a className="link link-hover">Atendimento</a>
               <a className="link link-hover">Trabalhe Conosco</a>
            </div>
         </div>
         <div className="col-span-1 w-full flex justify-center">
            <div className="flex flex-col">
               <span className="footer-title">Social</span>
               <a className="link link-hover">Youtube</a>
               <a className="link link-hover">Facebook</a>
               <a className="link link-hover">Instagram</a>
               <a className="link link-hover">Email</a>
               <a className="link link-hover">WhatsApp</a>
            </div>{' '}
         </div>
         <div className="col-span-1 flex justify-between w-full items-end flex-col h-full">
            <Image src={BndesImg} width={165} height={35} layout="fixed" />
            <div className="btn btn-circle bg-warning hover:bg-warning hover:border-transparent border-transparent">
               <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
            </div>
         </div>
      </footer>
   )
}

export default Footer
