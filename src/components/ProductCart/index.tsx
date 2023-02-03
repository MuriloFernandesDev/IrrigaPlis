import Image from 'next/image'
import { useCart } from '../../hooks/useCart'
import { Product } from '../../types/types'
import DefaultImg from '../../assets/images/default.png'

const ProductCart = ({ product }: any) => {
   const { removeProduct, updateProductAmount } = useCart()

   function handleProductIncrement(product: Product) {
      updateProductAmount({ id: product.id, amount: product.amount + 1 })
   }

   function handleProductDecrement(product: Product) {
      updateProductAmount({ id: product.id, amount: product.amount - 1 })
   }

   function handleRemoveProduct(productId: number) {
      removeProduct(productId)
   }

   return (
      <div className="flex justify-between">
         <div className="flex items-center gap-3">
            <Image
               src={product.image ? product.image : DefaultImg}
               alt={product.title}
               layout="fixed"
               width={100}
               height={100}
            />
            <h1 className="text-primary">{product.title}</h1>
         </div>
         <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
               <div className="btn-group">
                  <button
                     className="btn btn-success btn-sm text-white text-xs h-auto"
                     type="button"
                     data-testid="decrement-product"
                     disabled={product.amount <= 1}
                     onClick={() => handleProductDecrement(product)}
                  >
                     -
                  </button>
                  <button
                     className="btn btn-success btn-sm text-white text-xs h-auto "
                     type="button"
                  >
                     {product.amount}
                  </button>
                  <button
                     className="btn btn-success btn-sm text-white text-xs h-auto "
                     type="button"
                     data-testid="increment-product"
                     onClick={() => handleProductIncrement(product)}
                  >
                     +
                  </button>
               </div>
            </div>
            <button
               type="button"
               onClick={() => handleRemoveProduct(product.id)}
            >
               Remover
            </button>
         </div>
      </div>
   )
}

export default ProductCart
