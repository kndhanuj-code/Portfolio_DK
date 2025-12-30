import React from 'react'
import lap from "../assets/lap.webp";
import './Portfolio.css'



const About  = () => {
  return (
    <div id="about">
      <div>

         <h2 className="from-top" style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', color: 'white' }}>About ME</h2>

       </div>
       <div style={{ display: 'flex' }}>
         <div className="from-left" style={{ paddingLeft: '120px', paddingTop: '100px' }}>
           <img src={lap} alt="" />
         </div>
         <div className="from-right" style={{ paddingTop: '100px', width: '600px', paddingLeft: '100px' }}>
           <p style={{ color: 'white' }}>
             I am a MERN Full-Stack Developer with a strong focus on building scalable, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in designing RESTful APIs, implementing modular backend architectures, and developing responsive, component-driven UIs with optimized state management. I work with modern development practices such as JWT authentication, middleware-driven request handling, asynchronous operations, and clean code patterns. My goal is to engineer efficient full-stack solutions that deliver seamless user experiences, maintain strong performance, and support long-term scalability.
           </p>
         </div>
       </div>
       <div style={{ paddingTop: '100px' }}>
         <hr style={{ color: 'white', marginLeft: '100px', marginRight: '100px' }} />
       </div>
    </div>
  )
}

export default About 
