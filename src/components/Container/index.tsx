import NavBar from '../NavBar'
import Footer from '../Footer'
import React, { ReactElement } from 'react'
interface ContainerProps {
   children: ReactElement
}
const Container = ({ children }: ContainerProps) => {
   return (
      <React.Fragment>
         <NavBar />
         {children}
         <Footer />
      </React.Fragment>
   )
}

export default Container
