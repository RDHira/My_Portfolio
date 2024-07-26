import React from 'react'

function Navbar() {
  return (
    <header className='fixed top-0 left-0 right-0'>
        <nav className=' max-w-6xl mx-auto my-5 font-bold text-xl flex justify-between items-center'
        data-aos="fade-down"
        data-aos-duration="1000"
        >
            <div className=''>
                <a className="flex items-center gap-5" href="#home">
                    <img className='w-14 h-14' src="../public/Logo.svg" alt="logo" />
                    <span className='text-2xl font-bold'>HIRA</span>
                </a>
            </div>
            <div className="nav-list space-x-12">
                <a className='items' href="#home">About Me</a>
                <a className='items' href="#experience">Experience</a>
                <a className='items' href="#skills">Skills</a>
                <a className='items' href="#projects">Projects</a>
                <a className='items' href="#contact">Contact</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
