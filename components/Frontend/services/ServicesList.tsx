import React from 'react'
import { ServicesCard } from './ServicesCard'


function ServicesList() {
  return (
    <div className='  grid lg:grid-cols-5  md:grid-cols-3 sm:grid-cols-2  grid-cols-1  gap-6 '>
     <ServicesCard/>
     <ServicesCard/>
     <ServicesCard/>
     <ServicesCard/>
     <ServicesCard/>
     <ServicesCard/>
    </div>
  )
}

export default ServicesList
