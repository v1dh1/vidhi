import React from 'react'
import Link from 'next/link';


const Footer = () => {
  return (
    <div >
        

    <footer className="footer items-center p-4 bg-pink-100 text-stone-900">
    <div className='w-full p-4 mx-auto flex flex-col md:flex-row justify-between items-center'>

    <aside className="items-center grid-flow-col">

        <p className='font-sofia'>Vidhi Gokani - © 2024</p>

        <div className='flex flex-row'>
          <Link href="/surprise/mywhy">☺ </Link>
        <p className='pl-1'> designed and developed with lots of love and sleepless nights ˚ʚ♡ɞ˚</p>
        </div>

    </aside> 
    <nav className="flex flex-row gap-4 md:place-self-center md:justify-self-end">
        <a href='https://www.linkedin.com/in/vidhigokani/'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 256 256" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
  <g transform="scale(5.12, 5.12)">
    <path fill="#e7e5e4" d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z" />
  </g>
</svg>


        </a>
        <a href='mailto:vidhigokani1@gmail.com'>

        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 439.371 331.469"
  fillRule="evenodd"
  stroke="none"
  strokeWidth="1"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="10"
  fontFamily="none"
  fontWeight="none"
  fontSize="none"
  textAnchor="none"
  style={{ mixBlendMode: "normal" }}
>
  <defs>
    <marker
      id="ArrowEnd"
      markerHeight="3"
      markerUnits="strokeWidth"
      markerWidth="4"
      orient="auto"
      refX="0"
      refY="5"
      viewBox="0 0 10 10"
    >
      <path d="M 0,0 L 10,5 L 0,10 L 0,0 z" fill="#f5f5f4" />
    </marker>
    <marker
      id="ArrowStart"
      markerHeight="3"
      markerUnits="strokeWidth"
      markerWidth="4"
      orient="auto"
      refX="10"
      refY="5"
      viewBox="0 0 10 10"
    >
      <path d="M 10,0 L 0,5 L 10,10 L 10,0 z" fill="#f5f5f4" />
    </marker>
  </defs>
  <g transform="translate(-145.3305, -145.3305)">
    <path
      d="M 569.374,461.472 L 569.374,160.658 L 160.658,160.658 L 160.658,461.472 L 569.374,461.472 z"
      fill="none"
      stroke="#f5f5f4"
      strokeWidth="30.655"
    />
    <path
      d="M 164.46,164.49 L 340.78,343.158 C 353.849,356.328 377.63,356.172 390.423,343.278 L 566.622,165.928"
      fill="none"
      stroke="#f5f5f4"
      strokeWidth="30.655"
    />
    <path
      d="M 170.515,451.566 L 305.61,313.46"
      fill="none"
      stroke="#f5f5f4"
      strokeWidth="30.655"
    />
    <path
      d="M 557.968,449.974 L 426.515,315.375"
      fill="none"
      stroke="#f5f5f4"
      strokeWidth="30.655"
    />
  </g>
</svg>


</a>
        <a href='https://github.com/v1dh1'><svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 512 512"
  xmlSpace="preserve"
  fillRule="evenodd"
  clipRule="evenodd"
  stroke="none"
  strokeWidth="1"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="10"
  fontFamily="none"
  fontWeight="none"
  fontSize="none"
  textAnchor="none"
  style={{ enableBackground: "new 0 0 512 512" }}
>
  <path
    fill="#f5f5f4"
    d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1
      c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14
      c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5
      c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7
      c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3
      c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7
      C480,134.8,379.7,32,256,32z"
  />
</svg>
</a>
    </nav>
    </div>

    </footer>

    </div>
  )
}

export default Footer