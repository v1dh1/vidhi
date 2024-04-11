import React from 'react'

const WavelyProblemAndSolution = () => {
  return (
    <div className='container mx-auto w-3/4'>

        <div className='pt-32 text-stone-100'>Problem</div>
        <div className='pt-4 text-stone-100 text-3xl'>{"Crafters want more materials for their projects, but they can be expensive and hard to find."} </div>
        <div className='pt-4 text-stone-200 text-2xl'>{"It's difficult to get the products you need, without spending more money than desired, or pick the most sustainable option."}</div>
        <div className='pt-5 text-stone-300'>{"Crafting enthusiasts often find themselves in need of more materials to bring their creative visions to life. However, the pursuit of new materials can be both costly and challenging, given their scarcity and the financial burden of acquiring them. It's particularly frustrating when only a small quantity of a specific material is needed, making the purchase of new supplies seem wasteful and unnecessarily expensive."}</div>
        <div className='pt-4 text-stone-300'>{"As a fellow hobbyist, I've frequently encountered this dilemma. Whether it's seeking just a few meters of a particular yarn color or wanting to experiment with new nail polish shades without the commitment of buying full sets, the struggle is real."}</div>


        <div className='pt-32'></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-200 p-4 shadow rounded">
              Item 1
            </div>
            
            <div className="">
              <div className='text-stone-100'>Solution</div>
              <div className='text-4xl pt-4 text-stone-100'>{"Wavely: Barter for your hobby materials instead of spending."}</div>
              <div className='text-stone-300 pt-4'>{"Wavely is an innovative app designed to revolutionize the way crafters source their materials. By facilitating the exchange of goods, our platform enables users to find exactly what they need for their projects by trading items with others. This approach not only fosters a sense of community among crafters but also promotes sustainable practices by reducing waste. With Wavely, the age-old tradition of bartering is modernized, providing crafters everywhere with a resourceful way to pursue their passions more sustainably and affordably."}</div>
            </div>
          </div>



    </div>
  )
}

export default WavelyProblemAndSolution