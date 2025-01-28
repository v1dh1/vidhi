import React from 'react'

const TraceStart = () => {
  return (
    <>
    <div className='text-pink-400 font-semibold text-l pt-8 pb-2'>Overview</div>
    <div className='text-stone-700 text-l'>{"Trace is an app that promotes sustainable shopping practices while highlighting small businesses."}    </div>
    <div className='text-stone-500 pt-2'>{"Trace is an app that is designed to promote sustainable shopping practices while highlighting small businesses, specifically B-corp businesses. Previously a standalone app, our team was tasked with integrating the core features of the app into TD's mobile banking app in the U.S. Through a unique rewards program, users earn points for their purchases, which can either be redeemed for cash back or donated to sustainable causes, aligning with Trace's mission to encourage conscious consumerism and community support."}</div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className=''>

            <div className='text-stone-700 text-xl font-bold pt-8'>{"The goal is to help expand TD’s presence in the US and advance TD’s ESG goals."}</div>
            <div className='text-stone-600 pt-2'>{"As part of TD's commitment to expanding its presence in the US and advancing ESG goals, Trace represents a strategic initiative to revolutionize the way consumers interact with local businesses and contribute to positive environmental impact on their local economies."}</div>

        </div>

        <div className=''>

            <div className='text-stone-700 text-xl font-bold pt-8'>{"We were tasked with moving from a standalone app, to integrating Trace into TD’s mobile app in the US."}</div>
            <div className='text-stone-600 pt-2'>{"Initially, Trace was conceived as a standalone app, complementing TD's existing financial products, however, it was later integrated into TD’s mobile banking app. This app was launched into the US market, since Trace is an open banking platform. Trace's launch in the US market signifies a significant step towards achieving TD's vision for sustainable banking solutions and fostering a culture of responsible consumption."}</div>
        </div>
    </div>
    

    
    
    </>
  )

}

export default TraceStart