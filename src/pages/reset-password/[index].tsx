import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '../../components/InputElement'
import axios from 'axios'

type ForgoutFormData = {
   password: string
   password_confirmation: string
}

export default function ResetPassword() {
   const router = useRouter()

   const ForgoutFormSchema = yup.object().shape({
      password: yup
         .string()
         .required('Campo obrigatório')
         .min(6, 'Minímo 6 digitos'),
      password_confirmation: yup
         .string()
         .required('Campo obrigatório')
         .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
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
         //cadastrar a rota correta
         const { data } = await axios.post('/api/reset-password', {
            email: router.query.email,
            token: router.query.index,
            ...values,
         })
         //exibir toast para o usuario / redireciona-lo para o login ou fazer o login para ele pelo contexto
         console.log(data)
      } catch (error: any) {
         //exibir mensagem de erro
         console.log(error)
      }
   }

   return (
      <div>
         <h1>Registre sua nova senha</h1>
         <form
            onSubmit={handleSubmit(handleForgoutPassword)}
            className="form-control gap-2 w-full"
         >
            <Input
               {...register('password')}
               type="password"
               placeholder="**********"
               label="Nova senha"
               error={errors.password}
            />
            <Input
               {...register('password_confirmation')}
               type="password"
               placeholder="**********"
               label="Confirmação de nova senha"
               error={errors.password_confirmation}
            />

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
