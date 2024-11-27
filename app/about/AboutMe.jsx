'use client';
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';


import ScrollingBanner from '../components/scrolls/Headingscroll';



const AboutMe = () => {
  return (
    <div className='container mx-auto'>
    

    <div className='text-stone-700 font-semibold text-4xl md:text-6xl p-4 pt-16 md:pt-4 border-b-2 border-pink-200'>
     {"About Vidhi"}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 pb-8">

    {/* Text Section */}
    <div className="flex flex-col justify-center items-center text-left">
        <div className="text-l p-4 text-stone-700">
        {"Hello! I'm Vidhi, a passionate product designer currently studying "}
        <strong>Systems Design Engineering at the University of Waterloo.</strong>
        {" My approach to design is deeply rooted in "}
        <strong>empathy</strong>
        {", as I believe in creating products that not only look good but also cater to the diverse needs of users. My dedication to "}
        <strong>accessibility</strong>
        {" drives me to design inclusive solutions that empower everyone to engage with technology effortlessly."}
        </div>
        <div className="text-l p-4 text-stone-700">
        {"Outside of design, you'll often find me immersed in my hobbies, whether I'm crocheting intricate patterns, or delving into a captivating book. I thrive on the intersection of creativity and problem-solving, and I'm excited to continue shaping meaningful experiences through design."}
        </div>
    </div>

    {/* Image Section */}
    <div className="flex items-center justify-center rounded-lg p-4 border-3 border-pink-100">
        <Image
        src="/vidhigokani.png" // The path to your image
        alt="Descriptive text for the image"
        layout="fit" // This makes the image fill the container
        objectFit="cover" // This makes the image cover the available space, you can adjust as needed
        className="rounded-lg" // Ensures the image has rounded corners like the container
        height={400}
        width={400}
        />
    </div>

</div>

    <section className='bg-pink-100 rounded-xl pb-8'>

    <div className='pt-8 pb-2 text-2xl text-stone-700 flex justify-center font-semibold'>{"My Design Philosophy"}</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div class="bg-stone-50 rounded-lg flex justify-center flex-col p-4">
            
            <div className='text-stone-700 text-xl flex justify-center pb-4 font-semibold'>{"Accessibility"}</div>
            <div className='text-stone-600 text-l flex justify-center'>{"I believe design is for everyone. It's about breaking down barriers and creating experiences that are open and usable for people with all abilities. My approach prioritizes accessibility from the ground up, ensuring that each product I design can be easily navigated and enjoyed by as wide an audience as possible."}</div>
            
        </div>

        <div class="bg-stone-50 rounded-lg flex justify-center flex-col p-4">
            
            <div className='text-stone-700 text-xl flex justify-center pb-4 font-semibold'>{"Problem Passionate"}</div>
            <div className='text-stone-600 text-l flex justify-center'>{"My drive comes from tackling challenges head-on. I'm passionate about diving deep into problems, understanding their roots, and crafting innovative solutions. The thrill of turning complex issues into seamless experiences fuels my design process, pushing me to think creatively and empathetically."}</div>
            
        </div>

        <div class="bg-stone-50 rounded-lg flex justify-center flex-col p-4">
            
            <div className='text-stone-700 text-xl flex justify-center pb-4 font-semibold'>{"Simplicity"}</div>
            <div className='text-stone-600 text-l flex justify-center'>{"My design philosophy revolves around stripping away the unnecessary, focusing on what truly matters. By championing simplicity, I aim to deliver designs that are not only elegant but also remarkably user-friendly, making every interaction straightforward and enjoyable."}</div>
            
        </div>

    </div>
    </section>


    </div>

  )
}

export default AboutMe