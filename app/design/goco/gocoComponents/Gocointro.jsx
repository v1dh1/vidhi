import React from 'react'
import Image from 'next/image'

const Gocointro = () => {
  return (
    <div>

<div>


<div className='text-stone-700 text-4xl pt-8 font-semibold'>GoCo</div>
<div className='text-stone-500 text-2xl pt-4'>{"Mobility As a Service"}</div>

<div className='text-stone-500 pt-2'> {"GoCo is a platform that allows city dwellers to subscribe to a variety of transportation options, including e-bikes, scooters, ride-shares, and autonomous vehicles. The app suggests the most efficient, eco-friendly options based on a user’s location and needs, providing a seamless and adaptable commuting experience without the hassles of car ownership."}</div>

<div className='flex flex-row gap-3 pt-4 '>
            <div className="badge badge-outline border-pink-400 text-pink-400">UX Design</div>
            <div className="badge badge-outline border-pink-400 text-pink-400">Research</div>
            <div className="badge badge-outline border-pink-400 text-pink-400">Prototyping</div>
</div>

<div className='flex flex-row gap-12 pt-4'>

    <div className='text-stone-600 pt-4'>6 min read</div>

    <div className=''>
        <div className='text-stone-700 pt-4'>TIMELINE</div>
        <div className='text-stone-600'>September 2024</div>
    </div>

    <div className=''>
        <div className='text-stone-700 pt-4'>DESIGN ROLE</div>
        <div className='text-stone-600'>{"UI Design, Research"}</div>
    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4 pt-8 pb-4">

<div className=''>
<Image
      src="/trace-before.png"
      width={500}
      height={500}
      alt="Trace Before"
    />
  <div className='text-center pt-2 text-stone-500'>Trace Before the Integration</div>
</div>

<div className=''>
<Image
      src="/trace-after.png"
      width={500}
      height={500}
      alt="Trace After"
    />
  <div className='text-center pt-2 text-stone-500'>Trace After the Integration</div>
</div>

</div>




</div>
    </div>
  )
}

export default Gocointro