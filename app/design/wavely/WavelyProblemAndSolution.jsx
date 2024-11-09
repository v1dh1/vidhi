import React from 'react'
import Image from 'next/image'

const WavelyProblemAndSolution = () => {
  return (
    <div className='container mx-auto w-11/12'>

        <div className='pt-32 text-pink-400 font-semibold'>Problem</div>
        <div className='pt-4 text-stone-700 text-2xl'>{"Crafting materials can often be expensive, hard to find, and unsustainable."} </div>
        <div className='pt-4 text-stone-600 text-l'>{"Crafters want more materials for their projects, but they can be expensive and hard to find. It's difficult to get the products you need, without spending more money than desired, or pick the most sustainable option."}</div>
        <div className='pt-5 text-stone-500'>{"There is a big misconception that crafting supplies are all easily found at your local dollar store, which may be true to a degree, but hobbyists often want a more unique selection, a curation of materials other than those sold to them by mainstream stores."}</div>
        <div className='pt-4 text-stone-500'>{"For artists, the pursuit of new materials can be both costly and challenging, given their scarcity and the financial burden of acquiring them. It's particularly frustrating when only a small quantity of a specific material is needed, making the purchase of new supplies seem wasteful and unnecessarily expensive."}</div>
        <div className='pt-4 text-stone-500'>{"On the other hand, people regularly discard old items from their homes which often end up in landfills. Whether it’s from a spring cleaning, or an urge to declutter, more items end up in landfills than they should."} </div>
        <div className='pt-4 text-stone-500'>{"Based on a study from Boston University, “Once textiles are discarded, 66% of them are sent to landfills in the U.S. where they decompose — some quickly and others over hundreds of years”. Textiles are a big medium for some artists. Landfills are the artist’s land of opportunity for what could have been. The materials lucky enough to be saved from landfills have found sanctuary in thrift stores, only to be overlooked or inaccessible by many. "}</div>
        <div className='pt-4 text-stone-500'>{"Clearly, there is a gap between these two groups who are seeking one another, yet do not know where or how to find each other. To remedy this gap, Wavely was created. "}</div>
      
        <div className='pt-32'></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=''>
            <Image
              src="/wavelysolution.png"
              width={2000}
              height={500}
              alt="survey results from q1"
              
            />
            </div>
            
            <div className="">
              <div className='text-pink-400 font-semibold'>Solution</div>
              <div className='text-2xl pt-4 text-stone-700'>{"Wavely: Barter for your hobby materials instead of spending."}</div>
              <div className='text-stone-600 pt-4'>{"Wavely is an innovative app designed to revolutionize the way crafters source their materials. By facilitating the exchange of goods, our platform enables users to find exactly what they need for their projects by trading items with others. This approach not only fosters a sense of community among crafters but also promotes sustainable practices by reducing waste. With Wavely, the age-old tradition of bartering is modernized, providing crafters everywhere with a resourceful way to pursue their passions more sustainably and affordably."}</div>
            </div>
          </div>



    </div>
  )
}

export default WavelyProblemAndSolution