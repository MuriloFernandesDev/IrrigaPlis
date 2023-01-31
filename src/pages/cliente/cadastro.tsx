import Link from 'next/link'
import { Input } from '../../components/InputElement'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { maskCpfInput } from '../../utils/masks'
import axios, { AxiosError } from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../hooks/AuthContext'
import { toast } from 'react-toastify'
import Router from 'next/router'

type SignInFormData = {
   email: string
   password: string
   confirm_password: string
   document: string
   name: string
}

function Registro() {
   const signInFormSchema = yup.object().shape({
      email: yup
         .string()
         .required('Campo e-mail é obrigatório')
         .email('Digite um e-mail válido'),
      name: yup.string().required('Campo nome é obrigatório'),
      password: yup
         .string()
         .required('Campo senha é obrigatório')
         .min(6, 'Mínimo de 6 dígitos'),
      confirm_password: yup
         .string()
         .required('Campo obrigatório')
         .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
      document: yup
         .string()
         .required('Campo CPF é obrigatório')
         .min(14, 'Mínimo de 6 dígitos'),
   })

   const { register, handleSubmit, formState, setError } =
      useForm<SignInFormData>({
         resolver: yupResolver(signInFormSchema),
      })

   const { errors } = formState

   const { signIn, user } = useContext(AuthContext)

   const handleSignIn: SubmitHandler<SignInFormData> = async (
      values,
      event
   ) => {
      event?.preventDefault()
      try {
         await axios.post('/api/auth/register', values)
         toast.success('Conta criada com sucesso.')
         await signIn(values)
      } catch (error) {
         const errorData = (error as AxiosError)?.response?.data as Error
         const { errors }: any = errorData

         if (errors.document) {
            setError(
               'document',
               { type: 'focus', message: errors.document[0] },
               { shouldFocus: true }
            )
         }
         if (errors.password) {
            setError(
               'password',
               { type: 'focus', message: errors.password[0] },
               { shouldFocus: true }
            )
         }
         if (errors.email) {
            setError(
               'email',
               { type: 'focus', message: errors.email[0] },
               { shouldFocus: true }
            )
         }
         if (errors.name) {
            setError(
               'name',
               { type: 'focus', message: errors.name[0] },
               { shouldFocus: true }
            )
         }
         if (!errors) {
            toast.error(
               'Ocorreu algum erro no registro, revise os dados ou tente mais tarde.'
            )
         }
      }
   }

   return (
      <>
         <div className="text-2xl flex md:gap-1 flex-col md:flex-row text-center justify-center pt-4 font-medium">
            <span>Cadastre-se</span>
         </div>
         <div className="w-full">
            <form
               onSubmit={handleSubmit(handleSignIn)}
               className="form-control gap-2"
            >
               <Input
                  {...register('name')}
                  type="text"
                  label="Nome"
                  error={errors.name}
               />

               <Input
                  {...register('email')}
                  type="text"
                  label="E-mail"
                  error={errors.email}
               />

               <Input
                  {...register('document')}
                  type="tel"
                  label="CPF"
                  error={errors.document}
                  onKeyUp={(e) => maskCpfInput(e)}
                  maxLength={14}
                  classNameLabel="text-[#201942]"
               />

               <Input
                  {...register('password')}
                  type="password"
                  label="Senha"
                  error={errors.password}
               />
               <Input
                  {...register('confirm_password')}
                  type="password"
                  label="Confirmação de senha"
                  error={errors.confirm_password}
               />
               <div className="flex flex-col items-center md:items-start w-full">
                  <Link href={'/cliente/recuperar-senha'} passHref>
                     <a className="text-xs  text-blue-600 link cursor-pointer">
                        Esqueceu sua senha?
                     </a>
                  </Link>
                  <Link href={'/cliente/login'} passHref>
                     <a className="text-xs  text-blue-600 link cursor-pointer">
                        Ir para o login
                     </a>
                  </Link>
               </div>
               <div className="mt-4">
                  {formState.isSubmitting ? (
                     <button className="btn btn-success loading upper-case py-4 flex justify-center w-full shadow-md border-0">
                        Carregando
                     </button>
                  ) : (
                     <button
                        className="btn btn-success upper-case py-4 flex justify-center w-full shadow-md border-0"
                        type="submit"
                     >
                        Cadastrar
                     </button>
                  )}
               </div>
            </form>
         </div>
      </>
   )
}

export default Registro
