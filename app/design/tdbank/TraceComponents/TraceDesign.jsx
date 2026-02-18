import React from 'react'
import Image from 'next/image'

const TraceDesign = () => {
  return (
    <div>

        <div className='text-stone-700 text-2xl font-bold pt-8'>Design</div>
        <div className='text-stone-600'>{"Since the goal of this project was to integrate the standalone app into TD’s existing banking app, there were many changes that needed to be made. Both the standalone app and the TD mobile banking app had their own design systems, with completely different branding, fonts, and component styles."}</div>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4'>

        <div className='bg-fuchsia-50 p-4 rounded-xl'>
            <div className='text-stone-700 text-xl font-bold'>{"Gathering Assets to Easily Maintain Brand Consistency"}</div>
            <div className='text-stone-500'>{"● I scoped and collected visual assets from the standalone app, ensuring seamless integration into the TD mobile app while maintaining brand consistency and visual coherence. "}</div>
            <div className='text-stone-500'>{"● I also organized and cataloged assets which matched the existing TD mobile banking app to streamline the design process"}</div>
        </div>

        <div className='bg-fuchsia-50 p-4 rounded-xl'>
            <div className='text-stone-700 text-xl font-bold'>{"User Flow Creation for Open-Banking and No-Open Banking Scenarios"}</div>
            <div className='text-stone-500'>{"● I developed two distinct user flows for both the MVP and future state version to accommodate different user scenarios and interactions within the integrated app. The MVP version did not have the open banking flow, due to technical and financial constraints. The future state version included the open banking flow, which was rigorously tested and liked by users, but will require more technical deep dives and time."}</div>
        </div>

        <div className='bg-fuchsia-50 p-4 rounded-xl'>

            <div className='text-stone-700 text-xl font-bold'>{"UI Design"}</div>
            <div className='text-stone-500'>{"● After creating the assets, I used them to design high fidelity screens of the app post-integration. The mapping of user flows and the component audit expedited this process, and helped ensure brand consistency."}</div>
        </div>

        </div>

        <div className='text-fuchsia-400 font-semibold pt-8 pb-4'>The Design Process</div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
        
        <div className=''>
        <Image
              src="/tracescreens.png"
              width={500}
              height={500}
              alt="Trace Before"
            />
        </div>

        <div className='flex flex-col justify-center items-center md:items-start'>
            <div className='text-stone-700 font-bold pb-8 pt-2'>{"Original pre-integration screens from the TD Mobile Banking app"}</div>
            <div className="text-stone-600 pb-2">{"These are the original main menu and accounts screens, where I did an exploration on where the entry point for Trace could be."}</div>
            <div className='text-stone-600'>{"The main issue here is that due to TD mobile banking app user’s habits, we had to make sure the entry point did not interfere with the user's routines."}</div>
        </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>

            <div className='flex flex-col justify-center items-center md:items-start'>
                <div className='pt-8 pb-8 text-stone-700 font-bold'>{"Finding prospective entry points for Trace"}</div>
                <div className='text-stone-600'>
                {"For the different features of Trace, where can the entry point(s) be on the current mobile banking app? Main themes of either the menu or For You page in the accounts page came up. These made the most sense as they are both easily accessible from the bottom navigation."}
                </div>
            </div>

            <div className='flex justify-center pt-4'>
                <Image
                src="/traceprocess.png"
                width={500}
                height={500}
                alt="Trace Before"
                />
            </div>
        </div>

        <div className='pt-8 text-stone-700 font-bold'>{"Exploration within the 2 refined sections on where the entry point could be"}</div>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-4 gap-4'>

            <div className=''>

            <div className='flex justify-center'>
                <Image
                src="/traceaccounts.png"
                width={500}
                height={500}
                alt="Trace Before"
                />
            </div>
                <div className='text-stone-600 pt-3'>{"These cards include the title of the small business, the type of social cause they support and a basic description. All these cards are clickable, and leads to a details page about the small business, including all the information from the card, plus more about the business and directions on getting there."}</div>

            </div>
            
            <div className=''>
                <div className='text-stone-700 font-bold'>Accounts Page</div>
                <div className='text-stone-600'>{" The just for you section of the accounts page made sense for an entry point, as the accounts tabs would be the first page that would open by default when a user opens the app, and lets users see important information quickly. This tab gives an overview of the customer’s accounts and gives them the option to complete common tasks. Under the “Just for you” heading, this section focuses on black owned, LGBTQ+, and family owned businesses - and on businesses that have TD Small Business accounts. It is placed here, as users can see new places in their community, and get prompted to see new places in their community, all while learning about different causes they can support."}</div>
            </div>
        </div>

        <div className='pt-8'>
                <div className='text-stone-700 font-bold'>Menu Page</div>
                <div className='text-stone-600'>{" The menu page made sense for the primary entry point for the Trace app, as the menu is frequently used for tasks that require more time and energy than the accounts tab. The primary entry point here is a carousel of the different functions of Trace, including DIscover, Rewards, Link Bank Account and Insights."}</div>
            </div>

        <div className='flex justify-center pt-4'>
            <Image
            src="/tracecards.png"
            width={600}
            height={500}
            alt="Trace Before"
            />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 pt-8 gap-4'>

        <div className='flex justify-center pt-4'>
            <Image
            src="/tracefull.png"
            width={200}
            height={500}
            alt="Trace Before"
            />
        </div>

            
        <div className='text-stone-700 pt-4'>

            <div className='pb-2'>{"Placed under the Shop local & Get Rewarded heading, the order of the Trace entry CTAs reflects what would be most and least popular."}</div>
            <div className='pb-2'>{"Since the main goal of Trace is customers spending on local businesses, the Shop Local Businesses card is shown first, where they can earn points through purchases."}</div>
            <div className='pb-2'>{"The second is the Get Cashback card, as this is the second main function of Trace. Users can click on this card to redeem their points for cashback."}</div>
            <div className='pb-2'>{"The third is to see shopping insights, which is where users can see how much money they’ve spent and how many points they’ve earned."}</div>
            <div className=''>{"The last tile is to link your bank account to the app. This is left for last, as most customers would have already linked their account on sign-up, and for those who haven’t, they’d get the chance to explore all the features Trace has to offer before linking their bank account for good."}</div>
        </div>

        </div>


        <div className='text-stone-700 font-bold pt-12'>Rewards and Insights Page</div>
        <div className='text-stone-600'>{"As part of a side task, I was in charge of redesigning parts of the Insights and Rewards Page."}</div>

        <div className='text-stone-700 pt-8'>{"For the Rewards page, these were the initial ideas to continue exploring."}</div>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 '>
        
        <div className=''>
        <Image
            src="/tracediscovery.png"
            width={500}
            height={500}
            alt="Trace Before"
            />
        </div>

        <div className='flex justify-center'>
        <Image
            src="/tracediscovery2.png"
            width={500}
            height={500}
            alt="Trace Before"
            />
        </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex justify-center'>
                <Image
                    src="/tracediscovery3.png"
                    width={400}
                    height={500}
                    alt="Trace Before"
                    />
            </div>

            <div className='text-stone-700 flex flex-col justify-center items-center md:items-start'>{"On our rewards page, I did an exploration for this credit card style card to display the user’s points. Here, the cards represent the different credit cards a user links to this app to earn rewards upon. I went through multiple different ways to lay out this card, such as tabs, accordions, and carousels. The idea was to make it super easy for you to switch between the three cards without getting confused. I wanted to find the setup that feels the most natural for navigating through your linked credit cards."}</div>
        </div>
        
        <div className='text-stone-700 pt-8'>{"Ultimately, I decided to have a carousel view for the cards, for multiple reasons."}</div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4'>

            <div className='bg-fuchsia-50 p-4 rounded-xl text-stone-600'>
            {"Carousels optimize space. Especially when you have 3+ cards to show, carousels allow for chunks of information to be displayed in a concise form, allowing other crucial information to also be shown on the page"}</div>

            <div className='bg-fuchsia-50 p-4 rounded-xl text-stone-600'>{"Focus on individual items. Carousels help users focus on one card at a time, which is useful to not confuse one card with the other."}</div>

            <div className='bg-fuchsia-50 p-4 rounded-xl text-stone-600'>{"Carousels are scalable. In the event a user wants to link even 5 cards, carousels provide the space to do so."}</div>

        </div>

    </div>
  )
}

export default TraceDesign