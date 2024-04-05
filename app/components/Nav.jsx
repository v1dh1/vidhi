import React from 'react'

const Nav = () => {
  return (
    <div className='relative z-10 flex justify-center'>

        <div className="navbar text-stone-200 drop-shadow-xl border-b border-stone-700 w-full md:w-3/4">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl text-stone-100 font-apple">*ੈ✩Vidhi Gokani‧₊✩˚</a>

        </div>



        <div className="navbar-end">

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-200 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>About Me</a></li>
                    <li><a>Resume</a></li>
                </ul>
                </div>
        </div>


        </div>




    </div>
  )
}

export default Nav