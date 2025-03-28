import React from 'react'
import Image from 'next/image'

const Design = () => {
  return (
    <div>

<div className='container mx-auto w-11/12'>

        <div className='text-3xl text-stone-700 pt-32'>{"Design"}</div>
        <div className='text-l text-stone-600'>{"Rationale behind the designs"}</div>

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
        <div className='text-stone-700 text-center'>{"I created a flowchart to plan out the vision for this app. This was based on all the research that was done, and this flowchart is a very basic outline of the features. "}</div>
        </div>
        </div>

        <div className='text-stone-700 text-xl pt-8 pb-4'>{"Onboarding"}</div>
        <div className='text-stone-600'>{"I stuck to a 3 screen process for onboarding. The onboarding process of any app can make or break whether users will actually use the app or not. Users have limited time which they are ready to devote to learning how the product works before starting to actually interact with it, and I wanted to keep the onboarding short and simple. It should concisely let users know who should use this app, how it will be helpful, and how to use it. I made a short 3 screen onboarding, to support higher engagement, and a lower time to value rate. "}</div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div className='pt-4'>

            <Image
              src="/onboarding1.png"
              width={1000}
              height={500}
              alt="iphone mockup of front page"
            />
            </div>


            <Image
              src="/Onboarding.png"
              width={1000}
              height={500}
              alt="iphone mockup of front page"
            />
        </div>

        <div className='text-stone-700 text-center pt-2 pb-4'>{"The before and the after of onboarding"}</div>

        <div className='text-stone-700 pb-2'>{"This project was a really iterative process. I started with barebone wireframes of what the main screen of this app may look like"}</div>

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

            <div className='text-stone-700 text-center pt-8 pb-2'>{"I also did an exploration on what I wanted the product and event cards to look like."}</div>

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



        <div className='pt-8 text-stone-700 text-center pb-2'>{"Then again, made more low-fidelity screens for other sections of the app."}</div>
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
        

        <div className='text-stone-700 pt-4 pb-4'>{"At this stage, I wanted to make sure my designs were intuitive for my prospective users. I conducted usability testing through the pen and paper method, where I asked 2 people to go through a printed version of my low fidelity screens, and gauged their experiences with the app's anticipated interactions. "}</div>
        
        <div className='bg-purple-50 rounded-xl'>
            <div className='text-stone-700 p-4 text-xl'>{"Findings"}</div>
            <div className='text-stone-600 px-4'>{"Based on the usability testing, the app was simple enough to navigate. There were a couple points that came up on improving the UI aspect of the app. "}</div>

            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className='p-4 text-stone-600'>
                    <div className='font-bold'>{"Product Cards have too much information"}</div>
                    <div className='pt-2'>{"Too much information at once can be distracting for the user, and lead to them not using the app to the fullest. I realized I needed to continue exploring options for the product cards to pick something that gets the point across."}</div>
                </div>

                <div className='p-4 text-stone-600'>
                <div className='font-bold'>{"Essentials buttons at the top can be smaller"}                </div>

                    <div className='pt-2'>{"The users did not see a need for these buttons, especially if there are similar buttons in the bottom navigation. I decided I can try redesigning them, or take them out of the app. "}</div>
                </div>

            </div>
        </div>

        <div className='text-stone-700 text-center pt-4 pb-4'>{"Following these findings, I continued to make a first iteration of designs for the app."}</div>
        <div className='flex justify-center'>
        <Image
              src="/exploration3.png"
              width={1000}
              height={500}
              alt="iphone mockup of front page"
            />


        </div>

        <div className='text-stone-700 pt-4 text-center'>{"I was still not satisfied with these designs. I made a second iteration instead."}</div>
        <div className='flex justify-center pt-4 pb-4'>
        <Image
              src="/exploration4.png"
              width={1000}
              height={500}
              alt="iphone mockup of front page"
            />


        </div>

        <div className='text-stone-700 pt-4 text-center'>{"Finally, I made my final iteration of the app design."}</div>
        <div className='flex justify-center pt-4 pb-4'>
        <Image
              src="/trace.png"
              width={900}
              height={500}
              alt="final design screens"
            />


        </div>

    </div>

</div>
  )
}

export default Design