import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Theme } from 'react-daisyui'
import Container from '../components/Container'
import { CartProvider } from '../hooks/useCart'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Theme dataTheme="light">
         <CartProvider>
            <Container>
               <Component {...pageProps} />
            </Container>
         </CartProvider>
      </Theme>
   )
}

export default MyApp
