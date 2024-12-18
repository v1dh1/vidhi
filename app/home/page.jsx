'use client'

import React from 'react'
import Lefthome from './Lefthome';
import LefthomeSmall from './LefthomeSmall';
import Projects from '../components/Projects';
import Homecontent from './Homecontent';


const Home = () => {
  return (


<div>
      {/* Small screens - LefthomeSmall as a top navbar */}
      <div className="md:hidden">
        <LefthomeSmall />
        <main className="bg-white p-4 overflow-y-auto">
        <Homecontent/>
        </main>
      </div>

      {/* Medium and large screens - Lefthome and Projects side by side */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4">
        {/* Lefthome takes up 1/4 of the screen */}
        <aside className="bg-pink-50 md:col-span-1 sticky top-0 h-screen p-4 overflow-y-auto">
          <Lefthome />
        </aside>

        {/* Projects takes up 3/4 of the screen */}
        <main className="bg-white md:col-span-3 p-4 overflow-y-auto">
        <Homecontent/>

        </main>
      </div>
    </div>
  );
};

export default Home