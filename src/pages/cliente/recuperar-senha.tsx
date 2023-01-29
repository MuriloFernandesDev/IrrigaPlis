import { Input } from '../../components/InputElement'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

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
      console.log(values)
   }
   return (
      <div className="grid gap-3 pt-3">
         <h1 className="text-[#201942]">
            Esqueceu sua senha? Sem problemas. Apenas informe seu endereço de
            e-mail que enviaremos um link que permitirá definir uma nova senha.
         </h1>
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

            {formState.isSubmitting ? (
               <button className="btn btn-info text-white loading normal-case py-4 flex justify-center w-full shadow-md border-0">
                  Carregando
               </button>
            ) : (
               <button
                  className="btn btn-info text-white normal-case py-4 flex justify-center w-full shadow-md border-0"
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
