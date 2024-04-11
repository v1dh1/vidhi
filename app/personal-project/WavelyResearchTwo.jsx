import React from 'react'
import Image from 'next/image';


const WavelyResearchTwo = () => {
  return (
    <div>


<div className='pt-32 container mx-auto w-3/4'>

<div className='text-stone-400 pt-4'>PART 2</div>
<div className='text-stone-100 text-4xl pt-2'>Understanding the Problem</div>

<div className='pt-8 text-stone-400'>{'Method: Survey, interview, affinity mapping, user personas, current journey map'}</div>
<div className='pt-4 text-stone-100'>{"To validate the concern of difficulty in sourcing sustainable hobby materials, I initiated a comprehensive research strategy."}</div>
<div className='pt-4 text-stone-100'>{"A survey was distributed to a broad audience to capture diverse perspectives on crafting habits and material sourcing challenges. Following the survey, in-depth interviews were conducted to delve deeper into individual experiences."}</div>
<div className='flex justify-center pt-4 rounded-xl'>
<Image src="/surveyResults.png" alt="Description" width={1500} height={800} />

</div>

<div className='text-stone-100 text-xl pt-8 font-semibold' >{"Affinity Mapping the Survey Results"}</div>

<div className='flex justify-center pt-4'>

<Image src="/affinitymap.png" alt="Description" width={1500} height={800} />
</div>

<div className='text-stone-100 text-xl pt-4'>{"Over 40% of participants admitted cost was a big factor preventing them to create the projects of their dreams, followed by sustainability concerns around buying new materials being the second most preventative reason."}</div>


</div>

    </div>
  )
}

export default WavelyResearchTwo