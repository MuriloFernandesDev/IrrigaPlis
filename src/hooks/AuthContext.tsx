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
         const response = await axios.post('/api/auth/login', {
            email,
            password,
         })
         setCookies('@Irriga_plis:Token', response.data.token, undefined)

         axios
            .get('/api/user')
            .then((response) => {
               setUser(response.data)
               Router.push('/')
            })
            .catch(() => {
               toast.error('Ocorreu um erro, tente novamente.')
            })
      } catch (error: any) {
         if (error?.response.data.message) {
            toast.error('E-mail ou senha inválidos.')
         }
      }
   } //função para realizar login

   async function signOut() {
      try {
         await axios.post('/api/logout')
         deleteCookie('@Irriga_plis:Token')
         setUser(null)
      } catch {
         deleteCookie('@Irriga_plis:Token')
         setUser(null)
      }
   } //função para realizar o logout

   useEffect(() => {
      const userSearch = async () => {
         const { '@Irriga_plis:Token': token } = parseCookies()

         if (token) {
            axios
               .get('/api/user')
               .then((response) => {
                  setUser(response.data)
               })
               .catch(() => {
                  destroyCookie(null, '@Irriga_plis:Token')
               })
         }
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
