import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import React from 'react'
import { Theme } from 'react-daisyui'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthComponent from '../components/AuthComponent'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { AuthProvider } from '../hooks/AuthContext'
import { CartProvider } from '../hooks/useCart'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter()
   return (
      <AuthProvider>
         <NextNProgress />
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
