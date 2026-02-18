import React from 'react'
import Twocardcol from './Twocardcol'
import WorkHistoryTable from './WorkHistoryTable'
import Image from 'next/image'

const Currentlyabout = () => {
  return (
        
<div className='p-4 md:p-24'>


    <div className='text-stone-800 text-xl'>{"Experience"} </div>

    <WorkHistoryTable/>

    <div className='pt-16 pb-4 text-stone-800 text-xl'>What Drew Me to Design?</div>
    <div className='text-sm text-stone-500 md:pr-64'>{"I’ve always been drawn to creating, whether it was doodling, building, or experimenting with different crafts. Over the years, exploring a wide variety of hands-on projects helped me realize that crafting isn’t just a hobby, it’s what I’m meant to do. I love turning ideas into tangible, thoughtful creations that spark joy and curiosity. Every piece I make is infused with intention, creativity, and a little bit of fun, because I believe that great design isn’t just seen; it’s felt."}</div>

    <div className='pt-16 pb-4 text-stone-800 text-xl'>Outside of design, you'll find me</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Card 1 */}
  <div className="flex flex-col items-center">
    
    {/* Bordered image container */}
    <div className="bg-white rounded-lg border-2 border-stone-200 overflow-hidden w-full h-[280px]">
      <Image
        src="/eventplanning.png"
        alt="Event planning"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Caption OUTSIDE the border */}
    <div className="text-center text-sm text-stone-500 pt-2 pb-6 md:pb-0">
      {"Sending a google calendar invite for yet another event I’ve planned"}
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center">
    <div className="bg-white rounded-lg border-2 border-stone-200 overflow-hidden w-full h-[280px]">
      <Image
        src="/formware.jpeg"
        alt="Hardware design"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="text-center text-sm text-stone-500 pt-2 pb-6 md:pb-0">
      Designing and implementing hardware for a dental patient communication device
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center">
    <div className="bg-white rounded-lg border-2 border-stone-200 overflow-hidden w-full h-[280px]">
      <Image
        src="/cookies.jpg"
        alt="Cookies"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="text-center text-sm text-stone-500 pt-2">
      Trying another cookie recipe 
    </div>
  </div>

</div>



    </div>
  )
}

export default Currentlyabout