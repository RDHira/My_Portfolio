import React from 'react';
import Exp from './data/experience.json';

function Experience(){
    return(
        <>
        <div className="experience-app  max-w-6xl mx-auto hover:bg-gray-900 rounded-lg mt-24" id='experience'>
        <h1 className='text-3xl font-bold uppercase text-center'>My Work <span className='text-blue-500 underline'>Experiences</span></h1>
        <p className='text-yellow-600 text-center mt-3 text-[18px]'>During my work experience at company, I learned and developed numerous skills, including problem-solving, API fetching, team collaboration, handling real-life projects, and optimizing code performance. This has significantly enhanced my technical abilities and my capacity to work effectively in diverse team environments.</p>
        {
            Exp.map((data)=>{
                return(
                    <>
                    <div key={data.id} className="ex-items max-w-2xl mx-auto p-6 flex justify-between items-center gap-10 text-justify bg-gray-800 text-white m-5 rounded-lg" 
                     data-aos="zoom-in-right" 
                     data-aos-duration="1000"
                    >
                    <div className="ex-img">
                        <img className='w-20 h-20 rounded-lg'  src={`${data.imageSrc}`} alt="icon-img" />
                        <h1 className='text-xl font-bold text-emerald-600'>{data.name}</h1>
                    </div>
                    <div className="ex-content font-bold mr-6">
                        <h2 className='text-2xl text-center'>{data.role}</h2>
                        <h4 className='text-xl text-center text-yellow-300'><span className='text-lime-400'></span> {data.location}</h4>
                        <h5 className='text-[15px] text-center text-yellow-500'>{data.experiences[0]}</h5>
                    </div>
                    </div>
                    </>
                )
            })
        }
        </div>
        </>
    )
}
export default Experience;