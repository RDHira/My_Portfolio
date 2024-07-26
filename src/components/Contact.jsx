import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      
     <div className="max-w-8xl mx-auto px-5 mt-40 bg-slate-800" id='contact'>
        <h4 className="text-white pt-12 mb-12 text-4xl font-medium">Portfolio</h4>
        <div className="text-white md:ml-16  flex  md:flex-row justify-between items-center gap-6 "
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
        >
            <div className="md:w-/3">
                <h5 className="mb-3 text-orange-300 text-3xl">Hira Mandal</h5>
                <a href="#home" className="block my-2 text-xl text-slate-300  "><span className='hover:text-blue-800 hover:underline'>About Me</span></a>
                <a href="#experience" className="block my-2 text-xl text-slate-300  "><span className='hover:text-blue-800 hover:underline'>Experience</span></a>
                <a href="#projects" className="block my-2 text-xl text-slate-300  "><span className='hover:text-blue-800 hover:underline'>Projects</span></a>
                <a href="#contact" className="block my-2 text-xl text-slate-300  "><span className='hover:text-blue-800 hover:underline'>Contact</span></a>
            </div>
            <div className="contact-icons  md:w-/3"
               data-aos="zoom-in-down"
               data-aos-duration="2000"
            >
                <h5 className=" mb-3 text-orange-300 text-3xl">Social Links</h5>
                <a href="https://github.com/RDHira" className="icons block my-2 ml-16 text-xl text-slate-300" target='_blank'><FaGithub className='inner-icon'/></a>
                <a href="https://www.linkedin.com/in/hiralal-mandal-6b07591a2/" className="icons block my-2 ml-16 text-xl text-slate-300" target='_blank'><FaLinkedin className='inner-icon'/></a>
                <a href="https://www.facebook.com/hiralal.mandal" className="icons block my-2 ml-16 text-xl text-slate-300" target='_blank'><FaFacebook className='inner-icon'/></a>
                
                
            </div>

            <div class="md:w-/3 rounded-lg">
               <h5 className=" text-orange-300 text-3xl">Contact</h5>
               <div className="relative mt-2">
                <div className="flex items-center gap-3 pt-2">
                <MdOutlineEmail className='text-2xl'/>
                <a href="https://mail.google.com/" className='text-xl text-sky-600 underline'>hiralal.sandeep@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 pt-2">
                <FaPhoneAlt className='text-xl'/>
                <h2><span className='text-red-300'>+977</span> - 9819745227</h2>
                </div>
                <div className="flex items-center gap-3 pt-2">
                <FaWhatsapp className='text-2xl'/>
                <h2><span className='text-red-300'>+977</span> - 9827721074</h2>
                </div>
                <div className="flex items-center gap-3 pt-2">
                <FaViber className='text-2xl'/>
                <h2><span className='text-red-300'>+977</span> - 9819745227</h2>
                </div>
               </div>
            </div>
        </div>
     </div>
    </>
  )
}
