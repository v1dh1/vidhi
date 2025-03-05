'use client'

import React from 'react'

import Projects from '../components/Projects';

import Lefthome from '../home/Lefthome';
import LefthomeSmall from '../home/LefthomeSmall';

const Design = () => {
  return (


<div>
      {/* Small screens - LefthomeSmall as a top navbar */}
      <div className="pt-16">
        <LefthomeSmall />
        <main className="bg-white p-4 overflow-y-auto">
          <Projects />
        </main>
      </div>

      {/* Medium and large screens - Lefthome and Projects side by side */}

    </div>
  );
};

export default Design