import React from 'react'
import Link from 'next/link';


const Footer = () => {
  return (
    <div >
        

    <footer className="footer items-center p-4 bg-stone-200 text-stone-900">
    <div className='w-full p-4 mx-auto flex flex-col md:flex-row justify-between items-center'>

    <aside className="items-center grid-flow-col">

        <p className=''>Vidhi Gokani - © 2025</p>

        <div className='flex flex-row'>
        <p className='pl-1'> designed and developed with lots of love and sleepless nights ˚ʚ♡ɞ˚</p>
        </div>

    </aside> 
    <nav className="flex flex-row gap-4 md:place-self-center md:justify-self-end">
        <a href='https://www.linkedin.com/in/vidhigokani/'> <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="black"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.28c-.97 0-1.75-.78-1.75-1.72s.78-1.72 1.75-1.72 1.75.78 1.75 1.72-.78 1.72-1.75 1.72zm13.5 12.28h-3v-5.6c0-3.36-4-3.1-4 0v5.6h-3v-11h3v1.8c1.4-2.59 7-2.78 7 2.47v6.73z" />
  </svg>


        </a>
        <a href='mailto:vidhigokani1@gmail.com'>

        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="black"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l7.5 5.26c.4.28.9.28 1.3 0L20 8.99V18H4z"/>
  </svg>


</a>
        <a href='https://github.com/v1dh1'>  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="black"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.833 2.809 1.304 3.495.997.108-.775.418-1.305.761-1.605-2.666-.3-5.467-1.334-5.467-5.934 0-1.31.469-2.38 1.236-3.22-.124-.302-.535-1.52.118-3.165 0 0 1.008-.322 3.301 1.23a11.54 11.54 0 0 1 3.003-.404c1.019.005 2.047.137 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.656 1.645.245 2.863.121 3.165.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.63-5.478 5.922.43.37.816 1.102.816 2.22v3.293c0 .32.22.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
</a>
    </nav>
    </div>

    </footer>

    </div>
  )
}

export default Footer