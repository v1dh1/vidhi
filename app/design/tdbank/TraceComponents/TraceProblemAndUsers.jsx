import React from 'react'
import Image from 'next/image'

const TraceProblemAndUsers = () => {
  return (
    <div>

<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">

    <div className="pt-16 md:pt-32 font-semibold text-3xl text-stone-800">Defining the Solution</div>
    <div className='text-stone-600 text-base pt-8 pb-8'>{"The experience needed to resonate with TD customers interested in rewards and local spending, non-TD users who could be converted through Trace, internal lines of business evaluating ROI, risk, and brand alignment"}</div>

    <div className='text-fuchsia-800 text-2xl pb-4'>Defining the MVP</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* column 1 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-fuchsia-800 text-base pb-4 font-semibold'>{"Included in MVP"}</div>
            <div className='text-stone-700 text-base'>
                <ul className="text-stone-700 text-base space-y-1">
                    <li>{"• Discover local and small businesses"}</li>
                    <li>{"• Earn and view rewards points"}</li>
                    <li>{"• Redeem rewards for cashback"}</li>
                    <li>{"• View basic spending insights"}</li>
                </ul>

            </div>
        </div>

        {/* column 2 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-fuchsia-800 text-base pb-4 font-semibold'>{"Deferred to Future State"}</div>
            <div className='text-stone-700 text-base'>
                <ul className="text-stone-700 text-base space-y-1">
                    <li>{"• Full open-banking account linking"}</li>
                    <li>{"• Advanced insights and analytics"}</li>
                    <li>{"• Expanded personalization"}</li>
                </ul>

            </div>
        </div>
        </div>

{/*entry point strategy*/}
    <div className='pt-16'>
        <div className='text-fuchsia-800 text-2xl pb-4'>Entry Point Strategy</div>
        <div className='text-stone-700 text-base'>{"A critical design challenge was deciding where Trace should live within TD’s mobile app."}</div>
        <div className='text-stone-700 text-base pt-2'>{"Because TD users typically open the app with a specific task in mind, introducing Trace required a balance between visibility and non-disruption."}</div>

        <Image
            src="/trace-process.png" // The path to your image
            alt="Descriptive text for the image"
            layout="fit" // This makes the image fill the container
            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
            className="rounded-lg mx-auto pt-8 pb-4" // Ensures the image has rounded corners like the container
            height={900}
            width={900}
            />

        <div className='text-stone-700 text-base text-center pt-4'>{"After exploring multiple entry-point concepts, two locations emerged as the most viable"}</div>

        <div className='text-fuchsia-900 text-lg font-semibold pt-8 pb-4'>{"Accounts Page (Just For You section)"}</div>
        <ul className='list-disc list-inside text-stone-700 text-base'>
            <li>{"Default landing view for most users"}</li>
            <li>{"High visibility without requiring active intent"}</li>
            <li>{"Opportunity to surface local businesses contextually"}</li>
        </ul>

        <Image
            src="/traceaccounts.png" // The path to your image
            alt="Descriptive text for the image"
            layout="fit" // This makes the image fill the container
            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
            className="rounded-lg mx-auto pt-8 pb-4" // Ensures the image has rounded corners like the container
            height={900}
            width={900}
            />
        
        {/*menu page section*/}
        <div className='text-fuchsia-900 text-lg font-semibold pt-8 pb-4'>{"Menu Page"}</div>
        <ul className='list-disc list-inside text-stone-700 text-base'>
            <li>{"Used for exploratory and secondary tasks"}</li>
            <li>{"Allowed Trace to exist as a dedicated experience"}</li>
            <li>{"Scaled well as features expanded"}</li>
        </ul>

        <Image
            src="/tracecards.png" // The path to your image
            alt="Descriptive text for the image"
            layout="fit" // This makes the image fill the container
            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
            className="rounded-lg mx-auto pt-8 pb-4" // Ensures the image has rounded corners like the container
            height={900}
            width={900}
            />

        <Image
            src="/tracefull.png" // The path to your image
            alt="Descriptive text for the image"
            layout="fit" // This makes the image fill the container
            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
            className="rounded-lg mx-auto pt-8 pb-4" // Ensures the image has rounded corners like the container
            height={200}
            width={200}
            />
        
        <div className='text-stone-700 text-base text-center pb-16'>{"This dual-entry strategy supported both passive discovery and intent-driven engagement."}</div>

        
    <div className='text-fuchsia-800 text-2xl pt-16 pb-4'>{"Rewards and Insights Experience"}</div>
    <div className='text-stone-700 text-base'>{"As a focused design task within the larger integration effort, I was responsible for redesigning key components of the Rewards and Insights experience to better surface user value and reduce cognitive load."}</div>
    <div className='text-stone-700 text-base pt-2'>{"The primary challenge was presenting reward information across multiple linked cards in a way that felt intuitive, scannable, and scalable within a mobile banking context."}</div>

    <div className='text-stone-700 font-semibold text-base pt-8 pb-4'>{"Exploring Layout Patterns"}</div>
    <div className='text-stone-700 text-base'>{"On the Rewards page, users can link multiple credit cards to earn points through everyday purchases. This introduced a core design question:"}</div>
    <div className='text-stone-700 text-base pt-2'>{"How might we help users quickly understand and switch between rewards associated with different cards, without overwhelming them?"}</div>

    <div className='text-stone-700 text-base pt-2'>{"I explored several layout patterns, including:"}</div>
    <ul className='list-disc list-inside text-stone-700 text-base pt-4'>
        <li>{"Tabbed views"}</li>
        <li>{"Accordions"}</li>
        <li>{"Carousel-based cards"}</li>
    </ul>

    <div className='text-stone-700 text-base pt-4'>{"Each pattern was evaluated based on clarity, ease of navigation, and ability to scale as users linked additional cards."}</div>

    <Image
            src="/tracediscovery.png" // The path to your image
            alt="Descriptive text for the image"
            layout="fit" // This makes the image fill the container
            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
            className="rounded-lg mx-auto pt-8 pb-4" // Ensures the image has rounded corners like the container
            height={400}
            width={400}
            />
    
            <Image
            src="/tracediscovery2.png" // The path to your image
            alt="Descriptive text for the image"
            layout="fit" // This makes the image fill the container
            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
            className="rounded-lg mx-auto pt-8 pb-4" // Ensures the image has rounded corners like the container
            height={400}
            width={400}
            />

                    <Image
            src="/tracediscovery3.png" // The path to your image
            alt="Descriptive text for the image"
            layout="fit" // This makes the image fill the container
            objectFit="cover" // This makes the image cover the available space, you can adjust as needed
            className="rounded-lg mx-auto pt-8 pb-4" // Ensures the image has rounded corners like the container
            height={400}
            width={400}
            />

    <div className='text-stone-700 text-base pt-4 pb-4'>{"After iteration and review, I selected a"} <span className='font-semibold text-fuchsia-800'> {"carousel-based card layout"}</span> {"to represent each linked credit card."}</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* column 1 */}
        <div>

            <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-fuchsia-800 text-base pb-4 font-semibold'>Optimized use of space</div>
            <div className='text-stone-700 text-base'>{"Carousels allow multiple cards to be displayed within a constrained mobile viewport, preserving space for supporting content such as point balances and redemption actions."}</div>
        </div>

        </div>

        {/* column 2 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-fuchsia-800 text-base pb-4 font-semibold'>Focused attention</div>
            <div className='text-stone-700 text-base'>{"Showing one card at a time reduces visual clutter and helps users clearly associate rewards with the correct card, minimizing confusion."}</div>
        </div>
        </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {/* column 1 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-fuchsia-800 text-base pb-4 font-semibold'>{"Scalability"}</div>
            <div className='text-stone-700 text-base'>{"The pattern scales naturally as users link additional cards, without requiring structural changes to the page layout."}</div>
        </div>

        {/* column 2 */}
        <div className='p-4'>
            <div className='text-stone-700 text-base'>{"By balancing clarity with flexibility, the carousel solution aligned well with the expectations of a banking interface while supporting future growth."}</div>
        </div>
        </div>
    </div>



    </div>
    </div>
  )
}

export default TraceProblemAndUsers