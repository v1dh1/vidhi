import React from 'react'
import Image from 'next/image'

const Wtwo = () => {
  return (
    <div>

        <div className='p-4 md:p-16'>
            <div className='text-stone-900 text-5xl font-semibold pb-8'>Overview</div>
            <div className=' text-stone-900 text-l bg-babytaupe rounded-lg p-4'>In Fall 2024, I joined WealthyPlanet, an early-stage fintech startup as their sole designer</div>


            <div className='md:grid grid-cols-2 gap-4 pt-16 pb-8'>
                <div className='text-left align-middle text-3xl font-semibold text-stone-900'>Context</div>

                <div className='pt-4 md:pt-none'>
                        <div className='text-left text-l text-stone-600'>{"When I first joined WealthyPlanet, I had no clue on what to expect. This was the first time I would be a designer with no one else guiding me! I worked on a small team with developers as we all worked together on the same mission, to grow the company. "}</div>
                        <div className='text-left text-l text-stone-600 pt-2'>{"I arrived to a backlog of design work to be done, with existing files being poorly documented and a non-existent design system. I led the end-to-end redesign of the website, creating a user-friendly, intuitive platform. After the redesign, users reported higher confidence in navigating their financial planning journey, leading to increased sign-ups and greater trust in WealthyPlanet's services."}</div>

                </div>
            </div>

            <img 
  src="/wpcover.png" 
  alt="Descriptive text for the image" 
  className="rounded-lg mx-auto object-cover w-[1000px] h-[700px]" 
/>



            <section className='pt-24'>
                <div className='text-3xl font-semibold text-stone-900 pb-4'>Understanding the space</div>
                
                <div className='md:grid grid-cols-4 pt-16'>
  
                    {/* First Column (3/4 of the space) */}
                    <div className='col-span-3 md:pr-24'>
                        <div className='bg-babytaupe p-4 rounded-lg'>
                        <div className="flex text-l pt-2 text-stone-900">
                            <span>WealthyPlanet had a</span>
                            <span className="italic text-pink-500 px-2 font-semibold">{"relatability problem."}</span>
                        </div>
                        <div className='text-stone-900'>
                            {"The existing website lacked clarity, engaging content, and essential functionality."}
                        </div>
                        </div>

                        <div className='pt-8 text-stone-600'>
                        {"WealthyPlanet struggled to attract investors and clients after pivoting to an AI-powered financial planning product. Their website lacked clarity, engaging content, and interactive tools, making it hard for their core audience—middle-aged parents focused on retirement—to trust and engage with the platform."}
                        </div>
                    </div>

                    {/* Second Column (1/4 of the space) */}
                    <div className='col-span-1 pt-4 md:pt-0'>
                        <div className='text-stone-900 font-semibold pb-4'>{"Issues:"}</div>

                        <div className='border-2 border-babytaupe rounded-xl mb-4'>
                            <div className='p-2 text-stone-600'>📉 Low User Conversion</div>
                        </div>

                        <div className='border-2 border-babytaupe rounded-xl mb-4'>
                            <div className='p-2 text-stone-600'>🕰️ Outdated Design</div>
                        </div>

                        <div className='border-2 border-babytaupe rounded-xl'>
                            <div className='p-2 text-stone-600'>🚫 Business Goals not Being Met</div>
                        </div>


                        
                    </div>
</div>



            </section>

            <section className='pt-24'>
                <div className='text-3xl font-semibold text-stone-900 pb-4'>Competitive Analysis </div>
                
                <div className='pt-16'>
                    <div className='bg-babytaupe p-4 rounded-l text-stone-900'>{"I looked into research provided by WealthyPlanet to understand the problem to a deeper level. This made me realize this problem is bigger than anticipated, and how important user-centered design would be to help solve this problem."}</div>
                </div>
                <div className='md:grid grid-cols-3 gap-16 pt-16'>

                    <div id= "row1" className="">

                        <div className='border-2 border-babytaupe rounded-xl p-2 text-stone-700'>
                            <div className='text-2xl font-bold text-stone-700'>{"48%"}</div>
                            <div className='text-l text-stone-700 pt-4'>{"Of employees say they’ve lost sleep because of financial worries"}</div>
                        </div>


                    </div>

                    <div id = "row2" className='pt-8 md:pt-0'>
                        <div className='border-2 border-babytaupe rounded-xl p-2 text-stone-700'>
                            <div className='text-l text-stone-700'>{"Due to financial stress, employees are"}</div>
                            <div className='text-2xl font-bold text-stone-700 pt-4'>{"2X"}</div>
                            <div className='text-l text-stone-700 pt-4'>{"as likely to report poor overall health"}</div>
                        </div>

                    </div>

                    <div id = "row3" className='pt-8 md:pt-0'>

                    <div className='border-2 border-babytaupe rounded-xl p-2 text-stone-700'>
                            <div className='text-2xl font-bold text-stone-700 '>{"82%"}</div>
                            <div className='text-l text-stone-700 pt-4'>{"Of employees worry about money in the workplace"}</div>
                        </div>

                    </div>

                </div>

                <div className='text-md text-stone-600'>{"Source: Government of Canada"}</div>
            </section>

            

            <div className='pt-24'></div>
            <div className='text-3xl font-semibold text-stone-900 pb-16'>HMW Statement</div>
            <div className='text-xl text-stone-600 italic text-left border-l-4 pl-2 border-pink-500'>{"How might we design a website that simplifies financial planning and builds trust with middle-aged parents seeking financial security for their family’s future?"}</div>



        </div>

    </div>
  )
}

export default Wtwo

