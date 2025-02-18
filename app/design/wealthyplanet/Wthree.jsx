import React from 'react'
import Image from 'next/image'

const Wthree = () => {
  return (
    <div>

<div>

    

<div className='p-4 md:p-16'>
    <div className='text-stone-900 text-5xl font-semibold pb-8'>Defining the Solution</div>

    <section className='pt-24'>
                    <div className='text-3xl font-semibold text-stone-900'>Site Audit </div>
                    
                    <div className='pt-16'>
                        <div className='bg-babytaupe p-4 rounded-l text-stone-900'>{"To understand the problem to a deeper level, I conducted a site audit of the old website to highlight areas that needed to be fixed."}</div>
                    </div>
                    <div className='md:grid grid-cols-3 gap-8 pt-16'>
    
                        <div id= "row1" className="">
    
                            <div className='border-2 border-babytaupe rounded-xl p-2 text-stone-700'>
                                {"🚩 Inconsistent spacing, fonts, and colours"}
                            </div>
                            
                            <Image
                                src="/wp1.png" // The path to your image
                                alt="Descriptive text for the image"
                                layout="fit" // This makes the image fill the container
                                objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                className="rounded-lg mx-auto pt-8" // Ensures the image has rounded corners like the container
                                height={900}
                                width={900}
                                />
    
                        </div>
    
                        <div id = "row2" className=''>
                            <div className='border-2 border-babytaupe rounded-xl p-2 text-stone-700'>
                                {"🚩 Does not explain what the company/product is on landing page"}
                            </div>
    
                            <Image
                                src="/wp2.png" // The path to your image
                                alt="Descriptive text for the image"
                                layout="fit" // This makes the image fill the container
                                objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                className="rounded-lg mx-auto pt-8" // Ensures the image has rounded corners like the container
                                height={900}
                                width={900}
                                />
    
                        </div>
    
                        <div id = "row3" className='pt-8 md:pt-0'>
    
                        <div className='border-2 border-babytaupe rounded-xl p-2 text-stone-700 '>
                                {"🚩 Usability Issues and Poor Navigation"}
                            </div>
    
                            <div className='pt-8 text-stone-700'>
                                {"Old site had buttons that lead to no where -> does not establish trust with site visitors."}                        
                                </div>
                            
                            <div className='pt-4 text-stone-700'>
                            {"Old site had a broken site for it’s mobile view"}
    
                            </div>
    
                        </div>
    
                    </div>
                </section>

        <section className='pt-16'>
            <div className='md:grid grid-cols-2 gap-16'>

                <div className=''>
                <div className='text-3xl font-semibold text-stone-900'>
                    {"Mapping a User's Journey Through the Site"}
                </div>
                
                <div className='pt-16'></div>
                <div className='p-4 text-stone-900 rounded-xl bg-babytaupe'>{"From the site audit, and market research, I knew the most important things to focus on were usability, engagement and trust."}</div>
                </div>

                <div className=''>

                <Image
                                src="/wpuserjourney.png" // The path to your image
                                alt="Descriptive text for the image"
                                layout="fit" // This makes the image fill the container
                                objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                className="rounded-lg mx-auto pt-8" // Ensures the image has rounded corners like the container
                                height={700}
                                width={700}
                                />



                </div>
            </div>
        </section>

        <div className='md:grid grid-cols-3'>

            <div>
                <div className='text-3xl text-stone-700'>I started off by creating a design system</div>
            </div>
            <div>
                <div className='text-l text-stone-600'>
                <div className=''>Before getting started on any tasks, I audited the existing WP Figma to see what was there. There were some design files, but no concrete design system to work out from. So, I set up the foundation for the rest of my term there. </div>
                <div className='pt-2'>I looked through old branding material the company had and turned HEX codes into Figma styles to be used, with slight tweaks. The team wanted to use Tailwind CSS as their primary form of styling. </div>

                </div>
            </div>
            <div></div>

        </div>
    </div>
    </div>
    </div>
  )
}

export default Wthree