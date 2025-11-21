'use client'

import React from 'react';
import Lefthome from './Lefthome';
import LefthomeSmall from './LefthomeSmall';

import Homecontent from './Homecontent';

const Home = () => {
  return (
    <div>
      {/* Medium and larger screens - Show Lefthome */}
      <div className="hidden md:block">
        <Lefthome />
      </div>

      {/* Small screens - Show LefthomeSmall */}
      <div className="block md:hidden">
        <Lefthome />
      </div>

      <main className="bg-stone-50 overflow-y-auto">
        <Homecontent />
      </main>
    </div>
  );
};

export default Home;
