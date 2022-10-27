import ProductCart from '../../components/ProductCart'
import { useCart } from '../../hooks/useCart'

const Cart = (): JSX.Element => {
   const { cart, somaTotal, cartSize } = useCart()

   return (
      <div className="max-w-7xl mx-auto py-10 px-4">
         <div className="flex w-full">
            <h1 className="font-semibold text-3xl text-primary">
               Meu carrinho
            </h1>
         </div>
         <div className="divider bg-primary h-[1px]" />
         <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col col-span-2">
               {cartSize &&
                  cart.map((product) => (
                     <ProductCart key={product.id} product={product} />
                  ))}
            </div>
            <div className="flex flex-col gap-5 col-span-1">
               <div className="divider m-0" />
               <div className="flex justify-between">
                  <span className="font-thin text-xs">
                     {cartSize && cartSize > 1
                        ? cartSize + ' Produtos'
                        : cartSize == 1
                        ? cartSize + ' Produto'
                        : 'Carrinho está vazio'}
                  </span>
                  <span>{somaTotal}</span>
               </div>
               <div className="divider m-0" />
               <div className="flex justify-between">
                  <span className="font-thin text-xs">Total</span>
                  <span>{somaTotal}</span>
               </div>
               <div className="flex justify-between gap-3">
                  <button className="btn btn-ghost">
                     Comprar mais produtos
                  </button>
                  <button className="btn btn-success text-white">
                     Finalizar compra
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart
