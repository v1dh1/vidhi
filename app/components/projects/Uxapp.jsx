import React from 'react'

const Uxapp = () => {
  return (
    <div className='pt-4'>
        
        <div className="card lg:card-side shadow-xl bg-stone-950">
        <figure className=''><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title text-stone-200 text-2xl "> Weavely - Brinign back bartering! </h2>
            <p className='text-stone-300'>Case Study | Personal Project | 2024</p>

            <div className='flex flex-row gap-4'>
              <div className="badge sm:badge-xs md:badge-lg badge-outline border-fuchsia-100 text-fuchsia-100">UI Design</div>
              <div className="badge sm:badge-xs md:badge-lg badge-outline border-fuchsia-100 text-fuchsia-100">UX Design</div>
              <div className="badge sm:badge-xs md:badge-lg badge-outline border-fuchsia-100 text-fuchsia-100">Design Thinking</div>
              <div className="badge sm:badge-xs md:badge-lg badge-outline border-fuchsia-100 text-fuchsia-100">Research</div>

            </div>

            <div className="card-actions justify-end">
            
                <button className="btn text-l text-stone-100 bg-gradient-to-br hover:bg-gradient-to-bl from-stone-700 to-stone-950 drop-shadow-lg ">

                  View Case Study</button>
            </div>
        </div>
        </div>
    

    </div>
  )
}

export default Uxapp