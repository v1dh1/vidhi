'use client'
import React, { useState } from 'react';


const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {/* Left Column / Header */}
      <div className="bg-pink-50 md:col-span-1 sticky top-0 h-screen p-4">
        {/* Dropdown for small screens */}
        <div className="md:hidden">
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={toggleDropdown}
          >
            Menu
          </button>
          {isOpen && (
            <div className="mt-2">
              {/* Content of the left column goes here */}
              <p className='text-l'>Vidhi Gokani</p>
              <div className='text-l text-stone-900'>Vidhi Gokani</div>
              <p>jyguy 2</p>
              <p>Item 3</p>
            </div>
          )}
        </div>

        {/* Content for medium/large screens */}
        <div className="hidden md:block">
          {/* Content of the left column goes here */}

          {/* name + title */}
          <p className='text-l text-stone-800 font-medium'>Vidhi Gokani</p>
          <p className='text-xs text-stone-600'>Product Designer</p>
          <div className='px-3 py-2 border-b border-pink-200'></div>

          {/* about me intro */}
          <p className='pt-8 text-l text-stone-800'> About </p>
          <p className='text-xs text-stone-400'>What makes me, me</p>
          <div className='px-3 py-2 border-b border-pink-200'></div>
          <p className='text-xs text-stone-600 pt-2'>I'm a Product Designer from Canada that is driven by curiosity and crafting pleasant visuals. Previously, I designed for an agency called Essential Designs. Currently, I am freelancing and pursuing side ventures.</p>


          {/* case studies layout */}
          <p className='pt-8 text-l text-stone-800'>Case Studies</p>
          <p className='text-xs text-stone-600'>View my selected projects</p>
          <div className='px-3 py-2 border-b border-pink-200'></div>
         
         {/* engineering/other ventures */}
         <p className='pt-8 text-l text-stone-800'>More Projects</p>
          <p className='text-xs text-stone-600'>Engineering, Passion Projects and More </p>
          <div className='px-3 py-2 border-b border-pink-200'></div>
          
         {/* contact*/}
         <p className='pt-8 text-l text-stone-800'>Contact</p>
          <p className='text-xs text-stone-600 pb-2'>I am always looking to connect with new people, feel free to reach out. Currently seeking Summer 2025 internships</p>
          <button className="btn btn-xs text-stone-700 bg-pink-100 hover:bg-green-50"><a href='mailto:vidhigokani1@gmail.com'>Let's Talk</a></button>
          <div className='px-3 py-2 border-b border-pink-200'></div>

          {/* footer*/}
          
          
          <p>Item 3</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-white md:col-span-3 p-4 overflow-y-auto">
        {/* Content of the right column goes here */}
        <h1>Main Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          risus nec dui venenatis dignissim. Suspendisse tempor, lacus at bibendum
          aliquam, urna ligula fermentum nunc, eu facilisis lectus ex et eros.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Homepage;
