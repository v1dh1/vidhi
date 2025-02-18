import React from 'react';

const Wone = () => {
  return (
    <div className="bg-gradient-to-t from-accenttaupe to-white h-screen pt-20 p-4 md:p-16">

      {/* Mobile layout */}
      <div className="flex flex-col md:hidden h-full justify-center items-center bg-[url('/wpbg.png')] bg-cover bg-center">


        <div className="p-4 text-stone-900 text-3xl">
          {"Redesigning WealthyPlanet's Website"}
        </div>

        <div className="p-4">
          <div className="mb-4">
            <div className="text-stone-900 font-semibold text-lg">Role</div>
            <div className="text-stone-700">Lead Product Designer</div>
          </div>

          <div className="mb-4">
            <div className="text-stone-900 font-semibold text-lg">Timeline</div>
            <div className="text-stone-700">4 months</div>
          </div>

          <div className="mb-4">
            <div className="text-stone-900 font-semibold text-lg">Tasks</div>
            <div className="text-stone-700">
              {"User research, Interaction + Visual design, Design Systems, Product thinking"}
            </div>
          </div>

          <div>
            <div className="text-stone-900 font-semibold text-lg">Tools</div>
            <div className="text-stone-700">{"Figma, FigJam"}</div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-4 gap-4 h-full items-center bg-[url('/wpbg.png')] bg-cover bg-center">
        {/* Left Column (3/4) */}
        <div className="p-4 pr-8 text-left text-stone-900 text-3xl md:text-7xl col-span-3 flex items-center">
          <div className=''>

<div className='pb-8'></div>
          {"Redesigning WealthyPlanet's Website"}
          </div>
        </div>
        

        {/* Right Column (1/4) */}
        <div className="p-4 flex flex-col justify-center">
          <div className="mb-4">
            <div className="text-stone-900 font-semibold text-lg">Role</div>
            <div className="text-stone-700">Lead Product Designer</div>
          </div>

          <div className="mb-4">
            <div className="text-stone-900 font-semibold text-lg">Timeline</div>
            <div className="text-stone-700">4 months</div>
          </div>

          <div className="mb-4">
            <div className="text-stone-900 font-semibold text-lg">Tasks</div>
            <div className="text-stone-700">
              {"User research, Interaction + Visual design, Design Systems, Product thinking"}
            </div>
          </div>

          <div>
            <div className="text-stone-900 font-semibold text-lg">Tools</div>
            <div className="text-stone-700">{"Figma, FigJam"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wone;
