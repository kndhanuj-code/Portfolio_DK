import React from 'react'
import './Portfolio.css'
import dhlogo from "../assets/nlogoo.png";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import Dhanuj from "../assets/port.webp";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (

    <div >
<nav>
  <img src={dhlogo} alt="logo" />

  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
  

      <section className="home" id="home">
        <div className="home-content">
          <h1>          
            Hi, I'm <span>Dhanuj</span>
          </h1>

          <h3>
            Software <span>Developer</span>
          </h3>

          <p>
           MERN Full Stack Developer with experience in building scalable web applications
           using MongoDB, Express.js, React.js, and Node.js. Skilled in RESTful API
            development, JWT authentication, CRUD operations, responsive UI design,
            state management, and Git-based version control.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/dhanuj-k-472944392/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>

          <a href="#" className="one" >Download CV</a>
        </div>
      </section>
      
      
      <div style={{ paddingTop: '100px' }}>
         <hr style={{ color: 'white', marginLeft: '100px', marginRight: '100px' }} />
       </div>
      
      

      
      
    </div>


  )
}

export default Home
