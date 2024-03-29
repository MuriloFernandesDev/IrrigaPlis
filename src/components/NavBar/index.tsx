import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {
   faCartShopping,
   faCircleUser,
   faRightFromBracket,
   faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { toast } from 'react-toastify'
import LogoImg from '../../assets/images/logo.webp'
import { AuthContext } from '../../hooks/AuthContext'
import { useCart } from '../../hooks/useCart'
import { ICategories } from '../../types/types'
import { UniqueName } from '../../utils/masks'

const NavBar = () => {
   const router = useRouter()
   const [openDrawer, setOpenDrawer] = useState(false)
   const { cartSize } = useCart()
   const { user, signOut } = useContext(AuthContext)
   const [categories, setCategories] = useState<ICategories[] | null>(null)
   const [categorieSearch, setCategorieSearch] = useState<string | null>(null)
   const [stringSearch, setStringSearch] = useState<string | null>(null)
   const [loading, setLoading] = useState(true)

   async function getCategories() {
      try {
         const { data } = await axios.get('/api/categories')

         setCategories(data.data)
      } catch (error) {
         getCategories()
      } finally {
         setLoading(false)
      }
   }

   function handleSearch() {
      if (stringSearch && categorieSearch) {
         const busca = {
            category_id: categorieSearch,
            search: stringSearch,
         }
         router.push(`/busca/${JSON.stringify(busca)}`)
      } else {
         toast.warning('Preencha todos os campos')
      }
   }

   useEffect(() => {
      getCategories()
   }, [])

   const toggleDrawer = () => {
      setOpenDrawer((prevState) => !prevState)
   }

   return (
      <>
         <div className="fixed z-50 w-full">
            <div className=" bg-base-100 ">
               <div className="navbar max-w-7xl mx-auto md:p-0 min-h-max shadow-sm">
                  <div className="navbar-start pl-4">
                     <Image
                        onClick={() => router.push('/')}
                        src={LogoImg}
                        width={126}
                        height={37}
                        layout="fixed"
                        className="cursor-pointer"
                     />
                  </div>
                  <div className="navbar-center hidden lg:flex">
                     <ul className="menu menu-horizontal p-0">
                        <li>
                           <Link href={'/sobre-a-empresa'} passHref>
                              <a>Empresa</a>
                           </Link>
                        </li>
                        <li>
                           <Link href={'/produtos'} passHref>
                              <a>Produtos</a>
                           </Link>
                        </li>

                        <li>
                           <Link href={'/nossos-servicos'} passHref>
                              <a>Serviços</a>
                           </Link>
                        </li>
                        <li>
                           <Link href={'/atendimento'} passHref>
                              <a>Atendimento</a>
                           </Link>
                        </li>
                        <li>
                           <Link href={'/trabalhe-conosco'} passHref>
                              <a>Trabalhe conosco</a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="navbar-end flex">
                     <Link href={'/carrinho'}>
                        <button className="active:scale-95 w-8 h-8 md:h-14 md:w-14 bg-success hover:bg-[#008C4F] text-base-100">
                           <FontAwesomeIcon
                              icon={faCartShopping}
                              className="w-4 h-4 relative"
                           />
                           {cartSize && cartSize > 0 ? (
                              <div className="absolute">
                                 <span className="flex h-4 w-4 relative -mt-[2.04rem] ml-7">
                                    <span className="relative text-xs rounded-full h-4 w-4 bg-primary animate-bounce ">
                                       {cartSize}
                                    </span>
                                 </span>
                              </div>
                           ) : null}
                        </button>
                     </Link>
                     <button className="active:scale-95 w-8 h-8 md:h-14 md:w-14 bg-blue-400 hover:bg-blue-500 text-base-100">
                        <FontAwesomeIcon
                           icon={faFacebook}
                           className="w-4 h-4"
                        />

                        <a
                           target={'_blank'}
                           href="https://www.facebook.com/irrigacaopenapolis?mibextid=LQQJ4d"
                           className="text-[10px] font-medium hidden md:block"
                        >
                           Social
                        </a>
                     </button>

                     {user ? (
                        <div className="hidden sm:inline-block dropdown dropdown-end">
                           <label tabIndex={0}>
                              <button className="active:scale-95 w-8 h-8 md:h-14 md:w-14 bg-success hover:bg-[#008C4F] text-base-100">
                                 <FontAwesomeIcon
                                    icon={faCircleUser}
                                    className="w-4 h-4"
                                 />
                                 <p className="text-[10px] font-medium hidden md:block">
                                    Olá, {UniqueName(user.name)}
                                 </p>
                              </button>
                           </label>
                           <ul
                              tabIndex={0}
                              className="dropdown-content p-2 bg-base-100 w-40 shadow-2xl"
                           >
                              <li>
                                 <button
                                    className="text-left w-full"
                                    type="submit"
                                    onClick={signOut}
                                 >
                                    Sair
                                 </button>
                              </li>
                           </ul>
                        </div>
                     ) : (
                        <Link href={'/cliente/login'}>
                           <button className="active:scale-95 w-8 h-8 md:h-14 md:w-14 bg-success hover:bg-[#008C4F] text-base-100">
                              <FontAwesomeIcon
                                 icon={faUser}
                                 className="w-4 h-4 relative"
                              />
                           </button>
                        </Link>
                     )}
                     <button className="block md:hidden" onClick={toggleDrawer}>
                        <svg
                           className={'swap-off fill-current '}
                           xmlns="http://www.w3.org/2000/svg"
                           width="32"
                           height="32"
                           viewBox="0 0 512 512"
                        >
                           <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
            <div className="bg-[#F2F2F2]">
               <div className="uppercase flex md:hidden gap-2 justify-center pt-2">
                  <span className="text-black text-xs font-medium">
                     O que está
                  </span>
                  <span className="text-[#969696] text-xs font-bold">
                     procurando?
                  </span>
               </div>
               <div className="flex items-center max-w-4xl mx-auto p-2 gap-3 w-full justify-around">
                  <div className=" flex-col uppercase hidden md:flex">
                     <span className="text-black text-xs font-medium">
                        O que está
                     </span>
                     <span className="text-[#969696] text-xs font-bold">
                        procurando?
                     </span>
                  </div>
                  <select
                     defaultValue={'default'}
                     className="select max-w-md bg-transparent select-accent"
                     onChange={(e) =>
                        e.target.value !== 'default'
                           ? setCategorieSearch(e.target.value)
                           : setCategorieSearch(null)
                     }
                  >
                     <option value={'default'}>Selecione...</option>

                     {loading ? (
                        <option value={'loading'}>
                           Buscando categorias...
                        </option>
                     ) : (
                        categories &&
                        categories.map((categorie) => {
                           return (
                              <option key={categorie.id} value={categorie.id}>
                                 {categorie.name}
                              </option>
                           )
                        })
                     )}
                  </select>

                  <input
                     type="text"
                     placeholder="Digite aqui"
                     className="w-full input bg-transparent input-accent"
                     onChange={(e) => setStringSearch(e.target.value)}
                  />
                  <button
                     onClick={handleSearch}
                     className="btn btn-success text-white"
                  >
                     Buscar
                  </button>
               </div>
            </div>
         </div>
         <Drawer
            open={openDrawer}
            onClose={toggleDrawer}
            direction="right"
            duration={400}
            className="w-2/3"
         >
            <ul className="menu">
               {user ? (
                  <button className="flex items-center gap-3 p-2 px-4 bg-success text-base-100">
                     <FontAwesomeIcon
                        icon={faCircleUser}
                        className="w-10 h-10"
                     />
                     <p className="text-xl font-medium">
                        Olá, {UniqueName(user.name)}
                     </p>
                  </button>
               ) : (
                  <Link href={'/cliente/login'}>
                     <button className="flex items-center gap-3 p-2 px-4 bg-success text-base-100">
                        <FontAwesomeIcon
                           icon={faCircleUser}
                           className="w-10 h-10"
                        />
                        <p className="text-xl font-medium">Realizar login</p>
                     </button>
                  </Link>
               )}
               <li onClick={toggleDrawer}>
                  <Link href={'/'} passHref>
                     <a>Inicio</a>
                  </Link>
               </li>
               <li onClick={toggleDrawer}>
                  <Link href={'/sobre-a-empresa'} passHref>
                     <a>Empresa</a>
                  </Link>
               </li>
               <li onClick={toggleDrawer}>
                  <Link href={'/produtos'} passHref>
                     <a>Produtos</a>
                  </Link>
               </li>

               <li onClick={toggleDrawer}>
                  <Link href={'/nossos-servicos'} passHref>
                     <a>Serviços</a>
                  </Link>
               </li>
               <li onClick={toggleDrawer}>
                  <Link href={'/atendimento'} passHref>
                     <a>Atendimento</a>
                  </Link>
               </li>
               <li onClick={toggleDrawer}>
                  <Link href={'/trabalhe-conosco'} passHref>
                     <a>Trabalhe conosco</a>
                  </Link>
               </li>

               {user && (
                  <li onClick={toggleDrawer}>
                     <div
                        className="p-2 px-4 bg-success text-base-100"
                        onClick={signOut}
                     >
                        <FontAwesomeIcon
                           icon={faRightFromBracket}
                           className="w-7 h-7"
                        />
                        <a>Sair</a>
                     </div>
                  </li>
               )}
            </ul>
         </Drawer>
      </>
   )
}

export default NavBar
