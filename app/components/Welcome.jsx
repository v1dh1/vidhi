import React from 'react'

const Welcome = () => {
  return (
<div className='relative z-20 flex justify-center w-full'>
      <div className="w-full md:w-3/4 p-4 border-b-2 border-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Combined Column */}
          
          <div className="flex flex-col justify-center md:items-center sm:pl-6 md:pl-0 ">
            <div className="text-left max-w-xl text-black">
              <div className='text-2xl pt-3 font-inter'>Hey, I'm</div>
              <div className="text-8xl font-semibold">Vidhi</div>
              <div className="pt-2 text-xl">Currently Seeking Fall 2024 <br/> Product Internships</div>
            </div>
          </div>


          {/* Second Column */}
          <div className="flex flex-col justify-center">
            <div>
              <p className="sm:pt-4 md:pt-8 text-2xl pb-8 text-black">Product Designer and Manager who dabbles in code. Engineering student @UWaterloo</p>
              <div className=" flex flex-row pt-1 gap-6">
                <button className='btn text-xl bg-transparent border-2 border-fuchsia-950 text-fuchsia-950 hover:bg-fuchsia-950 hover:text-white'>Let's Talk  💌</button>
                <button className="btn bg-purple-100 border-none text-black text-xl hover:bg-fuchsia-950 hover:text-white"> Resume ⤵️ </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome