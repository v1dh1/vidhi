import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from "next/link"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Wtwo = () => {
  return (
    <div>

{/*tldr section*/}
<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">

    <div className="pt-16 md:pt-32 font-semibold text-3xl text-stone-800">TLDR</div>
    <div className='text-stone-600 text-base pt-8'>{"Designed the primary acquisition and onboarding experience for an AI fintech during a critical pivot. Focused on trust, clarity, and guided activation and stronger early user engagement."}</div>

    <div className='flex flex-col md:flex-row pt-16 gap-8'>
        
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

<a
  href="#takeaways"
  className="rounded-lg bg-red-800 border-2 border-stone-300 text-stone-100 
             w-48 h-12 md:w-64 md:h-12 mt-16 mx-auto
             flex items-center justify-center shadow-lg"
>
  Skip to Takeaways
</a>



</div>

<div className='pt-16 md:pt-32'></div>

{/*overview section*/}


<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">
     <div className='text-stone-900 text-3xl font-semibold pb-8'>Overview</div>

     <div className='text-red-800 text-2xl pb-4'>Context</div>
     <div className='text-stone-700 text-base'>{"I joined WealthyPlanet as the sole designer during a critical pivot to an AI-powered financial planning product. I partnered directly with developers and leadership to define the website experience, create an onboarding flow, and improve user trust and conversion."}</div>
    <div className='text-stone-700 text-base pt-2'>{"I arrived to a backlog of design work to be done, with existing files being poorly documented and a non-existent design system. I led the end-to-end redesign of the website, creating a user-friendly, intuitive platform. After the redesign, users reported higher confidence in navigating their financial planning journey, leading to increased sign-ups and greater trust in WealthyPlanet's services."}</div>
</div>



<div className='w-full md:w-1/2 mx-auto pt-8 md:pt-16 p-8 md:p-0'>
    <img 
  src="/wpcover.png" 
  alt="A preview of the WealthyPlanet website redesign" 
  className="rounded-lg mx-auto object-cover w-[500px] h-[350px]" 
/>
<div className='text-center text-stone-600 pb-16'>{"A before and after of the WealthyPlanet website redesign"}</div>
</div>


{/*understanding the space section*/}

<div className='w-full md:w-1/2 mx-auto pt-8 md:pt-16 p-8 md:p-0'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* column 1 */}
        <div>

            <div className='text-red-800 text-2xl pb-4'>Understanding the Space</div>
            <div className='text-stone-700 text-base'>{"WealthyPlanet had a"} <span className='text-red-700 font-bold'>trustability</span> {"problem. The existing website lacked clarity, engaging content, and essential functionality."}</div>

        </div>

        {/* column 2 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-red-800 text-base pb-4 font-semibold'>Clarity</div>
            <div className='text-stone-700 text-base'>{"Users couldn’t quickly explain what the product does which translated to users were not converting; first impressions didn’t build confidence."}</div>
        </div>
        </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {/* column 1 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-red-800 text-base pb-4 font-semibold'>{"Engagement & Guidance Weakness"}</div>
            <div className='text-stone-700 text-base'>{"No structured pathway for users to take meaningful action, from landing → sign-up → onboarding. Users dropped off immediately after signing up; the platform wasn’t guiding them toward activation."}</div>
        </div>

        {/* column 2 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-red-800 text-base pb-4 font-semibold'>Trust Deficit</div>
            <div className='text-stone-700 text-base'>{"Early-stage fintechs are judged heavily by interface stability and transparency. Broken links, inconsistent UI, and missing social proof made the site feel untrustworthy."}</div>
        </div>
        </div>
    

</div>

{/*competitive analysis section*/}
<div className="w-full md:w-1/2 mx-auto pt-8 md:pt-24 p-8 md:p-0">

     <div className='text-red-800 text-2xl pb-4'>Competitive Analysis</div>
        <div className='text-stone-700 text-base'>{"Thorough competitive analysis was provided to me by WealthyPlanet, using which I further compiled my own research to understand how fintechs build credibility and simplify complex financial products. "}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">

            <div className='text-red-700 text-xl'>Insight</div>

            <div className='text-red-700 text-xl'>Design Implication</div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 items-center">

            <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                <div className='text-stone-700 text-base'>{"Competitors often lead with trust signals (stats, testimonials, data points) before features."}</div>
            </div>

            <div className='text-stone-700 text-base'>{"Make the core value and product purpose immediately understandable."}</div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 items-center">

            <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                <div className='text-stone-700 text-base'>{"Visual and textual consistency across web and mobile is key for credibility and ease of use."}</div>
            </div>

            <div className='text-stone-700 text-base'>{"Consistent UI, brand alignment, and subtle proof points to reduce anxiety."}</div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 items-center">

            <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>
                <div className='text-stone-700 text-base'>{"Progressive onboarding flows are critical to guide new users through first actions."}</div>
            </div>

            <div className='text-stone-700 text-base'>{"Design the first user journey from landing → sign-up → onboarding with minimal friction."}</div>
        </div>
    </div>

{/*hmw section*/}
<div className="w-full md:w-1/2 mx-auto pt-8 md:pt-24 p-8 md:p-0">
    <div className='text-red-800 text-2xl pb-4'>HMW Statement</div>

    <div className='text-stone-700 text-base font-semibold italic border-l-8 border-red-800 p-4'>{"How might we design a website that simplifies financial planning and builds trust with middle-aged parents seeking financial security for their family’s future?"}</div>
</div>





    </div>
  )
}

export default Wtwo

