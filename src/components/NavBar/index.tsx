import Image from 'next/image'
import LogoImg from '../../assets/images/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
   return (
      <>
         <div className="navbar bg-base-100 p-0 min-h-max shadow-sm">
            <div className="w-full max-w-7xl mx-auto">
               <div className="navbar-start">
                  <Image src={LogoImg} width={126} height={37} layout="fixed" />
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal p-0">
                     <li>
                        <a>Empresa</a>
                     </li>
                     <li>
                        <a>Produtos</a>
                     </li>

                     <li>
                        <a>Serviços</a>
                     </li>
                     <li>
                        <a>Atendimento</a>
                     </li>
                     <li>
                        <a>Trabalhe conosco</a>
                     </li>
                  </ul>
               </div>
               <div className="navbar-end flex">
                  <button className="active:scale-95 h-14 w-14 bg-primary text-base-100">
                     <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                     <p className="text-[10px] font-medium">Social</p>
                  </button>
                  <button className="active:scale-95 h-14 w-14 bg-error text-base-100">
                     <FontAwesomeIcon
                        icon={faCartShopping}
                        className="w-4 h-4"
                     />
                  </button>
               </div>
            </div>
         </div>
         <div className="bg-[#F2F2F2]">
            <div className="flex items-center max-w-4xl mx-auto p-2 gap-3 w-full justify-around">
               <div className="flex flex-col uppercase">
                  <span className="text-black text-xs font-medium">
                     O que está
                  </span>
                  <span className="text-[#969696] text-xs font-bold">
                     procurando?
                  </span>
               </div>
               <select className="select max-w-md bg-transparent select-accent">
                  <option disabled selected>
                     Categoria
                  </option>
                  <option>Irrigação</option>
                  <option>Irrigação</option>
                  <option>Irrigação</option>
                  <option>Irrigação</option>
                  <option>Irrigação</option>
               </select>

               <input
                  type="text"
                  placeholder="Digite aqui"
                  className="w-full input bg-transparent input-accent"
               />
               <button className="btn btn-primary">Buscar</button>
            </div>
         </div>
      </>
   )
}

export default NavBar
