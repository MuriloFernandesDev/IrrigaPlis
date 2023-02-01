import Image from 'next/image'
import BndesImg from '../../assets/images/bndes.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
   return (
      <footer className="footer p-10 bg-primary text-base-100">
         <div className="max-w-7xl mx-auto md:px-4 grid grid-cols-1 md:grid-cols-4">
            <div className="flex flex-col col-span-1 w-full">
               <span className="footer-title">Irrigação Penápolis</span>
               <span>
                  Rod. Sarg. Luciano Arnaldo Covolan S/N KM 0.315 CEP: 16300-000
                  Telefone: (18) 3654-2248
               </span>
            </div>
            <div className="col-span-1 w-full flex justify-start md:justify-center">
               <div className="flex flex-col">
                  <span className="footer-title">Menu</span>

                  <Link href={'/'} passHref>
                     <a className="link link-hover">Inicio</a>
                  </Link>

                  <Link href={'/sobre-a-empresa'} passHref>
                     <a className="link link-hover">Empresa</a>
                  </Link>

                  <Link href={'/produtos'} passHref>
                     <a className="link link-hover">Produtos</a>
                  </Link>

                  <Link href={'/nossos-servicos'} passHref>
                     <a className="link link-hover">Serviços</a>
                  </Link>

                  <Link href={'/atendimento'} passHref>
                     <a className="link link-hover">Atendimento</a>
                  </Link>

                  <Link href={'/trabalhe-conosco'} passHref>
                     <a className="link link-hover">Trabalhe conosco</a>
                  </Link>
               </div>
            </div>
            <div className="col-span-1 w-full flex justify-start md:justify-center">
               <div className="flex flex-col">
                  <span className="footer-title">Social</span>
                  <a
                     target={'_blank'}
                     href="https://www.youtube.com/@penapolisirrigacao"
                     className="link link-hover"
                  >
                     Youtube
                  </a>
                  <a
                     target={'_blank'}
                     href="https://www.facebook.com/irrigacaopenapolis?mibextid=LQQJ4d"
                     className="link link-hover"
                  >
                     Facebook
                  </a>
                  <a
                     target={'_blank'}
                     href="https://www.instagram.com/penapolisirrigacao/"
                     className="link link-hover"
                  >
                     Instagram
                  </a>
                  <a
                     href="mailto:irrigpenapolis@irrigpenapolis.com.br"
                     className="link link-hover"
                  >
                     Email
                  </a>
                  <a
                     href="https://wa.me/+551836542248"
                     target={'_blank'}
                     className="link link-hover"
                  >
                     WhatsApp
                  </a>
               </div>
            </div>
            <a
               className="col-span-1 flex justify-between w-full items-center md:items-end md:flex-col h-full"
               href="https://wa.me/+551836542248"
               target={'_blank'}
            >
               <Image src={BndesImg} width={165} height={35} layout="fixed" />
               <div className="btn btn-circle bg-warning hover:bg-warning hover:border-transparent border-transparent">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
               </div>
            </a>
         </div>
      </footer>
   )
}

export default Footer
