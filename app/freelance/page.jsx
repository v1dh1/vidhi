'use client'

import React from 'react'
import Lefthome from '../home/Lefthome';
import LefthomeSmall from '../home/LefthomeSmall';
import Projects from '../components/Projects';
import Homecontent from '../home/Homecontent'
import Freehome from './Freehome';


const Home = () => {
  return (


<div>
      <div className="">
        <LefthomeSmall />
        <main className="bg-stone-50 p-4 overflow-y-auto">
        <Freehome/>
        </main>
      </div>

    </div>
  );
};

export default Home