import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import ProductCart from '../../components/ProductCart'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/format'

const Cart = (): JSX.Element => {
   const { cart, somaTotal, cartSize } = useCart()

   return (
      <div className="max-w-7xl mx-auto py-10 px-4">
         <div className="flex w-full">
            <h1 className="font-semibold text-3xl text-primary">
               Meu carrinho
            </h1>
         </div>
         <div className="divider bg-primary/20 h-[1px]" />
         {cartSize > 0 ? (
            <div className="grid md:grid-cols-3 md:gap-10">
               <div className="flex flex-col md:col-span-2">
                  {cartSize &&
                     cart.map((product) => (
                        <ProductCart key={product.id} product={product} />
                     ))}
               </div>
               <div className="flex flex-col gap-5 md:col-span-1">
                  <div className="divider m-0" />
                  <div className="flex justify-between">
                     <span className="font-thin text-xs">
                        {cartSize && cartSize > 1
                           ? cartSize + ' Produtos'
                           : cartSize == 1
                           ? cartSize + ' Produto'
                           : 'Carrinho está vazio'}
                     </span>
                     <span>Solicitar orçamento</span>
                  </div>
                  <div className="divider m-0" />
                  <div className="flex justify-between">
                     <span className="font-thin text-lg">Total</span>
                     <span>Solicitar orçamento</span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-3">
                     <button className="btn btn-ghost">
                        Comprar mais produtos
                     </button>
                     <button className="btn btn-success text-white">
                        Finalizar compra
                     </button>
                  </div>
               </div>
            </div>
         ) : (
            <div className="flex flex-col gap-8 my-10 items-center max-w-3xl mx-auto">
               <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="w-10 h-10 text-primary"
               />
               <h1 className="text-2xl font-bold">Carrinho vazio!</h1>
               <span>Você ainda não possui itens no seu carrinho.</span>
               <Link href="/produtos">
                  <button className="btn btn-success text-white">
                     Ver produtos
                  </button>
               </Link>
            </div>
         )}
      </div>
   )
}

export default Cart
