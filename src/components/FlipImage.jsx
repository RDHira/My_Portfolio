import React from 'react'
import Project from './data/projects.json';

const Projects = () => {
  return (
    <>
     <div className="project-app max-w-6xl mx-auto mt-40" id='projects'>
        <h1 className='text-3xl font-bold text-center uppercase'>My <span className='text-blue-500 underline'>Projects</span></h1>
        <p className='text-yellow-600 text-center mt-3 text-[18px]'>During work at company,  I developed a range of technical skills, including foundational front-end skills such as HTML, CSS, JavaScript, and CSS frameworks, git, React.js. Additionally, I enhanced my problem-solving abilities, API integration techniques,and project management skills.</p>
        <div className="projects flex justify-center items-center flex-wrap">
            {
               Project.map((pro)=>{
                return(
                    <>
                    <div className="project-details w-72 m-5 bg-black p-5 rounded-lg text-center" key={pro.key}
                       data-aos="flip-left"
                       data-aos-easing="ease-out-cubic"
                       data-aos-duration="3000"
                    >
                         <img className='pro-img rounded-xl' src={`${pro.imageSrc}`} alt="" />
                         <h1 className='text-xl font-bold mt-5'>{pro.title}</h1>
                         {/* <p className='text-[16px] mt-2'>{pro.description}</p> */}
                         <div className="pro-btn  flex justify-between items-center mx-8 mt-4">
                         <a href={pro.demo} target='_blank' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded'>Demo</a>
                         <a href={pro.source} target='_blank' className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Code</a>
                         </div>
                    </div>
                     <p className='project-description text-[16px] mt-2'>{pro.description}</p>
                    </>
                )
               })
            }
        </div>
     </div> 
    </>
  )
}

export default Projects
