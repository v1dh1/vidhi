import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"



const Wthree = () => {
  return (
    <div>

<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">

    <div className="pt-16 md:pt-32 font-semibold text-3xl text-stone-800">Defining the Solution</div>
    
    
    <div className='text-red-800 text-2xl pb-4 pt-8'>Site Audit</div>
     <div className='text-stone-700 text-base'>{"To understand the problem to a deeper level, I conducted a site audit of the old website to highlight areas that needed to be fixed."}</div>
     
     
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">

            <div className=''>

                <Image
                                    src="/wp2.png" // The path to your image
                                    alt="Descriptive text for the image"
                                    layout="fit" // This makes the image fill the container
                                    objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                    className="rounded-lg mx-auto pt-8 pb-4" // Ensures the image has rounded corners like the container
                                    height={900}
                                    width={900}
                                    />
                
                <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                    <div className='text-stone-700 text-base'>{"🚩 The landing page failed to explain the product clearly"}</div>
                </div>
            </div>

        <div className=''>

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

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">

            <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                    <div className='text-stone-700 text-base'>{"🚩 Inconsistent spacing, typography, and color usage created visual noise"}</div>
            </div>

            <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                    <div className='text-stone-700 text-base'>{"🚩 The mobile experience was partially broken"}</div>
            </div>

    </div>

    <div className='text-base text-red-700 font-semibold text-center pt-16 pb-16'>{"In a trust-sensitive space like fintech, these issues compounded quickly, users interpreted instability as risk."}</div>



</div>


<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">    
    
    <div className='text-red-800 text-2xl pb-4 pt-2'>Mapping the User Journey</div>

     <Image
                                    src="/wpuserjourney.png" // The path to your image
                                    alt="Descriptive text for the image"
                                    layout="fit" // This makes the image fill the container
                                    objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                    className="rounded-lg mx-auto" // Ensures the image has rounded corners like the container
                                    height={900}
                                    width={900}
                                    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">

        <div className='text-stone-700 text-base'>
            {"I mapped the end-to-end user journey to identify friction points across the experience"}
        </div>

        <div className='text-stone-700 text-base'>
            {"The website and onboarding were functioning as separate experiences but users perceived them as one continuous journey."}
        </div>

        <div className='text-stone-700 text-base'>
            {"Improving the website alone wasn’t enough; onboarding needed to reinforce the same trust and clarity."}
        </div>


    </div>
</div>

<div className='pt-16 md:pt-32'></div>

<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">    
    
    <div className='text-red-800 text-2xl pb-4 pt-2'>Low and Medium Fidelity Prototypes</div>
    <div className='text-stone-700 text-base'>{"Early prototypes focused on information hierarchy and content clarity rather than aesthetics."}</div>
     <Image
                                    src="/lowmid.png" // The path to your image
                                    alt="Descriptive text for the image"
                                    layout="fit" // This makes the image fill the container
                                    objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                    className="rounded-lg mx-auto pb-4 pt-8" // Ensures the image has rounded corners like the container
                                    height={900}
                                    width={900}
                                    />
      <Image
                                    src="/wpinitial2.png" // The path to your image
                                    alt="Descriptive text for the image"
                                    layout="fit" // This makes the image fill the container
                                    objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                    className="rounded-lg mx-auto" // Ensures the image has rounded corners like the container
                                    height={900}
                                    width={900}
                                    />


</div>


<div className='pt-16 md:pt-32'></div>

<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">    
    
    <div className='text-red-800 text-2xl pb-4 pt-2'>Designing the Onboarding Flow</div>
    <div className='text-stone-700 text-base pb-4'>{"Users who signed up often felt overwhelmed and unsure how to begin their financial planning journey."}</div>
    
        <Image
                                    src="/onboard1.png" // The path to your image
                                    alt="Descriptive text for the image"
                                    layout="fit" // This makes the image fill the container
                                    objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                    className="rounded-lg mx-auto" // Ensures the image has rounded corners like the container
                                    height={900}
                                    width={900}
                                    />

    <div className='text-red-600 text-xl pt-8'>Goal</div>
    <div className='text-stone-700 text-base pt-2'>{"Guide users toward their first meaningful action while reducing cognitive and emotional load."}</div>



    <div className='text-red-600 text-xl pt-8'>Key Design Decisions</div>

    <div className='text-stone-700 text-base pt-4 pb-2'>{"Progressive disclosure: Introduce information in manageable steps"}</div>
        <Image
                                    src="/wpgif1.gif" // The path to your image
                                    alt="Descriptive text for the image"
                                    layout="fit" // This makes the image fill the container
                                    objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                    className="rounded-lg mx-auto" // Ensures the image has rounded corners like the container
                                    height={900}
                                    width={900}
                                    />

        <div className='text-stone-700 text-base pt-8 pb-2'>{"Guided explanations: Clearly explain how the product works before requesting inputs"}</div>
        <Image
                                    src="/wpgif2.gif" // The path to your image
                                    alt="Descriptive text for the image"
                                    layout="fit" // This makes the image fill the container
                                    objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                    className="rounded-lg mx-auto" // Ensures the image has rounded corners like the container
                                    height={900}
                                    width={900}
                                    />


        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-8'>

            <div className='text-red-600 text-xl'>
                Tradeoffs Considered
            </div>

            <div className='space-y-4'>
                
                <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                        <div className='text-stone-700 text-base font-semibold'>{"Speed vs. Confidence"}</div>
                        <div className='text-stone-700 text-base pt-2'>{"I chose a slightly longer onboarding flow to ensure users understood how the product worked before taking action, prioritizing trust over raw speed."}</div>
                </div>

                <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                        <div className='text-stone-700 text-base font-semibold'>{"Personalization vs. Cognitive Load"}</div>
                        <div className='text-stone-700 text-base pt-2'>{"Rather than collecting detailed financial information upfront, I deferred personalization to later steps to reduce early friction."}</div>
                </div>
            
            </div>   
            </div>    

        </div>

<div className='pt-16 md:pt-32'></div>

<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">    
    
    <div className='text-red-800 text-2xl pb-4 pt-2'>{"Validation & Iteration"}</div>
    <div className='text-stone-700 text-base'>{"To validate the onboarding and website experience, I conducted usability testing on mid-fidelity prototypes with a small set of target users. The goal was to ensure the experience felt clear, trustworthy, and guided, especially for users unfamiliar with financial planning tools."}</div>


        <div id="figma link" className='pt-6'>
            <div className='pt-6 text-stone-700 text-base font-semibold pb-4'>{"Iterations on the final design through each stage for the landing page. Take a look if curious :)"}</div>


                <div className='text-red-600 text-md'>{"Figma Link Loading! Might take a few seconds"}</div>

                <div className="h-screen w-full pt-8">
                <iframe
                src="https://embed.figma.com/design/rg2GXB0c4CLE37GFwnvAIL/WP-Design?node-id=132-2724&embed-host=sharee"
                frameBorder="0"
                className="w-full h-full"
                allowFullScreen
                ></iframe>
                </div>
                </div>


    <div className='text-red-600 text-xl pt-4'>{"Key Findings → Design Iteration"}s</div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-8'>

                
                <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                        <div className='text-stone-700 text-base font-semibold'>{"Users wanted clearer expectations before starting"}</div>
                        <div className='text-stone-700 text-base pt-2'>{"→ Expanded the “How It Works” explanation and set clearer expectations during onboarding"}</div>
                </div>

                <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                        <div className='text-stone-700 text-base font-semibold'>{"Trust cues were most effective when introduced early"}</div>
                        <div className='text-stone-700 text-base pt-2'>{"→ Moved statistics and credibility signals higher in the flow"}</div>
                </div>

                <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                        <div className='text-stone-700 text-base font-semibold'>{"Language needed to work for both individual users and B2B2C stakeholders"}</div>
                        <div className='text-stone-700 text-base pt-2'>{"→ Simplified copy and avoided internal or technical terminology"}</div>
                </div>
            
            </div>   
</div>


<div className='pt-16 md:pt-32'></div>

<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">    
    
    <div className='text-stone-800 font-semibold text-3xl pb-4 pt-2'>Final Design</div>
    
        <div className=''>
            <div className='text-stone-700 text-base pb-2'>{"In the final iterations, I focused on unifying the website and onboarding experience into one cohesive system."}</div>

            <div className='pt-6 text-stone-700 text-base font-semibold pb-4'>{"Refined the hero section to clearly communicate value within seconds"}</div>
            <Image
                                            src="/mainframewp.png" // The path to your image
                                            alt="Descriptive text for the image"
                                            layout="fit" // This makes the image fill the container
                                            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                            className="rounded-lg mx-auto" // Ensures the image has rounded corners like the container
                                            height={900}
                                            width={900}
                                        />
        </div>


        <div className='pt-6'>
            <div className='pt-6 text-stone-700 text-base font-semibold pb-4'>{"Simplified content hierarchy across key pages, following the format from the main page"}</div>
            <Image
                                            src="/wpgif3.gif" // The path to your image
                                            alt="Descriptive text for the image"
                                            layout="fit" // This makes the image fill the container
                                            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                                            className="rounded-lg mx-auto" // Ensures the image has rounded corners like the container
                                            height={900}
                                            width={900}
                                        />
        </div>



</div>


<div className='pt-16 md:pt-32'></div>

<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">    
    
    <div className='text-stone-800 font-semibold text-3xl pb-4 pt-2'>Results and Takeaways</div>
    
    <div className='flex flex-col md:flex-row pt-8 gap-8'>
        
        <div className='md:w-1/2'>
            <div className='text-base font-bold text-red-700'>
                <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-2xl font-bold inline-block"
                    >
                {"+ 62%"}
                </motion.span>
                </div>
            <div className='text-base text-stone-700'>{"Increased user sign-ups in the first month post-launch."}</div>
        </div>

        <div className='md:w-1/2'>
            <div className='text-2xl font-bold text-red-700'>
                <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-2xl font-bold inline-block"
                    >
                {"+ 20%"}</motion.span>
                
                </div>
            <div className='text-base text-stone-700'>{"Users time spent time on the website."}</div>
        </div>

    </div>

        <div className='flex flex-col md:flex-row pt-8 gap-8'>

            <div className='text-base text-stone-700'>{"Positive qualitative feedback highlighting clarity, approachability, and ease of use"}</div>
            <div className='text-base text-stone-700'>{"These outcomes confirmed that improving clarity, trust, and guided activation directly influenced conversion."}</div>
            
        </div>

        <div className='text-red-600 text-xl pt-8'>{"What This Project Taught Me"}</div>
        <div className='text-base text-stone-700 pt-2'>{"This project strengthened my ability to operate as a designer in ambiguity, balancing business goals, technical constraints, and user trust without relying on established systems."}</div>

        <div className='flex flex-col md:flex-row pt-8 gap-8 pb-32'>
            <div className='text-base text-stone-700'>{"Onboarding is a critical part of the product experience, not an afterthought"}</div>
            <div className='text-base text-stone-700'>{"How to design cohesive experiences that span multiple touchpoints (website + onboarding)."}</div>
            <div className='text-base text-stone-700'>{"Clear communication often matters more than feature depth"}</div>
        </div>




</div>




    </div>
  )
}

export default Wthree