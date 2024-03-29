import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { Input } from '../../components/InputElement'

type ForgoutFormData = {
   email: string
}

function RecuperarSenha() {
   const ForgoutFormSchema = yup.object().shape({
      email: yup
         .string()
         .required('Campo email é obrigatório')
         .email('Esse campo precisa ser um e-mail'),
   })
   const { register, handleSubmit, formState } = useForm<ForgoutFormData>({
      resolver: yupResolver(ForgoutFormSchema),
   })
   const { errors } = formState

   const handleForgoutPassword: SubmitHandler<ForgoutFormData> = async (
      values,
      event
   ) => {
      event?.preventDefault()
      try {
         await axios.post('/api/forgot-password', values)
         toast.success(
            'Enviamos um e-mail de recuperação de senha para o e-mail informado.'
         )
      } catch {
         toast.error('Confira o e-mail digitado.')
      }
   }

   return (
      <div className="grid gap-3 pt-3">
         <h3>
            Esqueceu sua senha? Sem problemas. Apenas informe seu endereço de
            e-mail que enviaremos um link que permitirá definir uma nova senha.
         </h3>
         <form
            onSubmit={handleSubmit(handleForgoutPassword)}
            className="form-control gap-2 w-full"
         >
            <Input
               {...register('email')}
               type="text"
               label="Email"
               error={errors.email}
            />

            <div className="flex mb-4 w-full">
               <Link href={'/cliente/login'} passHref>
                  <a className="text-xs link cursor-pointer">Ir para o login</a>
               </Link>
            </div>

            {formState.isSubmitting ? (
               <button className="btn btn-success text-white loading normal-case py-4 flex justify-center w-full shadow-md border-0">
                  Carregando
               </button>
            ) : (
               <button
                  className="btn btn-success text-white normal-case py-4 flex justify-center w-full shadow-md border-0"
                  type="submit"
               >
                  Redefinir senha
               </button>
            )}
         </form>
      </div>
   )
}

export default RecuperarSenha
