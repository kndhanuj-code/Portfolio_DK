import React from 'react'
import Container from 'react-bootstrap/Container';


const Education  = () => {
  return (
    <div id="education">
      <div className="from-top" style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', color: 'white' }}>
        <h1>Education</h1>
      </div>
      <br />
      <br />
      <Container>
        <div style={{ display: 'flex' }}>
          <div className="from-left">
            <p style={{ color: 'white' }}>Bharathidasan University</p>
          </div>

          <div className="from-right" style={{ color: 'white', paddingLeft: '625px' }}>
            <h5> Master of Science - PHYSICS</h5>
            <h5>2023 - 2025</h5>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <div className="from-left" style={{ color: 'white', width: '300px' }}>
            <p>Vivekanandha matric hr sec school</p>
          </div>
          <div className="from-right" style={{ color: 'white', paddingLeft: '500px' }}>
            <h5>Higher Secondary School Certificate - Biology Maths</h5>
            <h5>Percentage - 75.16</h5>

            <h5>2019</h5>
          </div>
        </div>
        <br />
        <br />
        <br />
           
      </Container>
    </div>
  )
}

export default Education 
