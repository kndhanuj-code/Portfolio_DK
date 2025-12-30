import React from 'react'
import react from "../assets/react1.webp.png";
import html from "../assets/html2.png";
import css from "../assets/css.png";
import jas from "../assets/jas.webp";
import node from "../assets/node.png";
import mon from "../assets/mong.png";
import './Portfolio.css'


const Technologies = () => {
  return (
    <div id="skills">
       <div className="from-top" style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', color: 'white' }}>
         <h1>Technologies</h1>
       </div>
      <div className="from-left tech-wrapper" style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',gap: '30px',paddingTop: '70px'}}>
  
  <div className="image dance">
    <img src={react} alt="" />
  </div>

  <div className="image dance delay1">
    <img src={html} alt="" />
  </div>

  <div className="image dance delay2">
    <img src={css} alt="" />
  </div>

  <div className="image dance delay3">
    <img src={jas} alt="" />
  </div>

  <div className="image dance delay4">
    <img src={node} alt="" />
  </div>

  <div className="image dance delay5">
    <img src={mon} alt="" />
  </div>


</div>

      <br />
      <br />
      <hr style={{ color: 'white', marginLeft: '100px', marginRight: '100px' }} />
    </div>
  )
}

export default Technologies
