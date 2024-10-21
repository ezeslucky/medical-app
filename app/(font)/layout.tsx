import { Menu } from '@/components/Frontend/Menu'
import Navbar from '@/components/Frontend/Navbar'
import { ThemeProvider } from '@/components/Frontend/theme-provider'
import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
 

    <div className=' '>
      <Navbar/>
        <div className=" max-w-5xl   mx-auto py-3 font-bold">
          <Menu/>
        </div>
        
      {children}
    </div>
   
  )
}

export default Layout

