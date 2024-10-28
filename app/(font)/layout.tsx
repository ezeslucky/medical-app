import { Menu } from '@/components/Frontend/Menu'
import Navbar from '@/components/Frontend/Navbar'
import { ThemeProvider } from '@/components/Frontend/theme-provider'
import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
 

    <div className='  '>
      
      <Navbar/>
    
      
        <div className=" max-w-5xl container   border-t border-green-400/30   fixed  mx-auto py-3 font-bold left-0 right-0  top-20 w-full z-50">
          <Menu/>
        </div>
        
      {children}
    </div>
   
  )
}

export default Layout

