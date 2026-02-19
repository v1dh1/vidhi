import React from 'react'
import Link from 'next/link';


const Footer = () => {
  return (
    <div >
        

    <footer className="footer items-center p-4 bg-fuchsia-900 text-stone-100 font-instrument bg-[url('/footer-star-group.png')]
    bg-no-repeat
    bg-right
    bg-[length:40%]
    md:bg-contain
    rounded-t-3xl
    ">

      <div className='pl-4 md:pl-16 md:py-6 pt-6 text-left text-6xl'>
        <div className=''>Vidhi</div>
        <div className=''>Gokani</div>
      </div>
    
<div id="footer middle" className='flex flex-row gap-16 pl-4 md:pl-16 md:py-6 '>

  <div class="text-stone-300">
    PAGES
    <div className='text-stone-100' id="pages col">
      <ul className='flex flex-col gap-2 mt-4'>
        <li>
          <Link href="/" className='hover:underline'>Work</Link>
        </li>
        <li>
          <Link href="/about" className='hover:underline'>About</Link>
        </li>


      </ul>
    </div>
  </div>


  <div class="text-stone-300">
    SOCIAL
    <div className='text-stone-100' id="pages col">
      <ul className='flex flex-col gap-2 mt-4'>
        <li>
          <Link href="mailto:vidhigokani1@gmail.com" className='hover:underline'>Email</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/vidhigokani/" className='hover:underline'>Linkedin</Link>
        </li>
        <li>
          <Link href="https://github.com/v1dh1" className='hover:underline'>Github</Link>
        </li>
      </ul>
    </div>
  </div>


</div>


<div id="footer right side" className='pr-4 pl-4 md:pr-16 pb-4 md:pb-0'>
    <Link             href="https://drive.google.com/file/d/1Atf03cruBvciRvUdbc4U_Gk8IvlwPQ--/view?usp=sharing"
><div className='pb-2 hover:underline'>{"See my Resume :)"}</div>
  </Link>
  <div className='pb-2'>
    {"Built with Next.js, TypeScript, and Tailwind"}
    <div className=''>    {" with lots of love and sleepless nights"}</div>
  </div>


  <div className=''>
    <p className=''>{"© VIDHI GOKANI 2026"}</p>


  </div>



</div>

    </footer>

    </div>
  )
}

export default Footer