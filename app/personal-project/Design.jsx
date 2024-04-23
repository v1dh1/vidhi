import React from 'react'
import Image from 'next/image'

const Design = () => {
  return (
    <div>

<div className='container mx-auto w-3/4'>

        <div className='text-3xl font-serifDisplay text-stone-100 pt-32'>Design</div>
        <div className='text-l text-stone-200'>Rationale behind the designs</div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className=''>
            
        <Image
              src="/flowchart.png"
              width={1000}
              height={500}
              alt="iphone mockup of front page"
            />
        </div>

        <div className='flex justify-center items-center'>
        <div className='text-stone-200 text-center'>{"I created a flowchart to plan out the vision for this app. This was based on all the research that was done, and this flowchart is a very basic outline of the features. "}</div>
        </div>
        </div>

        <div className='text-stone-100 text-xl pt-8 pb-4'>Onboarding</div>
        <div className='text-stone-200'>{"I stuck to a 3 screen process for onboarding. The onboarding process of any app can make or break whether users will actually use the app or not. Users have limited time which they are ready to devote to learning how the product works before starting to actually interact with it, and I wanted to keep the onboarding short and simple. It should concisely let users know who should use this app, how it will be helpful, and how to use it. "}</div>

        <div className='grid grid-cols-1 md:grid-cols-2'>

            <div className='pt-4'>

            <Image
              src="/onboarding1.png"
              width={1000}
              height={500}
              alt="iphone mockup of front page"
            />
            </div>


            <div className=''>hiii</div>
        </div>

        <div className='text-stone-200 text-center pt-2'>The before and the after of onboarding</div>

        <div className='text-stone-100'>This project was a really iterative process. I started with barebone wireframes of what the main screen of this app may look like</div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
       
        <div className=''>
        <Image
              src="/barebone.png"
              width={500}
              height={500}
              alt="iphone mockup of front page"
            />
        </div>


        <div className='sm:p-0 md:pl-6'>
        <Image
              src="/barebone1.png"
              width={500}
              height={500}
              alt="iphone mockup of front page"
            />
        </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>

            <div className=''>

            <div className='text-stone-200 text-center pt-8 pb-2'>I also did an exploration on what I wanted the product and event cards to look like.</div>

            <div className='flex justify-center'>
            <Image
                src="/exploration1.png"
                width={400}
                height={500}
                alt="iphone mockup of front page"
                />

            </div>

            </div>

        <div className=''>



        <div className='pt-8 text-stone-200 text-center pb-2'>Then again, made more low-fidelity screens for other sections of the app.</div>
        <div className='flex justify-center'>
        <Image
              src="/exploration2.png"
              width={500}
              height={500}
              alt="iphone mockup of front page"
            />

        </div>
            </div>
        </div>
        

        <div className='text-stone-200 pt-4 pb-4'>{"At this stage, I wanted to make sure my designs were intuitive for my prospective users. I conducted usability testing through the pen and paper method, where I asked 2 people to go through a printed version of my low fidelity screens, and gauged their experiences with the app's anticipated interactions. "}</div>
        
        <div className='bg-stone-800 rounded-xl'>
            <div className='text-stone-200 p-4'>Findings</div>
        </div>
        
    </div>

</div>
  )
}

export default Design