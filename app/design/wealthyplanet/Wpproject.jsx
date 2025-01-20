import React from 'react'
import Image from 'next/image'
import MockupCarousel from './MockupCarousel';
import { useState } from "react";


const Wpproject = () => {
  return (
    <div className='text-stone-800'>
      <section className='text-3xl font-semibold pt-24 md:pt-12 p-4 border-b-2'>{"Redesigning WealthyPlanet's Website"}</section>

      <section className='pt-8 pb-8 p-4'> 
        <div className='text-l text-stone-800'>{"WealthyPlanet’s website struggled to connect with its core audience—middle-aged parents aiming to secure their financial future. Users found the platform confusing, lacked trust in its tools, and were overwhelmed by financial jargon, which hindered engagement."}</div>
        <div className='text-l text-stone-800 pt-2'>{"I led the end-to-end redesign of the website, creating a user-friendly, intuitive platform. After the redesign, users reported higher confidence in navigating their financial planning journey, leading to increased sign-ups and greater trust in WealthyPlanet's services."}</div>
      </section>

      <section className='p-4 pb-8 border-b-2'>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

          <div className='border-r-2 md:border-none'>
            <div className='text-xl font-semibold pb-2'>Role</div>
            <div className='text-l'>{"UX and UI Designer,"}</div>
            <div className='text-l'>{"Worked with developers and leadership."}</div>

          </div>

          <div className=''>
            <div className='text-xl font-semibold pb-2'>Timeline</div>
            <div className='text-l'>{"September - December 2024"}</div>

          </div>

          <div className='border-r-2 md:border-none pt-4 md:pt-0'>
            <div className='text-xl font-semibold pb-2'>Tasks</div>
            <div className='text-l'>{"Product design, Usability testing, Storytelling, User research, XF collaboration"}</div>


          </div>

          <div className='pt-4 md:pt-0'>
            <div className='text-xl font-semibold pb-2'>Tools</div>
            <div className='text-l'>{"Figma, Figjam"}</div>

          </div>

        </div>

</section>



      <section  className=''>
      <Image
                src="/wpcoverpic.png" // The path to your image
                alt="wealthyplanet landing page before vs after"
                layout="fit" // This makes the image fill the container
                objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                className="" // Ensures the image has rounded corners like the container
                height={1500}
                width={9000}
            />

</section>

<section className='bg-stone-100 border-l-4 slate-200 p-4'>
    
    <div className='grid grid-cols-1 md:grid-cols-2'>
    <div className="text-xl font-semibold text-stone-800 text-left">
  The Problem
</div>

        <div className='text-l text-stone-800'>{"WealthyPlanet's website needed a redesign"} <strong>{"to resonate with its core audience"}</strong> {"—middle-aged adults with young children who prioritize securing their retirement. The existing"} <strong>{"website lacked clarity, engaging content, and essential functionality"}</strong>{", such as interactive financial tools and user-friendly navigation. This made it challenging for users to trust the platform, explore its offerings, and engage with its financial planning tools effectively."}</div>


    </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
         
          <div className="">
            <div className='text-xl font-semibold text-stone-800'>My Role</div>
              <div className='text-l text-stone-800'>As the <strong>{"lead product designer"}</strong>{", I was responsible for the"} <strong>{"end-to-end design process"}</strong>, {"including user research, wireframing, prototyping, and collaborating with developers for implementation."}</div>
          </div>

          <div className="">
            <div className='text-xl font-semibold text-stone-800'>The Goal</div>
            <div className='text-l text-stone-800'>{"To create a"} <strong>{"user-centric, intuitive website"}</strong> {"that helps families easily navigate their financial planning journey, instilling confidence and trust in WealthyPlanet's services."}</div>
          </div>
        </div>

      </section>
      
      <section className='w-auto h-auto flex justify-center'>
      <Image
                src="/wpcover.png" // The path to your image
                alt="wealthyplanet landing page before vs after"
                layout="fit" // This makes the image fill the container
                objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                className="rounded-lg" // Ensures the image has rounded corners like the container
                height={900}
                width={900}
            />
      </section>


      <section className='p-4 understanding users'>
        <div className='text-xl font-semibold text-stone-800'>{"Research & Understanding the Users"}</div>
          <div className='text-l text-stone-800'>{"To ensure the redesign was user-focused, I identified a"} <strong>core persona</strong> {"that represented the target audience:"}</div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-4'>
          <div className=''>

            <div className='text-l font-semibold text-stone-800'>Process</div>
            <div className='text-l text-stone-800'>
              <ul className='pt-2'>{"∙ Analyzed market research provided by WealthyPlanet, which detailed Canadians' top financial worries, including retirement savings, debt management, and education costs."}</ul>
              <ul className='pt-2'>{"∙ Mapped out the end-to-end user journey, identifying friction points such as overwhelming interfaces, confusing terminology, and unclear next steps on previous website."}</ul>
              <ul className='pt-2'>{"∙ Conducted competitive analysis to understand industry best practices and how competitors address similar user needs."}</ul>
            </div>

          </div>

          <div className=''>
          <div className='text-l font-semibold '>Insights</div>
            <div className='text-l text-stone-800'>
              <ul className='pt-2'>{"∙ Canadians often feel stressed and unprepared for financial planning, with many struggling to prioritize their goals. For employers, employee retention is a big challenge due to worries of job instability or low pay."}</ul>
              <ul className='pt-2'>{"∙ Simplified language and tools were critical to reducing intimidation and building user trust."}</ul>
              <ul className='pt-2'>{"∙ Users valued visual and interactive tools over text-heavy explanations to better understand their financial progress and options."}</ul>
            </div>          
          </div>
        </div>
      </section>

      <section className="w-auto h-auto flex justify-center pt-8 pb-8">
        <Image
          src="/wppersona.png" // The path to your image
          alt="wealthyplanet user persona"
          layout="intrinsic" // Use intrinsic to size the image based on the provided height and width
          className="rounded-lg" // Ensures the image has rounded corners like the container
          height={700}
          width={700}
        />
      </section>

      <section className='p-4 bg-stone-50 border-l-4 pt-8 pb-8'>
        <div className='text-xl font-semibold'>The Challenge</div>
        <div className='text-l italic font-thin pt-2'>{"How might we design a website that simplifies financial planning and builds trust with middle-aged parents seeking financial security for their family’s future?"}</div>
      </section>

    <section className='p-4'>
      <div className='text-xl font-semibold'>{"Design Process"}</div>
      <div className='text-l font-semibold italic'>Ideation</div>
       
       <section>
          <div className="w-auto h-auto flex justify-center pt-8 pb-2">
            <Image
              src="/wpinitial1.png" // The path to your image
              alt="wealthyplanet user persona"
              layout="intrinsic" // Use intrinsic to size the image based on the provided height and width
              className="rounded-lg" // Ensures the image has rounded corners like the container
              height={700}
              width={700}
            />
          </div>
          <div className='text-l text-stone-800 flex justify-center md:px-4'>{"Initial thoughts on how to design the landing page, experimenting with color, type, light/dark mode, low and medium fidelity prototypes"} </div>



          <div className="w-auto h-auto flex justify-center pt-8 pb-2">
            <Image
              src="/wpinitial2.png" // The path to your image
              alt="wealthyplanet user persona"
              layout="intrinsic" // Use intrinsic to size the image based on the provided height and width
              className="rounded-lg" // Ensures the image has rounded corners like the container
              height={700}
              width={700}
            />
          </div>
          <div className='text-l text-stone-800 flex justify-center'>{"Looking into competitor sites, viewing examples of other landing pages I thought had good design "}</div>



          <div className="w-auto h-auto flex justify-center pt-8 pb-2">
            <Image
              src="/wpuserjourney.png" // The path to your image
              alt="wealthyplanet user persona"
              layout="intrinsic" // Use intrinsic to size the image based on the provided height and width
              className="rounded-lg" // Ensures the image has rounded corners like the container
              height={700}
              width={700}
            />
          </div>
          <div className='text-l text-stone-800 flex justify-center'>{"Initial Journey map for the user going through the landing page"} </div>
      </section>

      <section className='pt-8'>
        <div className='text-l font-semibold italic'>Usability Testing</div>
        <div className='text-l pt-1 pb-4'>{"Based on some"} <strong>medium fidelity prototypes</strong>{", I conducted usability testing among 7 stakeholders to better understand what I can improve on my designs."}</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  <div id="first-midfed" className="flex justify-center">
    <Image
      src="/wpmidfed1.png" // The path to your image
      alt="wealthyplanet user persona"
      layout="intrinsic" // Use intrinsic to size the image based on its natural dimensions
      className="rounded-lg" // Ensures the image has rounded corners like the container
      height={300} // Fixed height for the first image (will scale based on intrinsic layout)
      width={300} // Fixed width for the first image (will scale based on intrinsic layout)
    />
  </div>

  <div id="second-midfed" className="flex justify-center">
    <Image
      src="/wpmidfed2.png" // The path to your image
      alt="wealthyplanet user persona"
      layout="intrinsic" // Ensures the image scales according to its natural aspect ratio
      className="rounded-lg object-contain" // Ensures the image scales and maintains aspect ratio
      height={300} // Height for the second image, it will respect the intrinsic aspect ratio
      width={300} // Width for the second image, it will respect the intrinsic aspect ratio
    />
  </div>

</div>



        <div className='pt-8 pb-2'>Key Feedback from Stakeholders</div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-pink-100 p-4 rounded-md'>

              <p>{"Knowing how the steps work should be expanded out, embedding chatbot onto the site"}</p>

            </div>

            <div className='bg-pink-100 p-4 rounded-md'>
              <p>{"Matching the brand colors and colors of the app - needed to create and implement a design system."}</p>

            </div>

            <div className='bg-pink-100 p-4 rounded-md'>
              {"Using language to convey information to B2B2C stakeholders."}
            </div>
        </div>
      </section>

    
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 pt-8'>
        <div className='italic font-semibold text-l'>Final Design</div>
        
        <div className='pt-2 pb-8'>{"Here is a snippet of some design highlights from the landing page."}</div>

      </div>

      <div id="first-final" className="flex justify-center">
        <Image
          src="/wpfinal1.png" // The path to your image
          alt="wealthyplanet user persona"
          layout="intrinsic" // Ensures the image scales according to its natural aspect ratio
          className="rounded-lg object-contain" // Ensures the image scales and maintains aspect ratio
          height={900} // Height for the second image, it will respect the intrinsic aspect ratio
          width={900} // Width for the second image, it will respect the intrinsic aspect ratio
        />
      </div>

      <div id="second-final" className="flex justify-center">
        <Image
          src="/wpfinal2.png" // The path to your image
          alt="wealthyplanet user persona"
          layout="intrinsic" // Ensures the image scales according to its natural aspect ratio
          className="rounded-lg object-contain" // Ensures the image scales and maintains aspect ratio
          height={900} // Height for the second image, it will respect the intrinsic aspect ratio
          width={900} // Width for the second image, it will respect the intrinsic aspect ratio
        />
      </div>

      <div id="first-final" className="flex justify-center">
        <Image
          src="/wpfinal3.png" // The path to your image
          alt="wealthyplanet user persona"
          layout="intrinsic" // Ensures the image scales according to its natural aspect ratio
          className="rounded-lg object-contain" // Ensures the image scales and maintains aspect ratio
          height={900} // Height for the second image, it will respect the intrinsic aspect ratio
          width={900} // Width for the second image, it will respect the intrinsic aspect ratio
        />
      </div>

      <div className='pt-8 pb-2'>{"Key Design Changes"}</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

            <div className='bg-pink-100 p-4 rounded-md'>
              {"Human centered design. Ensured all elements of the website was accessible, used simple language and was easy to navigate."}

            </div>

            <div className='bg-pink-100 p-4 rounded-md'>
              {"Established a robust and scalable design system, and ensured the website redesign was consistent with existing design of the app."}

            </div>

            <div className='bg-pink-100 p-4 rounded-md'>
                {"Addition of more pages, such as About, Contact, Product and more."}
            </div>
        </div>
    </section>

    <section id="collaboration" className='pt-8'>
      <div className='text-xl text-stone-800 font-semibold pb-2'>
        Collaboration and Implementation
      </div>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

            <div className='bg-pink-100 p-4 rounded-md'>
              <div className='text-l font-semibold'>Stakeholders</div>
              {"Worked closely with leadership to ensure alignment with brand identity and user needs."}

            </div>

            <div className='bg-pink-100 p-4 rounded-md'>
              <div className='text-l font-semibold'>Developers</div>
              {"Partnered with 8 developers to implement a responsive design using modern web technologies."}

            </div>

            <div className='bg-pink-100 p-4 rounded-md'>
              <div className='text-l font-semibold'>Launch</div>
              {"Conducted a smooth handoff by providing detailed documentation and assets."}

            </div>
        </div>
    </section>

    </section>


    <section id="Results" className='pt-8 bg-stone-100 p-4 border-l-4'>

    <div className='text-xl text-stone-800 font-semibold pb-2'>
        Results
      </div>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

        <div className='bg-white p-4 rounded-md'>
          <div className='text-l font-semibold'>Engagement</div>
          {"Increased user sign-ups by"} <strong>270%</strong> {"in the first month post-launch."}

        </div>

        <div className='bg-white p-4 rounded-md'>
          <div className='text-l font-semibold'>Trust</div>
          {"Received positive feedback on usability and approachability in follow-up surveys."}

        </div>

        <div className='bg-white p-4 rounded-md'>
          <div className='text-l font-semibold'>Retention</div>
          {"Users reported spending"} <strong>20%</strong> {"more time on the website due to engaging tools and visuals."}

        </div>
        </div>



    </section>

    <section className='pt-8 p-4'>
      <div className='text-xl text-stone-800 font-semibold'>Conclusion and Learnings </div>

      <div className='pt-2'>{"Re-designing WealthyPlanet’s website was more than a design project—it was about creating a tool that empowers families to take control of their financial future. By focusing on the needs of Sarah and others like her, the redesign fostered trust, engagement, and meaningful action, ultimately bringing WealthyPlanet closer to its mission of helping families achieve financial wellness."}</div>

      <p className='font-semibold pt-4'>{"Empathy Drives Design Decisions"}      </p>
      <p>{"Understanding Sarah’s frustrations with financial jargon and her need for clarity highlighted the importance of designing for empathy. It taught me that truly user-centric designs start with a deep understanding of the user’s daily struggles and motivations."}</p>
    
      <p className='font-semibold pt-4'>{"The Power of Visual Storytelling"}      </p>
      <p>{"Warm colors, friendly images, and relatable copy reduced users' intimidation, showing me how design aesthetics and tone can significantly influence user trust and comfort."}</p>

      <p className='font-semibold pt-4'>{"User Feedback as a Compass"}      </p>
      <p>{"Usability testing revealed insights that weren't initially obvious, such as the strong preference for a step-by-step guide and a financial tracker. Iterative testing reinforced the need to remain agile and responsive to user feedback."}</p>
    
    </section>





    </div>
  )
}

export default Wpproject