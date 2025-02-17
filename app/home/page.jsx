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
      <div className="">
        <LefthomeSmall />
        <main className="bg-white p-4 overflow-y-auto">
        <Homecontent/>
        </main>
      </div>


    </div>
  );
};

export default Home