import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Banner from '../../components/Banner'
import ProductCard from '../../components/ProductCard'
import TuboImg from '../../assets/images/tuboaco.png'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'

function Produtos() {
   const { addProduct } = useCart()
   const [amount, setAmount] = useState(1)
   function handleAddProduct(
      id: number,
      price: number,
      image: string,
      title: string,
      amount: number
   ) {
      addProduct(id, price, image, title, amount)
   }

   return (
      <div>
         <Banner title="tubos" />
         <div className="my-16 px-4">
            <div className="card flex-col-reverse md:flex-row max-w-5xl mx-auto">
               <div className="card-body justify-center items-center">
                  <Image
                     src={TuboImg}
                     width={300}
                     height={300}
                     layout="fixed"
                     quality={100}
                  />
               </div>
               <div className="card-body max-w-md border gap-10 justify-between">
                  <div>
                     <div className="text-sm breadcrumbs">
                        <ul>
                           <li>
                              <a>Novo</a>
                           </li>
                           <li>
                              <a>Categoria</a>
                           </li>
                           <li>Tubos</li>
                        </ul>
                     </div>
                     <h1 className="text-3xl font-medium text-black">
                        Tubo de aço zincado engate rápido
                     </h1>
                  </div>
                  <div className="flex gap-3 w-full">
                     <div className="flex flex-col gap-3">
                        <p>Tamanho</p>
                        <select
                           defaultValue={3}
                           className="select min-h-16 max-w-md bg-transparent select-accent"
                        >
                           <option value={1}>192mm</option>
                           <option value={2}>192mm</option>
                           <option value={3}>192mm</option>
                           <option value={4}>192mm</option>
                           <option value={5}>192mm</option>
                           <option value={6}>192mm</option>
                        </select>
                     </div>
                     <div className="flex flex-col gap-3">
                        <p>Quantidade</p>
                        <div className="flex justify-between items-center border-accent border rounded-md px-2 min-h-16 max-h-16">
                           <button
                              onClick={() =>
                                 setAmount(() => (amount > 1 ? amount - 1 : 1))
                              }
                              className={
                                 'btn btn-circle  text-black border-accent min-h-0 h-7 w-7 ' +
                                 (amount < 2
                                    ? 'btn-disabled bg-red-400/40'
                                    : 'bg-transparent')
                              }
                           >
                              -
                           </button>
                           <input
                              className="p-2 active:border-transparent w-16 text-center m-1"
                              onChange={(e) =>
                                 setAmount(Number(e.target.value))
                              }
                              value={amount}
                           ></input>
                           <button
                              onClick={() => setAmount(amount + 1)}
                              className="btn btn-circle bg-transparent text-black border-accent min-h-0 h-7 w-7"
                           >
                              +
                           </button>
                        </div>
                     </div>
                  </div>
                  <div>
                     <p>Descrição</p>
                     <span>• 49716 Canhão de 3" Plona Mod. ECO-8</span>
                  </div>
                  <div className="card-actions flex-col">
                     <button className="btn bg-[#008C4F] border-transparent text-base-100 w-full">
                        Solicitar orçamento
                     </button>
                     <button
                        onClick={() =>
                           handleAddProduct(
                              1,
                              1000,
                              'https://irriga-plis.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftuboaco.d3bdb50d.png&w=256&q=75',
                              'Tubo de aço zincado - IP-20',
                              amount
                           )
                        }
                        className="btn btn-success border-transparent text-base-100 w-full"
                     >
                        Adicionar ao carrinho
                     </button>
                  </div>
               </div>
            </div>
            <div className="max-w-7xl mx-auto md:mt-16">
               <div className="flex gap-3 items-center mb-8">
                  <h1 className="text-2xl font-medium text-primary">
                     Veja também
                  </h1>
                  <span className="text-base text-center text-[#008C4F] font-normal">
                     <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-3 h-3"
                     />
                  </span>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Produtos
