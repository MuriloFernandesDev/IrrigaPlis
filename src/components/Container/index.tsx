import Footer from '../Footer'
import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../NavBar'), { ssr: false })

interface ContainerProps {
   children: ReactElement
}
const Container = ({ children }: ContainerProps) => {
   return (
      <React.Fragment>
         <NavBar />
         <div className="pt-[117px]">{children}</div>
         <Footer />
      </React.Fragment>
   )
}

export default Container
