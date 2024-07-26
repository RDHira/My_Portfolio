import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="contact-app max-w-4xl mx-auto mt-20" id='contact'>
        <h1 className='uppercase text-3xl text-center font-bold'>Contact Me</h1>

        <div className="contact-icons flex justify-center items-center gap-8  mt-16" 
             data-aos="zoom-in-down"
             data-aos-duration="2000"
      >
            <a href="https://www.instagram.com/" target='_blank' className="icons"><FaInstagramSquare className='inner-icon'/></a>
            <a href="https://www.facebook.com/" target='_blank' className="icons"><FaFacebook className='inner-icon'/></a>
            <a href="https://www.linkedin.com/feed/" target='_blank' className="icons"><FaLinkedin className='inner-icon'/></a>
            <a href="https://github.com/" target='_blank' className="icons"><FaGithub className='inner-icon'/></a>
            <a href="https://mail.google.com/" target='_blank' className="icons"><MdOutlineEmail className='inner-icon'/></a>
            <a href="https://twitter.com/" target='_blank' className="icons"><FaXTwitter className='inner-icon'/></a>
        </div>
        </div>
    </>
  )
}

export default Footer;
