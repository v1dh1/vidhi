import React from 'react'
import Image from 'next/image'

const WavelyResearchOne = () => {
  return (
    <div className='pt-32 container mx-auto w-3/4'>

        <div className='text-stone-100'>Research</div>
        <div className='text-stone-400 pt-4'>PART 1</div>
        <div className='text-stone-100 text-3xl pt-2 font-serifDisplay'>Identifying Opportunity</div>

        <div className='pt-4 text-stone-400'>{'Method: Survey'}</div>

        <div className='pt-4 text-stone-100'>{"From personal experience with crafting, I knew this problem existed, but I conducted a survey to further confirm my suspicions. "}</div>
        <div className='pt-4 pb-4 text-stone-100'>{"To explore whether other crafters shared my concerns about sampling different crafts or acquiring small, specific pieces of materials, I devised a set of questions aimed at understanding their experiences with sourcing materials. "}</div>
        <div className='text-stone-100 pb-8'>{"I surveyed 25 people, and in the mix was anyone who enjoyed crafting as a hobby, to people who run crafting businesses. All participants had some experience in the field. "}</div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
        <div class="bg-stone-700 border-2 border-stone-500 text-stone-100 rounded-xl p-4">{"How much on average do you spend on craft supplies in a year?"}</div>
        <div class="bg-stone-700 border-2 border-stone-500 text-stone-100 rounded-xl p-4">{"Have you ever struggled to find just a small amount of a particular crafting material for your projects?"}</div>
        <div class="bg-stone-700 border-2 border-stone-500 text-stone-100 rounded-xl p-4">{"How do you deal with having too much of one material?"}</div>
      </div>

      <div className='text-stone-200 pt-2'>   {"Here, the focus shifts to understanding how crafters currently handle the issue of excess materials or the need for small quantities of specific items. The aim is to learn about their approaches and identify any existing solutions they use, revealing potential gaps in the market."}</div>

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

        <div className='bg-stone-800 rounded-3xl px-6 pt-4'>
            <div className=' text-stone-400 font-semibold'>Findings</div>

            <div className='text-stone-200 text-xl pt-4 font-serifDisplay'>{"The crafting community navigates a paradoxical challenge, balancing the boundless potential of creativity with the practical limitations of material cost, accessibility, and sustainability."}</div>

            <div className='text-stone-300 pt-4'>{"36% of participants spend between $150 - $300 on craft supplies, which is a big number that may be reduced if they used alternative methods to obtain supplies. The profiles of the people who inputted this range were not those with businesses, but rather hobbyists."}</div>
            <div className='text-stone-300 pt-4'>{"The struggle to find a specific amount of a specific product exists, and leads to hobbyists having to leave their projects unfinished. 16% had a buy a new pack of whatever the material was, which is high considering the pool of participants was only 25 people. "}</div>
            <div className='text-stone-300 pt-4 pb-4'>{"The challenges faced by the crafting community are multifaceted, stemming from the intrinsic nature of crafting itself—a realm where creativity knows no bounds, but practical constraints often hinder the realization of this creativity. At the heart of these challenges lies a paradox: the quest for diverse and quality materials versus the practical limitations of cost, accessibility, and sustainability."}</div>

        </div>
    </div>
  )
}

export default WavelyResearchOne