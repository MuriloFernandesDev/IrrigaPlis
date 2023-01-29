import {
   faChevronRight,
   faSignLanguage,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductCard from '../../components/ProductCard'
import { setupAPIClient } from '../../services/api'
import { ICategories, IProducts } from '../../types/types'

interface CategoriesProps {
   categories: ICategories[]
}

interface ProductsProps {
   products: IProducts
}
//recebe categories do lado servidor
function Products({ categories }: CategoriesProps) {
   //state para receber os dados dos produtos
   // const [products, setProducts] = useState<ProductsProps[]>([])

   //Effect para passar pelo categories chamando todas as paginas dos produtos
   // useEffect(() => {
   //    categories.map(async (res) => {
   //       const { data } = await axios.get(`/api/categories/${res.id}`)
   //       setProducts((products) => [...products, { ...data, ...res }])
   //    })
   // }, [])

   // async function returnProduct(id: number) {
   //    const { data: product } = await axios.get(`/api/categories/${id}`)
   //    product.map((res) => {
   //       console.log(res)
   //       return <ProductCard />
   //    })
   // }

   return (
      <div>
         <Banner title="nossos produtos" />
         <div className="my-16 px-4">
            {categories.length > 0 &&
               categories.map((res) => {
                  console.log(res)
                  return (
                     <div className="max-w-7xl mx-auto mt-16">
                        <div className="flex gap-3 items-center mb-8">
                           <h1 className="text-2xl font-medium text-primary">
                              {res.name}
                           </h1>
                           <span className="text-base text-center text-[#008C4F] font-normal">
                              {`Ver todos os produtos desta categoria`}
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
                  )
               })}
         </div>
      </div>
   )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
   const api = setupAPIClient(ctx)
   try {
      const { data: categoriesData } = await api.get('/categories')
      console.log(categoriesData.data)

      // const productData = []

      // await categoriesData.data.map((res) => {
      //    async function getProducts() {
      //       const data = await api.get(`/categories/${res.id}`)
      //       productData.push(data)
      //    }
      //    getProducts()
      // })

      // console.log(productData)

      return {
         props: {
            categories: categoriesData.data,
         },
      }
   } catch (error) {
      console.log(error)
      return {
         props: {
            categories: null,
         },
      }
   }
}

export default Products
