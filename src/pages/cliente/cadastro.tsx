import Link from 'next/link'
import { Input } from '../../components/InputElement'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { maskCpfInput } from '../../utils/masks'

type SignInFormData = {
   email: string
   password: string
   confirm_password: string
   document: string
}

function Registro() {
   const signInFormSchema = yup.object().shape({
      email: yup
         .string()
         .required('Campo e-mail é obrigatório')
         .email('Digite um e-mail válido'),
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

   const { register, handleSubmit, formState } = useForm<SignInFormData>({
      resolver: yupResolver(signInFormSchema),
   })

   const { errors } = formState

   const handleSignIn: SubmitHandler<SignInFormData> = async (
      values,
      event
   ) => {
      event?.preventDefault()
      console.log(values)
   }

   return (
      <>
         <div className="text-2xl flex md:gap-1 flex-col md:flex-row text-center justify-center pt-4 text-default font-medium">
            <span>Cadastre-se</span>
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
               <div className="flex justify-end w-full">
                  <Link href={'/cliente/recuperar-senha'} passHref>
                     <a className="text-xs  text-blue-600 link cursor-pointer">
                        Esqueceu sua senha?
                     </a>
                  </Link>
               </div>
               <div className="mt-4">
                  {formState.isSubmitting ? (
                     <button className="btn loading upper-case py-4 text-PrimaryText flex justify-center w-full btn-info shadow-md border-0">
                        Carregando
                     </button>
                  ) : (
                     <button
                        className="btn upper-case py-4 text-PrimaryText flex justify-center w-full btn-info shadow-md border-0"
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
