import { createContext, ReactNode, useEffect, useState } from 'react'
import { parseCookies, destroyCookie } from 'nookies'
import axios, { AxiosError } from 'axios'
import Router from 'next/router'
import { setCookies } from '../utils/useCookies'
import { toast } from 'react-toastify'
import { deleteCookie } from 'cookies-next'
import { IUser } from '../types/types'

type SignInData = {
   email: string
   password: string
}

type AuthContextType = {
   user: IUser | null
   signIn: (data: SignInData) => Promise<void>
   signOut: () => void
}

type AuthProviderProps = {
   children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
   const [user, setUser] = useState<IUser | null>(null)

   async function signIn({ email, password }: SignInData) {
      try {
         const { data } = await axios.post('/api/auth/login', {
            email,
            password,
         })

         console.log(data)
      } catch (error: any) {
         if (error?.response.data.message) {
            toast.error('E-mail ou senha inválidos.')
         }
      }
   } //função para realizar login

   async function signOut() {
      try {
         await axios.post('/api/logout')
         deleteCookie('@BuyPhone:Token')
         setUser(null)
         Router.push('/account/login')
      } catch (err) {
         deleteCookie('@BuyPhone:Token')
         setUser(null)
         Router.push('/account/login')
      }
   } //função para realizar o logout

   useEffect(() => {
      const userSearch = async () => {
         const { '@BuyPhone:Token': token } = parseCookies()

         //  if (token) {
         //     axios
         //        .get('/api/me')
         //        .then((response) => {
         //           setUser(response.data)
         //        })
         //        .catch(() => {
         //           destroyCookie(null, '@BuyPhone:Token')
         //        })
         //  }
      }
      userSearch()
   }, []) //effect para buscar usuário pelo token

   return (
      <AuthContext.Provider
         value={{
            user,
            signIn,
            signOut,
         }}
      >
         {children}
      </AuthContext.Provider>
   )
}
