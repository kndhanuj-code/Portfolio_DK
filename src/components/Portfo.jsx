






// import React from 'react'
// import './Portfolio.css'
// import dhlogo from "../assets/nlogoo.png";
// import { FaLinkedin } from "react-icons/fa";
// import { TbBrandGithubFilled } from "react-icons/tb";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaDownload } from "react-icons/fa6";
// import Container from 'react-bootstrap/Container';
// import Dhanuj from "../assets/port.webp";
// import lap from "../assets/lap.webp";
// import react from "../assets/react1.webp.png";
// import html from "../assets/html2.png";
// import css from "../assets/css.png";
// import jas from "../assets/jas.webp";
// import node from "../assets/node.png";
// import mon from "../assets/mong.png";
// const Portfolio = () => {
//   return (

//     <div className='bgc' >
// <nav>
//         <img src={dhlogo}/>
//         <ul>
//           <li><a href="#" className="active">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Skills</a></li>
//           <li><a href="#">Projects</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>

         
//       </nav>

//       <section className="home">
//         <div className="home-content">
//           <h1>  
//             Hi, I'm <span>Dhanuj</span>
//           </h1>

//           <h3>
//             Software <span>Developer</span>
//           </h3>

//           <p>
// MERN Full Stack Developer with experience in building scalable web applications
// using MongoDB, Express.js, React.js, and Node.js. Skilled in RESTful API
// development, JWT authentication, CRUD operations, responsive UI design,
// state management, and Git-based version control.
//           </p>

//           <div className="social-icons">
//             <a href="https://www.linkedin.com/in/dhanuj-k-472944392/"><i className="fa-brands fa-linkedin"></i></a>
//             <a href="#"><i className="fa-brands fa-facebook"></i></a>
//             <a href="#"><i className="fa-brands fa-github"></i></a>
//             <a href="#"><i className="fa-brands fa-instagram"></i></a>
//           </div>

//           <a href="#" className="one" >Download CV</a>
//         </div>
//       </section>
      
      
//       <div style={{ paddingTop: '100px' }}>
//          <hr style={{ color: 'white', marginLeft: '100px', marginRight: '100px' }} />
//        </div>
//       <div>

//          <h2 className="from-top" style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', color: 'white' }}>About ME</h2>

//        </div>
//        <div style={{ display: 'flex' }}>
//          <div className="from-left" style={{ paddingLeft: '120px', paddingTop: '100px' }}>
//            <img src={lap} alt="" />
//          </div>
//          <div className="from-right" style={{ paddingTop: '100px', width: '600px', paddingLeft: '100px' }}>
//            <p style={{ color: 'white' }}>
//              I am a MERN Full-Stack Developer with a strong focus on building scalable, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in designing RESTful APIs, implementing modular backend architectures, and developing responsive, component-driven UIs with optimized state management. I work with modern development practices such as JWT authentication, middleware-driven request handling, asynchronous operations, and clean code patterns. My goal is to engineer efficient full-stack solutions that deliver seamless user experiences, maintain strong performance, and support long-term scalability.
//            </p>
//          </div>
//        </div>
//        <div style={{ paddingTop: '100px' }}>
//          <hr style={{ color: 'white', marginLeft: '100px', marginRight: '100px' }} />
//        </div>
//        <div className="from-top" style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', color: 'white' }}>
//          <h1>Technologies</h1>
//        </div>
//       <div className="from-left tech-wrapper" style={{ 
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: '30px',
//   paddingTop: '70px'
// }}>
  
//   <div className="image dance">
//     <img src={react} alt="" />
//   </div>

//   <div className="image dance delay1">
//     <img src={html} alt="" />
//   </div>

//   <div className="image dance delay2">
//     <img src={css} alt="" />
//   </div>

//   <div className="image dance delay3">
//     <img src={jas} alt="" />
//   </div>

//   <div className="image dance delay4">
//     <img src={node} alt="" />
//   </div>

//   <div className="image dance delay5">
//     <img src={mon} alt="" />
//   </div>


// </div>

//       <br />
//       <br />
//       <hr style={{ color: 'white', marginLeft: '100px', marginRight: '100px' }} />

//       <div className="from-top" style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', color: 'white' }}>
//         <h1>Education</h1>
//       </div>
//       <br />
//       <br />
//       <Container>
//         <div style={{ display: 'flex' }}>
//           <div className="from-left">
//             <p style={{ color: 'white' }}>Bharathidasan University</p>
//           </div>

//           <div className="from-right" style={{ color: 'white', paddingLeft: '625px' }}>
//             <h5> Master of Science - PHYSICS</h5>
//             <h5>2023 - 2025</h5>
//           </div>
//         </div>
//         <br />
//         <br />
//         <br />
//         <div style={{ display: 'flex' }}>
//           <div className="from-left" style={{ color: 'white', width: '300px' }}>
//             <p>Vivekanandha matric hr sec school</p>
//           </div>
//           <div className="from-right" style={{ color: 'white', paddingLeft: '500px' }}>
//             <h5>Higher Secondary School Certificate - Biology Maths</h5>
//             <h5>Percentage - 75.16</h5>

//             <h5>2019</h5>
//           </div>
//         </div>
//         <br />
//         <br />
//         <br />
           
//       </Container>
//        <hr style={{ color: 'white', marginLeft: '100px', marginRight: '100px' }} />
//         <br />
//         <br />
//         <br />  
//         <div style={{paddingLeft:'30px' , paddingRight:'30px'}}>
//         <div style={{backgroundColor:'red' }}>
//           <p style={{color:'white' , display:'flex' , justifyContent:'center'}}>Feel free to reach out to me at any time and i am open to discussing any projects or opportunities</p>
//         </div>
//         </div>
//         <br />
//         <br />
//         <br />
//         <div style={{display:'flex' , justifyContent:'center'}}>
//           <div>
//           <h1 style={{color:'white'}}>Get in </h1>
//           </div>
//           <div>
//             <h1 style={{color:'gray' , paddingLeft:'4px'}}>Touch</h1>
//           </div>
          
//         </div>
//         <br />
//         <br />
//         <br />
//         <div style={{display:'flex'}}>
//           <div style={{color:'white' , paddingLeft:'300px'}}>
//             <p>Namakkkal - 637213</p>
//             <p>+919360543006</p>
//             <p>kndhanuj@gmail.com</p>
//           </div>
//           <div style={{paddingLeft:'400px', width:'450'}}>
//             <input placeholder='Name' style={{width:'250px'}} ></input>
//             <br />
//             <br />  
//             <input placeholder='Email' style={{width:'250px'}}></input>
//             <br />
//             <br />
//             <textarea placeholder="Message"style={{width: "250px",height: "100px", padding: "8px",resize: "none"}}></textarea>
//             <br />
//             <br />
           
//          <button type='submit'  class="btn btn-primary" style={{width:'250px'}}>send</button>
         
//           </div>
//         </div>
        
//        <br />
//        <br />
//        <br />
//        <br />
//     </div>


//   )
// }

// export default Portfolio

