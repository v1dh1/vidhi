'use client'

import React from 'react';
import Lefthome from './Lefthome';
import LefthomeSmall from './LefthomeSmall';
import Projects from '../components/Projects';
import Homecontent from './Homecontent';
import Smallabout from './Smallabout';
import Projectsdisplay from './Projectsdisplay';

const Home = () => {
  return (
    <div>
      {/* Medium and larger screens - Show Lefthome */}
      <div className="hidden md:block">
        <Lefthome />
      </div>

      {/* Small screens - Show LefthomeSmall */}
      <div className="block md:hidden">
        <LefthomeSmall />
      </div>

      <main className="bg-stone-50 overflow-y-auto">
        <Homecontent />
        <Smallabout />
        <Projectsdisplay />
      </main>
    </div>
  );
};

export default Home;
