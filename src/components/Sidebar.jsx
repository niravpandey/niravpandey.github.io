import React, {useState} from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return(
        <>
        <button className="hamburger" onClick={toggleSidebar}>
        ☰
        </button>

        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Nirav Pandey</h2>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
        {isOpen&& <div className='overlay'onClick={toggleSidebar}></div>}
        </>
    );
}
