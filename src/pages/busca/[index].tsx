import ProductCard from '../../components/ProductCard'
import { setupAPIClient } from '../../services/api'
import { IProduct } from '../../types/types'

interface BuscaProps {
   query: {
      category_id: string
      search: string
   }
   searchResult: IProduct[] | null
}

function Busca({ searchResult, query }: BuscaProps) {
   return (
      <div className="my-16 px-4">
         <h1 className="text-2xl font-medium text-primary text-center">
            Pesquisando por: {query && query.search && query.search}
         </h1>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {searchResult &&
               searchResult.length > 0 &&
               searchResult.map((r) => {
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

export const getServerSideProps = async ({ params, ctx }: any) => {
   const query = params.index
   const api = setupAPIClient(ctx)
   const searchParams = query ? JSON.parse(query) : null
   if (query) {
      try {
         const { data } = await api.get('/search', {
            params: searchParams,
         })

         return {
            props: {
               searchResult: data,
               query: searchParams,
            },
         }
      } catch (error) {
         return {
            props: {
               searchResult: null,
               query: searchParams,
            },
         }
      }
   }
}

export default Busca
