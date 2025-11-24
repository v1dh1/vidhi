import React from 'react'

const TraceOutcomes = () => {
  return (
    <div>

        <div className='pt-12 font-bold text-stone-700'>Outcomes</div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 pt-4'>

            <div className='text-stone-600 bg-red-50 p-4 rounded-xl'>{"The user flow creation process facilitated a clear understanding of user interactions and navigation paths within the app, enabling stakeholders to visualize and evaluate the user experience from end to end."}</div>
            <div className='text-stone-600 bg-red-50 p-4 rounded-xl'>{"User flow diagrams served as valuable communication tools, fostering alignment among team members and stakeholders regarding the app's functionality and usability requirements."}</div>
            <div className='text-stone-600 bg-red-50 p-4 rounded-xl'>{"Key findings from user flow analysis informed iterative design decisions, guiding subsequent iterations of wireframes and prototypes to better align with user needs and project objectives"}</div>
            <div className='text-stone-600 bg-red-50 p-4 rounded-xl'>{"These newly integrated designs will be demo-ed to the Small Business team at TD, to hopefully get approval to move forward and integrate this in the app"}</div>
        </div>

        <div className='text-stone-700 pt-8'>{"Personally, this project provided invaluable learning experiences in UX design, stakeholder engagement, and user-centered design principles. It reinforced the importance of adaptability, resilience, and continuous learning in navigating complex and dynamic project environments. I was able to gain and develop skills in visual design, while learning to synthesize feedback and iterate on designs to meet evolving user needs and preferences."}</div>

        <div className='text-red-400 font-bold pt-12 pb-4'>Next Steps</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

            <div className='bg-red-50 p-4 rounded-xl'>
                <div className='text-stone-700 font-bold'>User Testing</div>
                <div className='text-stone-500 pt-2'>{"● Conduct comprehensive user testing sessions with a diverse group of participants to gather feedback on the integrated app's usability, functionality, and overall user experience."}</div>
                <div className='text-stone-500 pt-2'>{"● Identify areas for improvement and iteratively refine the app based on user insights and feedback to enhance usability and address any usability issues."}</div>

            </div>

            <div className='bg-red-50 p-4 rounded-xl'>
                <div className='text-stone-700 font-bold'>Confirming Development Feasibility</div>
                <div className='text-stone-500 pt-2'>{"● Collaborate closely with developers to validate the technical feasibility of implementing the proposed design enhancements and features within the TD mobile banking app environment."}</div>
                <div className='text-stone-500 pt-2'>{"● Conduct technical assessments and feasibility studies to ensure smooth integration and compatibility with existing systems and infrastructure."}</div>

            </div>

            <div className='bg-red-50 p-4 rounded-xl'>
                <div className='text-stone-700 font-bold'>Internal Launch with MVP built</div>
                <div className='text-stone-500 pt-2'>{"● Plan and execute an internal launch of the integrated app with the MVP features to a select group of TD employees or beta testers."}</div>
                <div className='text-stone-500 pt-2'>{"● Gather feedback from internal stakeholders and early adopters to validate the effectiveness of the integrated app and identify any areas for further refinement or enhancement."}</div>
                <div className='text-stone-500 pt-2'>{"● Use insights from the internal launch to inform the development roadmap and prioritize future iterations and feature enhancements for the app."}</div>


            </div>
        </div>

        <div className='text-center text-red-900 pt-10 pb-8'>{"A special thanks to Meghna Bellani for mentoring and guiding me through this project, and as a designer <3"}</div>
    </div>
  )
}

export default TraceOutcomes