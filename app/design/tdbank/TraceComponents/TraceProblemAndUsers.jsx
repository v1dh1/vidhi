import React from 'react'

const TraceProblemAndUsers = () => {
  return (
    <div>

        <div className='text-red-400 font-semibold text-l pt-8 pb-2'>Problem and Users</div>

        <div className='text-stone-700 text-xl font-bold'>{"Shifting Toward a 'Local-First' Focus: Empowering Sustainable Shopping and Small Businesses in the TD Ecosystem"}</div>
        <div className='text-stone-600 pt-2'>{"Initially conceived as a sustainability-focused project, the purpose of this initiative was to tackle the challenge of promoting sustainability and supporting small businesses within the TD ecosystem. However, after conducting comprehensive user interviews, we recognized the need to pivot towards a local-first approach, aiming to inclusively address all user demographics. It was also found that TD’s US presence was not strong enough, which led to creating this product which falls outside of traditional banking. The primary goal remained consistent: to develop an app that incentivizes users to engage in sustainable shopping practices while highlighting the significance of local businesses and B-Corps."}</div>

        <div className='text-stone-700 pt-4 pb-2'>Who Are The Users for Trace?</div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

            <div className='bg-red-50 p-4 rounded-xl '>

                <div className='text-stone-700 text-xl font-bold'>{"TD Customers interested in sustainable living"}</div>
                <div className='text-stone-500'>
                    {"The primary users of this product were individuals who were TD customers with an interest in sustainable living practices and a desire to support local businesses. Additionally, the target audience extended to individuals who were not yet TD customers but shared similar values and could potentially be converted to TD customers through the offerings of the product."}
                </div>

            </div>

            <div className='bg-red-50 p-4 rounded-xl '>

                <div className='text-stone-700 text-xl font-bold'>{"Internal Stakeholders to obtain buy-in from"}</div>
                    <div className='text-stone-500'>
                        {"The audience also included a Line of Business (LOB) within TD, which was a crucial stakeholder group that the project team aimed to gain buy-in from. This group played a significant role in decision-making processes, providing input and feedback to ensure the product aligned with TD's strategic objectives and met the needs of both customers and the organization."}
                    </div>

            </div>

            <div className='bg-red-50 p-4 rounded-xl '>

                <div className='text-stone-700 text-xl font-bold'>{"Local-Oriented Individuals who value community connection"}</div>
                    <div className='text-stone-500'>
                        {"In addition to TD customers and potential customers, the product targeted local-oriented individuals who valued community connections and sustainable practices. These individuals were likely to engage with the product's offerings, driven by their interest in supporting local businesses and making environmentally conscious decisions."}
                    </div>
            </div>
        </div>


        

    </div>
  )
}

export default TraceProblemAndUsers