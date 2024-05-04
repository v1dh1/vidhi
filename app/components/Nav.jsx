import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='relative z-10 flex justify-center'>

        <div className="navbar text-stone-200 drop-shadow-xl border-b border-stone-700 w-full md:w-3/4">
        <div className="navbar-start">
            <a href="https://vidhi.ca/" className="btn btn-ghost text-xl text-stone-100 font-sofia">*ੈ✩Vidhi Gokani‧₊✩˚</a>

        </div>





        <div className="navbar-end">

        <Link href="/about">
      <button className='flex flex-col items-center justify-center text-stone-200 py-2 px-4 rounded hover:bg-stone-950 hover:rounded-3xl'>
        About
      </button>
      </Link>


      <a href="https://drive.google.com/file/d/129jvd1Ia6WgBLzCh5garrQEIG1MaTo-T/view?usp=sharing" className="flex flex-col items-center justify-center text-stone-200 py-2 px-4 rounded hover:bg-stone-950 hover:rounded-3xl">Resume</a>
        </div>


        </div>




    </div>
  )
}

export default Nav