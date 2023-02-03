import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Banner from '../../components/Banner'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'
import { setupAPIClient } from '../../services/api'
import { ICategories2, IProduct } from '../../types/types'
import DefaultImg from '../../assets/images/default.png'
import { GetServerSidePropsContext } from 'next'
import ProductCard from '../../components/ProductCard'
import { FirstUpper } from '../../utils/masks'
import { toast } from 'react-toastify'

interface ProductsProps {
   product: IProduct
   category: ICategories2
}

interface ContextProps extends GetServerSidePropsContext {
   params: {
      index: string
   }
}

function Produtos({ product, category }: ProductsProps) {
   const { addProduct } = useCart()
   const [amount, setAmount] = useState(1)
   const [options, setOptions] = useState<{ title: string; value: string }[]>(
      []
   )

   function handleAddProduct(
      id: number,
      price: number,
      image: string,
      title: string,
      amount: number
   ) {
      addProduct(id, price, image, title, amount, options)
   }

   function handleAddOptions(title: string, option: string) {
      //se option com o title existe, ele apaga o existente da memoria e cria com o valor novo
      const optionExist = options.find((option) => option.title === title)
      if (optionExist) {
         setOptions((oldState) =>
            oldState.filter((option) => option.title !== title)
         )
         setOptions((options: any) => [
            ...options,
            {
               title: title,
               value: option,
            },
         ])
      } else {
         setOptions((options: any) => [
            ...options,
            {
               title: title,
               value: option,
            },
         ])
      }
   }

   return (
      <div>
         <Banner title="tubos" />
         <div className="my-16 px-4 max-w-7xl mx-auto">
            <div className="card flex-col-reverse md:flex-row max-w-5xl mx-auto">
               <div className="card-body justify-center items-center">
                  <Image
                     src={
                        product && product.media[0]
                           ? product.media[0].original_url
                           : DefaultImg
                     }
                     width={550}
                     height={550}
                     layout="fixed"
                     quality={100}
                  />
               </div>
               <div className="card-body md:max-w-md border gap-10 justify-between">
                  <div>
                     <div className="text-sm breadcrumbs">
                        <ul>
                           <li>
                              <a>Novo</a>
                           </li>
                           <li>
                              <a>Categoria</a>
                           </li>
                           <li>
                              {category &&
                                 FirstUpper(
                                    category.data[0].name
                                       .substring(0, 11)
                                       .toLowerCase()
                                 )}
                              ...
                           </li>
                        </ul>
                     </div>
                     <h1 className="text-3xl font-medium text-black">
                        {product && product.name}
                     </h1>
                  </div>
                  <div className="flex gap-3 w-full">
                     <div className="flex flex-col gap-3">
                        {product.select &&
                           product.select.map((s) => {
                              return (
                                 <div key={s.title}>
                                    <p>{s.title && FirstUpper(s.title)}</p>
                                    <select
                                       defaultValue={3}
                                       className="select min-h-16 max-w-md bg-transparent select-accent"
                                       defaultChecked
                                       onChange={(e) =>
                                          e.target.value !== 'default'
                                             ? handleAddOptions(
                                                  s.title,
                                                  e.target.value
                                               )
                                             : toast.warning(
                                                  'Selecione uma opção de produto'
                                               )
                                       }
                                    >
                                       <option value={'default'}>
                                          Selecione...
                                       </option>
                                       {s.options.map((op) => {
                                          return (
                                             <option
                                                key={op}
                                                value={
                                                   op && op.replace(/["]/g, '')
                                                }
                                             >
                                                {op && op.replace(/["]/g, '')}
                                             </option>
                                          )
                                       })}
                                    </select>
                                 </div>
                              )
                           })}
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
                     <span>• {product && product.description}</span>
                  </div>
                  <div className="card-actions flex-col">
                     <button className="btn bg-[#008C4F] border-transparent text-base-100 w-full">
                        Solicitar orçamento
                     </button>

                     <button
                        onClick={() =>
                           options[0] && options[0].title
                              ? handleAddProduct(
                                   product && product.id,
                                   0,
                                   product.media[0]
                                      ? product.media[0].original_url
                                      : '',
                                   product && product.name,
                                   amount
                                )
                              : toast.warning(
                                   'Selecione alguma opção de produto'
                                )
                        }
                        className="btn btn-success border-transparent text-base-100 w-full"
                     >
                        Adicionar ao carrinho
                     </button>
                  </div>
               </div>
            </div>
            <div className="max-w-7xl mx-auto md:mt-16 px-4">
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
                  {category &&
                     category.data.length > 0 &&
                     category.data.slice(0, 4).map((r) => {
                        return (
                           <ProductCard
                              key={r.id}
                              img={r.image_url}
                              title={r.name}
                              description={r.description}
                              id={r.id}
                           />
                        )
                     })}
               </div>
            </div>
         </div>
      </div>
   )
}

export const getStaticProps = async ({ params }: ContextProps) => {
   const api = setupAPIClient()
   try {
      const { data } = await api.get(`/product/${params.index}`)
      const { data: category } = await api.get(
         `/categories/${data.category_id}`
      )
      return {
         props: {
            product: data,
            category,
         },
         revalidate: 60 * 30, //30 minutos, se omitir o valor de revalidate, a página nao atualizará,
      }
   } catch (error) {
      return {
         props: {
            product: null,
            category: null,
         },
      }
   }
}

export async function getStaticPaths() {
   const api = setupAPIClient()
   try {
      const { data } = await api.get(`/products`)

      const paths =
         data.length > 0 &&
         data.map((r: any) => {
            return {
               params: {
                  index: `${r.id}`,
               },
            }
         })

      return { paths, fallback: false }
   } catch (error) {
      return {}
   }
}

export default Produtos
