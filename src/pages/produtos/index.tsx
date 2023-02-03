import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import Banner from '../../components/Banner'
import ProductCard from '../../components/ProductCard'
import { setupAPIClient } from '../../services/api'
import { ICategories } from '../../types/types'

interface CategoriesProps {
   categories: ICategories[]
}

//recebe categories do lado servidor
function Products({ categories }: CategoriesProps) {
   return (
      <div>
         <Banner title="nossos produtos" />
         <div className="my-16 px-4 max-w-7xl mx-auto">
            {categories?.length > 0 &&
               categories.map((res) => {
                  return (
                     res.products.length > 0 && (
                        <div className="max-w-7xl mx-auto mt-16" key={res.id}>
                           <div className="flex gap-3 items-center mb-8">
                              <h1 className="text-2xl font-medium text-primary">
                                 {res.name}
                              </h1>
                              <Link href={`/categoria/${res.id}`}>
                                 <span className="link cursor-pointer text-base text-center text-[#008C4F] font-normal">
                                    {`Ver todos os produtos desta categoria`}
                                    <FontAwesomeIcon
                                       icon={faChevronRight}
                                       className="w-3 h-3"
                                    />
                                 </span>
                              </Link>
                           </div>
                           <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                              {res.products.length > 0 &&
                                 res.products.map((r) => {
                                    return (
                                       <div key={r.id}>
                                          <ProductCard
                                             img={r.image_url}
                                             title={r.name}
                                             description={r.description}
                                             id={res.id}
                                          />
                                       </div>
                                    )
                                 })}
                           </div>
                        </div>
                     )
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
