import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/My Resume.pdf';
import hero from './data/hero.json';
import Type from 'typed.js';

function Home(){
    const typedRef = useRef(null)
    useEffect(()=>{
        const options = {
            strings:[ "Welcome to my Profile", "I'm a Front-End Developer", 
                      "And I have good Knowledge in: JavaScript, HTML5, CSS",
                      "And I have good Knowledge in: Tailwind, Bootstraps",
                      "And I have good Knowledge in: React.js",
                      "And I have good Knowledge in: Git/Github, Bitbucket",
                    ],
            typeSpeed:70,
            backSpeed:30,
            loop:true 
        }

        const typed = new Type(typedRef.current, options)
        return()=>{
            typed.destroy()
        }
    },[])
    return(
        <>
        <div className="home-app max-w-6xl mx-auto flex justify-between items-center h-lvh " id='home'>
            <div className="left-hero w-3/5 h-80 bg-gray-900 text-center rounded-lg p-3 mb-6 "
                data-aos="fade-up-right"
                data-aos-duration="1000">
                <h2 className='text-2xl font-bold text-justify text-red-400'>Hello, I Am</h2> 
                <h1 className='text-3xl font-bold text-justify'>Hira Mandal</h1>   
                <h1 ref={typedRef} className='text-2xl font-bold text-justify'></h1>
                <p className='text-[18px] text-justify'>Need A Cool Website That Makes Your Business Shine Online? I'm Your Guy! I'll Use My Skills In Coding And Design To Make A Website That Looks Awesome, Works Great, And Pops Up Easily On Google. Whether You Want Something Simple Or Super Fancy, I've Got You Covered!</p>
                <a href={pdf} download="Resume.pdf" className='dnld w-40 p-2 rounded-md text-orange-300 bg-gray-900 outline-orange-700'>Download Resume</a>
            </div>
            <div className="right-hero w-[#600]" >
                <img className='hero-img rounded-e-full w-80 flex justify-center items-center' src={`${hero.imgSrc}`} alt="hero-image"
                   data-aos="fade-up-left"
                   data-aos-duration="1000"
                />
            </div>
        </div>
        </>
    )
} 

export default Home;