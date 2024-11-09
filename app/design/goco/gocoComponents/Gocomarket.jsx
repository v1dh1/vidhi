import React from 'react'
import Image from 'next/image'

const Gocomarket = () => {
  return (
    <div>

<div className='pt-20 container mx-auto w-11/12'>

<div className='text-pink-400 font-semibold'>Research</div>
<div className='text-stone-700 pt-4'>PART 1</div>
<div className='text-stone-700 text-xl pt-2'>Market Research and Hypothesis</div>


<div className='pt-4 text-stone-700'>{"Existing services (e.g., ride-shares, bike rentals) are typically standalone solutions that require individual apps and accounts, creating a fragmented experience. They do not offer a unified approach to mobility or consider user preferences, budget, or environmental concerns holistically."}</div>
<div className='pt-4 pb-4 text-stone-700'>{"Currently, no single platform currently offers a flexible, subscription-based service that adapts to various transportation needs in real-time. Most platforms lack real-time dynamic suggestions, leading to inefficiencies and user frustration."}</div>
<div className='text-stone-700 pb-8'>{"My hypothesis is: If we provide a subscription-based mobility platform that dynamically suggests optimal transport options based on user preferences and real-time conditions, then users will be more likely to choose sustainable, cost-effective transit solutions over car ownership. "}</div>

<div className='text-stone-700'>{"Key Insights from User Research"}</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
<div class="bg-pink-50 text-stone-700 rounded-xl p-4">{"It is frustrating to have to juggle multiple apps for different modes of transportation. There is space in the market for a single, unified platform that could provide them with various transit options based on their current needs and location."}</div>
<div class="bg-pink-50 text-stone-700 rounded-xl p-4">{"Dependance on solely public transit has often disappointed city-dwellers, as many find it to become increasingly unsafe and/or unreliable to use."}</div>
<div class="bg-pink-50 text-stone-700 rounded-xl p-4">{"The best mode of transportation is often overwhelming to find, especially for those who are new to a city and/or are there for a short period of time."}</div>
</div>




<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
  <div>
  <Image
      src="/questionone.png"
      width={500}
      height={500}
      alt="survey results from q1"
      
    />
  </div>
  <div>
  <Image
      src="/questiontwo.png"
      width={500}
      height={500}
      alt="survey results from q2"
    />
  </div>
  <div>
  <Image
      src="/questionthree.png"
      width={500}
      height={500}
      alt="survey results from q3"
    />
  </div>
</div>


<div className='pt-8'></div>

<div className='bg-pink-50 rounded-3xl px-6 pt-4'>
    <div className=' text-pink-400 font-semibold'>Findings</div>

    <div className='text-stone-700 text-xl pt-4 font-semibold'>{"The crafting community navigates a paradoxical challenge, balancing the boundless potential of creativity with the practical limitations of material cost, accessibility, and sustainability."}</div>

    <div className='text-stone-600 pt-4'>{"36% of participants spend between $150 - $300 on craft supplies, which is a big number that may be reduced if they used alternative methods to obtain supplies. The profiles of the people who inputted this range were not those with businesses, but rather hobbyists."}</div>
    <div className='text-stone-600 pt-4'>{"The struggle to find a specific amount of a specific product exists, and leads to hobbyists having to leave their projects unfinished. 16% had a buy a new pack of whatever the material was, which is high considering the pool of participants was only 25 people. "}</div>
    <div className='text-stone-600 pt-4 pb-4'>{"The challenges faced by the crafting community are multifaceted, stemming from the intrinsic nature of crafting itself—a realm where creativity knows no bounds, but practical constraints often hinder the realization of this creativity. At the heart of these challenges lies a paradox: the quest for diverse and quality materials versus the practical limitations of cost, accessibility, and sustainability."}</div>

</div>
</div>
    </div>
  )
}

export default Gocomarket