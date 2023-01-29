import { ReactElement } from 'react'

interface AuthComponentProps {
   children: ReactElement
}
const AuthComponent = ({ children }: AuthComponentProps) => {
   return (
      <div className="w-full flex md:items-center h-screen">
         <div className="w-2/3 hidden md:block bg-primary relative h-screen bg-cover bg-no-repeat bg-center bg-[url(../../src/assets/images/wpp-irriga.jpg)]">
            <div className="absolute w-full top-[50%] left-10">
               <h1 className="text-5xl font-semibold">Irrigação penápolis</h1>
               <p className="text-2xl font-medium">
                  O melhor para sua agricultura
               </p>
            </div>
         </div>
         <div className="w-full md:w-1/3 flex flex-col justify-center px-10">
            {children}
         </div>
      </div>
   )
}

export default AuthComponent
