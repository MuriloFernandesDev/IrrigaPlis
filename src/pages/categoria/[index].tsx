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
            {data.data[0].name}
         </h1>
         <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
            {data.data.length > 0 &&
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

export const getServerSideProps = async (ctx: ContextProps) => {
   const query = ctx.query.index
   const api = setupAPIClient(ctx)
   try {
      const { data } = await api.get(`/categories/${query}?per_page=10000`)

      return {
         props: {
            data,
            query,
         },
      }
   } catch (error) {
      return {
         props: { query },
      }
   }
}

export default index
