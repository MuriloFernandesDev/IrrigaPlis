import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useRef,
   useState,
} from 'react'
import { toast } from 'react-toastify'
import { Product } from '../types/types'
import { getAccessToken } from '../utils/localStorage'

interface CartProviderProps {
   children: ReactNode
}

interface UpdateProductAmount {
   id: number
   amount: number
}

interface CartContextData {
   cart: Product[]
   addProduct: (
      id: number,
      price: number,
      image: string,
      title: string,
      amount: number
   ) => Promise<void>
   removeProduct: (id: number) => void
   updateProductAmount: ({ id, amount }: UpdateProductAmount) => void
   somaTotal: number
   cartSize: number
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps): JSX.Element {
   const [somaTotal, setSomaTotal] = useState(0)
   const [cartSize, setCartSize] = useState<number>(0)
   const [cart, setCart] = useState<Product[]>(() => {
      // Verificando se existe no localstorage o carrinho
      const storagedCart = getAccessToken('@IrPlis:cart')
      if (storagedCart) {
         //Se existir configurar o setCart
         return storagedCart
      }
      return []
   })
   /**
    *
    * Verificando alteração do carrinho
    * e atualizando o localstorage
    *
    *
    */
   const prevCartRef = useRef<Product[]>()
   useEffect(() => {
      prevCartRef.current = cart
   })
   const cartPreviousValue = prevCartRef.current ?? cart
   useEffect(() => {
      if (cartPreviousValue !== cart) {
         localStorage.setItem('@IrPlis:cart', JSON.stringify(cart))
      }
   }, [cart, cartPreviousValue])
   /**
    *
    * Add Produto (Função)
    *
    *
    */

   useEffect(() => {
      const total = cart.map((product) => {
         return product.price * product.amount
      }, 0) //da um map nos produtos e adiciona a const total

      var soma = 0
      for (var i = 0; i < total.length; i++) {
         soma += total[i]
      }
      setSomaTotal(soma)
   }, [cart])

   useEffect(() => {
      if (cart) {
         setCartSize(cart.length)
      }
   }, [cart])

   const addProduct = async (
      id: number,
      price: number,
      image: string,
      title: string,
      amount: number
   ) => {
      try {
         //Criando um novo array para manipular o cart
         const updatedCart = [...cart]

         // Verificando se ja existe o produto no carrinho
         const productExists = updatedCart.find((product) => product.id === id)

         // Verificando a quantidade inserida no carrinho
         const currentAmount = productExists ? productExists.amount : 0
         // Adicionando mais um item
         const newAmount = currentAmount + amount

         //verificando se o produto existe no carrinho
         if (productExists) {
            // se sim incrementa a quantidade
            productExists.amount = newAmount
         } else {
            //se nao, adiciona ao carrinho
            const newProduct = { id, price, image, title, amount: amount }
            updatedCart.push(newProduct)
            toast.success(`${title} adicionado ao carrinho`)
         }
         //Atualizando o Carrinho

         setCart(updatedCart)
      } catch {
         //Caso dê algum erro exibir uma notificação
         toast.error('Erro na adição do produto')
      }
   }
   /**
    *
    * Remover Produto (Função)
    *
    *
    */
   const removeProduct = (id: number) => {
      try {
         const updatedCart = [...cart]
         const productIndex = updatedCart.findIndex(
            (product) => product.id === id
         )
         if (productIndex >= 0) {
            updatedCart.splice(productIndex, 1)
            setCart(updatedCart)
         } else {
            throw Error()
         }
      } catch {
         toast.error('Erro na remoção do produto')
      }
   }
   /**
    *
    * Atualizar Quantidade (Função)
    *
    *
    */
   const updateProductAmount = async ({ id, amount }: UpdateProductAmount) => {
      try {
         //Se a quantidade recebida for 0 ou menos finaliza direto
         if (amount <= 0) {
            return
         }

         const updatedCart = [...cart]
         const productExists = updatedCart.find((product) => product.id === id)
         if (productExists) {
            productExists.amount = amount
            setCart(updatedCart)
            return
         } else {
            throw Error()
         }
      } catch {
         toast.error('Erro na alteração de quantidade do produto')
      }
   }

   return (
      <CartContext.Provider
         value={{
            cart,
            addProduct,
            removeProduct,
            updateProductAmount,
            somaTotal,
            cartSize,
         }}
      >
         {children}
      </CartContext.Provider>
   )
}

export function useCart(): CartContextData {
   const context = useContext(CartContext)

   return context
}
