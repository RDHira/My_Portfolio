import React from 'react';
import Skill from './data/skills.json';

const Skills = () => {
  return (
    <div className='skill-app  max-w-6xl mx-auto mt-40' id='skills'>
      <h1 className='text-4xl font-bold text-center'>TECHNICAL <span className='text-blue-500 underline'>SKILLS</span></h1>
      <p className='text-yellow-600 text-center mt-3 text-[18px]'>During work at company,  I developed a range of technical skills, including foundational front-end skills such as HTML, CSS, JavaScript, and CSS frameworks, git, React.js. Additionally, I enhanced my problem-solving abilities, API integration techniques,and project management skills.</p>
      <div className="skill-techno flex justify-center items-center " >
      {
         Skill.map((data)=>{
            return(
                <>
                    <div className="technology-content m-2 bg-black p-5 rounded-lg" key={data.id}
                     data-aos="flip-right"
                     data-aos-duration="2000"
                    >
                        <img className='w-20 ' src={`${data.imageSrc}`} alt="" />
                        <h3 className='text-2xl'>{data.title}</h3>
                     </div>
                </>
            )}
        )
      }
      </div>
    </div>
  )
}

export default Skills
