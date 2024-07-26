import React from 'react'
import Project from './data/projects.json';

const Projects = () => {
  return (
    <>
     <div className="project-app max-w-6xl mx-auto mt-40" id='projects'>
        <h1 className='text-3xl font-bold text-center uppercase'>My <span className='text-blue-500 underline'>Projects</span></h1>
        <p className='text-yellow-600 text-center mt-3 text-[18px]'>During work at company, I developed a range of technical skills and Projects  that highlight my expertise in front-end development, problem-solving, and API integration. These projects showcase my ability to create dynamic and user-friendly applications.</p>
        <div className="projects">
        {Project.map((pro, index) => (
          <div className={`project-container max-w-5xl mx-auto flex justify-between  items-center gap-8 m-5 p-5 rounded-lg`} key={pro.key}>
            {index % 2 === 0 ? (
              <>
                <div className="project-details text-white rounded-md md:w-2/5 p-4"
                 data-aos="fade-up-right"
                 data-aos-duration="2000"
                >
                  <img className='pro-img rounded-xl md:w-full' src={`${pro.imageSrc}`} alt="" />
                  <h1 className='text-2xl text-center font-bold mt-5'>{pro.title}</h1>
                  <div className="pro-btn flex justify-around items-center mt-4">
                    <a href={pro.demo} target='_blank' rel="noopener noreferrer" className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded'>Demo</a>
                    <a href={pro.source} target='_blank' rel="noopener noreferrer" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Code</a>
                  </div>
                </div>
                <p className='project-description text-xl text-justify text-red-300 mt-2 md:mt-0 md:w-1/2 p-4'
                  data-aos="fade-up-left"
                  data-aos-duration="2000"
                >{pro.description}</p>
              </>
            ) : (
              <>
                <p className='project-description text-xl text-justify text-red-300 mt-2 md:mt-0 md:w-1/2 p-4'
                  data-aos="fade-up-left"
                  data-aos-duration="2000"
                >
                {pro.description}</p>
                <div className="project-details text-white rounded-md md:w-2/5 p-4"
                data-aos="fade-up-right"
                data-aos-duration="2000"
                >
                  <img className='pro-img rounded-xl md:w-full' src={`${pro.imageSrc}`} alt="" />
                  <h1 className='text-2xl text-center font-bold mt-5'>{pro.title}</h1>
                  <div className="pro-btn flex justify-around items-center mt-4">
                    <a href={pro.demo} target='_blank' rel="noopener noreferrer" className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded'>Demo</a>
                    <a href={pro.source} target='_blank' rel="noopener noreferrer" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Code</a>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
     </div> 
    </>
  )
}

export default Projects
