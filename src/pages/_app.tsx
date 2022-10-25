import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Theme } from 'react-daisyui'
import Container from '../components/Container'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Theme dataTheme="light">
         <Container>
            <Component {...pageProps} />
         </Container>
      </Theme>
   )
}

export default MyApp
