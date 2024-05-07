import React from 'react'
import Image from 'next/image';


const AboutMe = () => {
  return (
    <div className='container mx-auto w-3/4'>

    <div className='text-fuchsia-100 font-sofia text-6xl flex justify-center pt-8'>
     About Me 
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">

        
        <div className=''>
        <div class="text-l p-4 text-stone-200">{"Hello! I'm Vidhi, a passionate product designer currently studying Systems Design Engineering at the University of Waterloo. My approach to design is deeply rooted in empathy, as I believe in creating products that not only look good but also cater to the diverse needs of users. My dedication to accessibility drives me to design inclusive solutions that empower everyone to engage with technology effortlessly. "}</div>
        <div className='text-l p-4 text-stone-200'>{"Outside of design, you'll often find me immersed in my hobbies, whether I'm crocheting intricate patterns, or delving into a captivating book. I thrive on the intersection of creativity and problem-solving, and I'm excited to continue shaping meaningful experiences through design."}</div>
    </div>

    <div className="flex items-center justify-center rounded-lg p-4">
            <Image
                src="/vidhigokani.png" // The path to your image
                alt="Descriptive text for the image"
                layout="fit" // This makes the image fill the container
                objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                className="rounded-lg" // Ensures the image has rounded corners like the container
                height={400}
                width={400}
            />
            {/* You can still place other content here, which will be positioned above the image due to the relative positioning of the container */}
            </div>
    
    
    </div>

    <div className='pt-8 pb-6 text-2xl text-stone-200 flex justify-center'>{"My Design Philosophy"}</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-stone-500 rounded-lg drop-shadow-lg bg-clip-padding backdrop-filter backdrop-blur-l bg-opacity-20 border-2 border-stone-600 flex justify-center flex-col p-4">
            
            <div className='text-stone-200 text-xl flex justify-center pb-4'>{"Accessibility"}</div>
            <div className='text-stone-300 text-l flex justify-center'>{"I believe design is for everyone. It's about breaking down barriers and creating experiences that are open and usable for people with all abilities. My approach prioritizes accessibility from the ground up, ensuring that each product I design can be easily navigated and enjoyed by as wide an audience as possible."}</div>
            
        </div>

        <div class="bg-stone-500 rounded-lg drop-shadow-lg bg-clip-padding backdrop-filter backdrop-blur-l bg-opacity-20 border-2 border-stone-600 flex justify-center flex-col p-4">
            
            <div className='text-stone-200 text-xl flex justify-center pb-4'>{"Problem Passionate"}</div>
            <div className='text-stone-300 text-l flex justify-center'>{"My drive comes from tackling challenges head-on. I'm passionate about diving deep into problems, understanding their roots, and crafting innovative solutions. The thrill of turning complex issues into seamless experiences fuels my design process, pushing me to think creatively and empathetically."}</div>
            
        </div>

        <div class="bg-stone-500 rounded-lg drop-shadow-lg bg-clip-padding backdrop-filter backdrop-blur-l bg-opacity-20 border-2 border-stone-600 flex justify-center flex-col p-4">
            
            <div className='text-stone-200 text-xl flex justify-center pb-4'>{"Simplicity"}</div>
            <div className='text-stone-300 text-l flex justify-center'>{"My design philosophy revolves around stripping away the unnecessary, focusing on what truly matters to create intuitive and meaningful products. By championing simplicity, I aim to deliver designs that are not only elegant but also remarkably user-friendly, making every interaction straightforward and enjoyable."}</div>
            
        </div>

    </div>



    <div className='text-xl text-stone-100 pt-20'>Life Snippets</div>
    <div className='text-stone-200'>⚠️ Coming Soon</div>
    </div>

  )
}

export default AboutMe