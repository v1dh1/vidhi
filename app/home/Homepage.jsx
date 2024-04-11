import React from 'react'

const Homepage = () => {
  return (
<div style={{ minHeight: '90vh' }} className="flex flex-col justify-center items-center  ">
      <div className="container mx-auto w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">
          <div className="w-full p-4">
             
              <div className='text-3xl text-stone-300'>
                {"Hello, I'm"} 
              </div>
              <div className='text-7xl font-extrabold pt-6 text-fuchsia-100 font-sofia pb-2'>
             {" Vidhi ✫"}
              </div>
              <div className='text-2xl text-stone-200 pt-4'>
              {"Product Designer and Manager who dabbles in code. Engineering student @UWaterloo"}
              </div>

              <div className='text-xl text-stone-200 pt-2 font-bold'>{"Currently seeking Fall 2024 product internships"}</div>

              <div className=" flex flex-row gap-6 pt-4">
                <a href="mailto:vidhigokani1@gmail.com">
                <button className='btn text-xl text-stone-950 bg-fuchsia-100 hover:bg-fuchsia-300 drop-shadow-lg'>{"Let's Talk  💌"}</button>
                </a>
              </div>


          </div>
          <div className="w-full p-4">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage