import { GetServerSidePropsContext } from 'next'
import ProductCard from '../../components/ProductCard'
import { setupAPIClient } from '../../services/api'
import { ICategories2 } from '../../types/types'

interface ContextProps extends GetServerSidePropsContext {
   params: {
      index: string
   }
}

interface CategoriaProps {
   data: ICategories2
}

function index({ data }: CategoriaProps) {
   return (
      <div className="my-16 px-4">
         <h1 className="text-2xl font-medium text-primary">
            {data && data.data[0].name}
         </h1>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {data &&
               data.data.length > 0 &&
               data.data.map((r) => {
                  return (
                     <div key={r.id}>
                        <ProductCard
                           img={r.image_url}
                           title={r.name}
                           description={r.description}
                           id={r.id}
                        />
                     </div>
                  )
               })}
         </div>
      </div>
   )
}

export const getStaticProps = async ({ params }: ContextProps) => {
   const api = setupAPIClient()
   try {
      const { data } = await api.get(`/categories/${params.index}`)
      return {
         props: {
            data,
         },
         revalidate: 60 * 30, //30 minutos, se omitir o valor de revalidate, a página nao atualizará,
      }
   } catch (error) {
      return {
         props: {
            data: null,
         },
      }
   }
}

export async function getStaticPaths() {
   const api = setupAPIClient()
   try {
      const { data } = await api.get(`/categories`)

      const paths = data.data.map((category: any) => {
         return {
            params: {
               index: `${category.id}`,
            },
         }
      })

      return { paths, fallback: true }
   } catch (error) {
      return {}
   }
}

export default index
