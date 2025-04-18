import React from 'react'
import SystemsModeling from './SystemsModeling';
import Hydroelectricgen from './Hydroelectricgen';
const EngineeringProjects = () => {
  return (
    <div>

      <div className='p-16 md:pt-4'>
      <p className='text-3xl md:text-6xl text-stone-700 font-garamond pt-4 pb-1 font-apple'>{"More Projects!"}</p>
      <p className='text-sm text-stone-600 pb-16'>{"Outside of product & design, here are some other things I've worked on"}</p>
      <p className='text-xl text-stone-700 font-semibold pb-4'>{"Engineering"}</p>

      <div><Hydroelectricgen/></div>
      <div className='pt-4'><SystemsModeling/></div>

      </div>

      

    </div>
  )
}

export default EngineeringProjects