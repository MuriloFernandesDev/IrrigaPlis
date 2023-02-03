import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Theme } from 'react-daisyui'
import { CartProvider } from '../hooks/useCart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import React from 'react'
import { AuthProvider } from '../hooks/AuthContext'
import AuthComponent from '../components/AuthComponent'

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter()
   return (
      <AuthProvider>
         <Theme dataTheme="light">
            <CartProvider>
               <ToastContainer />
               {router.route === '/cliente/login' ||
               router.route === '/cliente/cadastro' ||
               router.route === '/cliente/recuperar-senha' ||
               router.route === `/reset-password/[index]` ? (
                  <AuthComponent>
                     <Component {...pageProps} />
                  </AuthComponent>
               ) : (
                  <React.Fragment>
                     <NavBar />
                     <div className="pt-[140px] md:pt-[117px]">
                        <Component {...pageProps} />
                     </div>
                     <Footer />
                  </React.Fragment>
               )}
            </CartProvider>
         </Theme>
      </AuthProvider>
   )
}

export default MyApp
