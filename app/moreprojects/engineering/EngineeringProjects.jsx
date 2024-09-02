import React from 'react'
import SystemsModeling from './SystemsModeling';
import Hydroelectricgen from './Hydroelectricgen';
const EngineeringProjects = () => {
  return (
    <div>

      <div className='p-4 pt-16 md:pt-4'>
      <p className='text-3xl text-stone-700 font-semibold pt-4 pb-1'>More Projects!</p>
      <p className='text-l text-stone-500 pb-4'>{"Outside of product design, here are some other things I've worked on"}</p>
      <p className='text-2xl text-stone-700 font-semibold pb-4'>Engineering</p>

      <div><SystemsModeling/></div>

      </div>

      

    </div>
  )
}

export default EngineeringProjects