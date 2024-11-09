import React from 'react'
import Image from 'next/image'


const Pump = () => {
  return (
    <div className='container mx-auto w-11/12 pt-8'>
        
        
        <div className='text-stone-900 text-3xl font-semibold pb-4'>Building an Electro-Mechanical Power Supply</div>

        <div className=''>
        <Image
            src="/fopo1.png"
            alt="Image of the electro-mechanical system built."
            className="w-full h-auto"
            width={900}
            height={900}

        />
        <div className='text-stone-600 pt-2 pb-2 text-xs border-b-2 border-pink-200'>Image of the electro-mechanical system built</div>
        </div>

        <div className='text-stone-800 pt-4'>{"In my SYDE 361 - Needs Analysis and Prototyping class, I was presented with an exciting yet daunting challenge: build a hydroelectric device capable of delivering power to a mobile phone. This project provided an opportunity to explore the intersection of mechanical and electrical engineering while also honing my skills in design iteration and problem-solving. Over the course of several months, my team and I tackled everything from generator characterization to circuit design and final assembly. Here’s a detailed look at how this project went from ideation to execution. "}</div>

        <div className='text-stone-900 text-xl pt-8 font-semibold'>{"Designing the Experiment: Generator Output Characterization"}</div>
       
        <div className='flex flex-col lg:flex-row gap-4 pt-2'>
          <div className='text-stone-800'>
            {"I took charge of designing experiments to understand the power-generating potential of our setup. Specifically, we needed to measure the current output from our generator under various conditions like voltage, RPM, and rotation methods. This was essential for crafting an efficient power circuit that could convert mechanical energy into usable electrical energy for the phone. I developed a detailed experimental plan to measure these parameters during the next lab session, laying the groundwork for what would become the core of our project."}
          </div>

          <Image
            src="/graph1.png"
            alt="Graph of parameters tested."
            className="w-auto h-50"
            width={500}
            height={500}
          />
        </div>

        <div className='text-stone-800 text-xl font-semibold pt-4'>{"Circuit Design and Connections"}</div>
          <div className=''>{"The goal of the circuit was to get a 5V output from our input which came from a motor. To achieve the desired output, we utilized a series of two bridge rectifiers, designed to convert AC to DC while boosting the output voltage beyond the input. Here’s a breakdown of each component and its purpose:"}</div>

        <div className='text-stone-800 pt-4 font-semibold'>{"Initial Circuit Requirements: Converting AC to DC"}</div>
        <div className='text-stone-800 pt-2'>{"Circuit design became my primary focus as the project progressed. The hydroelectric generator we used produced alternating current (AC) due to its rotating components. However, to power a phone, we needed a stable direct current (DC) output. This meant our circuit had to convert AC to DC, stabilize the voltage, and provide a consistent current. We identified the main requirements as AC to DC conversion using a bridge rectifier, voltage stabilisation with capacitors and current regulation for steady output to the lamp."}</div>
       
        <div className='text-stone-800 pt-2'>{"Transitioning the circuit involved some errors which caused damage to some components of the circuit, and led to a less optimal power output when tested. The damage to these components was irreversible, and there was no time to get new parts. "}</div>

        <div className="flex flex-col lg:flex-row gap-4 pt-2">
    <div className="flex flex-col items-center">
        <Image
            src="/initialsketch.png"
            alt="Graph of parameters tested."
            className="w-full max-w-md h-auto mx-auto"
            width={700}
            height={500}
        />
        <p className="text-center mt-2 text-xs text-stone-600">Initial Sketch of the circuit</p>
    </div>

    <div className="flex flex-col items-center">
        <Image
            src="/thingsgoingwrong.png"
            alt="Graph of parameters tested."
            className="w-full max-w-md h-auto mx-auto"
            width={500}
            height={500}
        />
        <p className="text-center mt-2 text-xs text-stone-600">{"Issues starting to occur 😥"}</p>
    </div>
</div>



    </div>
  )
}

export default Pump