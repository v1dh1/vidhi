import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Uxapp = () => {
  return (
    <div className='pt-4'>
        
        <div className="card lg:card-side shadow-xl bg-stone-800">
        <figure className=''></figure>
        <div className="card-body">

          <div className='flex justify-center'>

          <Image
                src="/WavelyCover.png" // The path to your image
                alt="Descriptive text for the image"
                layout="fit" // This makes the image fill the container
                objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                className="rounded-lg" // Ensures the image has rounded corners like the container
                height={400}
                width={400}
            />

          </div>

          <div className=''>
            <h2 className="card-title text-stone-200 text-2xl font-serifDisplay"> Wavely - Bringing back bartering </h2>
            <p className='text-stone-300'>Case Study | Personal Project | 2024</p>

            <div className='flex flex-wrap gap-2 pt-4'>
            <div className="badge badge-sm md:badge-sm lg:badge-md badge-outline border-fuchsia-100 text-fuchsia-100">UI Design</div>
            <div className="badge badge-sm md:badge-sm lg:badge-md badge-outline border-fuchsia-100 text-fuchsia-100">UX Design</div>
            <div className="badge badge-sm md:badge-sm lg:badge-md badge-outline border-fuchsia-100 text-fuchsia-100">Design Thinking</div>
            <div className="badge badge-sm md:badge-sm lg:badge-md badge-outline border-fuchsia-100 text-fuchsia-100">Research</div>

            </div>

          </div>

            <div className="card-actions justify-end">

                <Link href="/personal-project">
            
                <button className="btn text-l text-stone-800 bg-fuchsia-100 hover:bg-fuchsia-300">

                  View Case Study</button>

                  </Link>
            </div>
        </div>
        </div>
    

    </div>
  )
}

export default Uxapp