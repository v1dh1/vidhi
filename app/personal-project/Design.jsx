import React from 'react'
import Image from 'next/image'

const Design = () => {
  return (
    <div>

<div className='container mx-auto w-3/4'>

        <div className='text-3xl font-serifDisplay text-stone-100 pt-32'>Design</div>
        <div className='text-l text-stone-200'>Rationale behind the designs</div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className=''>
        <Image
              src="/design1.png"
              width={600}
              height={500}
              alt="iphone mockup of front page"
            />
        </div>

        <div className=''>Being my first design project, Wavely put me through a lot of learning</div>
        
        </div>




        <div className=''></div>
    </div>

</div>
  )
}

export default Design