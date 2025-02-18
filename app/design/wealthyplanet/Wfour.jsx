import React from 'react'

const Wfour = () => {
  return (
    <div>
        <div className='bg-babytaupe border-b-2 border-stone-50'>
        <div className='p-4 md:p-16'>
        <div className='text-stone-900 text-5xl font-semibold pb-8'>{"Results and Takeaways"}</div>

        <section className='bg-babytaupe'>

            <div className='md:grid grid-cols-3 gap-16'>
            <div className='border-2 border-accenttaupe rounded-xl p-4'>

                <div className='font-semibold text-stone-900 text-3xl'>{"Engagement"}</div>
                <div className='text-l pt-4 text-stone-700'>{"Increased user sign-ups by"} <strong>270%</strong> {"in the first month post-launch."}</div>

            </div>

            <div className='border-2 border-accenttaupe rounded-xl p-4'>

<div className='font-semibold text-stone-900 text-3xl'>{"Retention"}</div>
<div className='text-l pt-4 text-stone-700'>{"Users spending 20% more time on the website."}</div>

</div>

<div className='border-2 border-accenttaupe rounded-xl p-4'>

<div className='font-semibold text-stone-900 text-3xl'>{"Trust"}</div>
<div className='text-l text-stone-700 pt-4'>{"Received positive feedback on usability and approachability in follow-up surveys."}</div>

</div>
            </div>
        </section>

        <div className=''>{"Overall, this was a great experience for me to learn to be a better independant designer. I learnt the importance of ownership in my work, and how truly valuable design systems are. "}</div>
        </div>
    </div>
    </div>
  )
}

export default Wfour