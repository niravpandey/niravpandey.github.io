import React from "react";
import "./styles.css";

const sidebarItems = [
  {
    title: "Home",
    image: "/images/home.svg",
    link: "#home"
  },
  {
    title: "About",
    image: "/images/about.svg",
    link: "#about"
  },
  {
    title: "Projects",
    image: "/images/folder.svg",
    link: "#projects"
  },
  {
    title: "Learn With Me",
    image: "/images/tut.svg",
    link: "#tutoring"
  },
  {
    title: "Resume",
    image: "/images/download.svg",
    link: "#resume"
  },
  
];

const sidebarSocials=[
  {image:'/images/li.png',
   link: 'http://linkedin.com/in/niravpandey05/'
  },
  {image:'/images/github.png',
    link: 'http://github.com/niravpandey/'
   }
]

const Socials=()=>{
  return (
    <div className="social-bar">
      {sidebarSocials.map((social, idx) => (
        <a
          key={idx}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title={social.alt}
        >
          <img src={social.image} alt={social.alt || 'social-icon'} />
        </a>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h1 className="title">NIRAVP</h1>
      {sidebarItems.map((item, index) => (
        <a href={item.link} className="sidebar-item" key={index}>
          <img
            src={item.image}
            alt={item.title}
            className="sidebar-item-image"
          />
          <span className="sidebar-item-title">{item.title}</span>
        </a>
      ))}
      <Socials/>
    </nav>
  );
};

export default Sidebar;