import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '../../components/InputElement'
import { AuthContext } from '../../hooks/AuthContext'

type SignInFormData = {
   email: string
   password: string
}

function Login() {
   const { signIn } = useContext(AuthContext)

   const signInFormSchema = yup.object().shape({
      email: yup
         .string()
         .required('Campo e-mail é obrigatório')
         .email('Digite um e-mail válido'),
      password: yup
         .string()
         .required('Campo senha é obrigatório')
         .min(6, 'Mínimo de 6 dígitos'),
   })

   const { register, handleSubmit, formState } = useForm<SignInFormData>({
      resolver: yupResolver(signInFormSchema),
   })

   const { errors } = formState

   const handleSignIn: SubmitHandler<SignInFormData> = async (
      values,
      event
   ) => {
      event?.preventDefault()
      await signIn(values)
   }
   return (
      <>
         <div className="text-2xl text-center my-4 text-default font-medium">
            <span>
               Faça login
               <br />
               ou cadastre-se
            </span>
         </div>
         <div className="w-full">
            <form
               onSubmit={handleSubmit(handleSignIn)}
               className="form-control gap-2"
            >
               <Input
                  {...register('email')}
                  type="text"
                  label="E-mail"
                  error={errors.email}
               />

               <Input
                  {...register('password')}
                  type="password"
                  label="Senha"
                  error={errors.password}
               />
               <div className="flex justify-end w-full">
                  <Link href={'/cliente/recuperar-senha'} passHref>
                     <a className="text-xs link cursor-pointer">
                        Esqueceu sua senha?
                     </a>
                  </Link>
               </div>
               <div className="mt-4">
                  {formState.isSubmitting ? (
                     <button className="btn btn-success loading upper-case py-4 text-white flex justify-center w-full shadow-md border-0">
                        Carregando
                     </button>
                  ) : (
                     <button
                        className="btn btn-success upper-case py-4 text-white flex justify-center w-full shadow-md border-0"
                        type="submit"
                     >
                        Entrar
                     </button>
                  )}
               </div>
               <div className="text-default flex items-center mt-1 justify-between">
                  <Link href={'/cliente/cadastro'} passHref>
                     <a className="text-xs link cursor-pointer">Cadastre-se</a>
                  </Link>
                  <Link href={'/'} passHref>
                     <a className="text-xs link cursor-pointer">
                        Voltar para o início
                     </a>
                  </Link>
               </div>
            </form>
         </div>
      </>
   )
}

export default Login
