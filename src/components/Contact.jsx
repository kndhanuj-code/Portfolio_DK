import React from 'react'
import { useFormik } from 'formik'

import './Portfolio.css'

const Contact = () => {


  // Formik hook
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
   
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values)
      alert("Message sent successfully!")
      resetForm()
    }
  })

  return (
    <div id="contact">
      <hr style={{ color: 'white', marginLeft: '100px', marginRight: '100px' }} />

      <br /><br /><br />

      <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        <div style={{ backgroundColor: 'red' }}>
          <p style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
            Feel free to reach out to me at any time and I am open to discussing any projects or opportunities
          </p>
        </div>
      </div>

      <br /><br /><br />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>Get in</h1>
        <h1 style={{ color: 'gray', paddingLeft: '4px' }}>Touch</h1>
      </div>

      <br /><br /><br />

      <div style={{ display: 'flex' }}>
        <div style={{ color: 'white', paddingLeft: '300px' }}>
          <p>Namakkal - 637213</p>
          <p>+91 9360543006</p>
         <p>
  <a
    href="mailto:kndhanuj@gmail.com"
    style={{ color: 'white', textDecoration: 'none' }}
  >
    kndhanuj@gmail.com
  </a>
</p>

        </div>

        <form onSubmit={formik.handleSubmit}>
          <div style={{ paddingLeft: '400px', width: '450px' }}>

            <input type="text"name="name"placeholder="Name"value={formik.values.name} onChange={formik.handleChange}onBlur={formik.handleBlur}style={{ width: '250px' }}/>
            <br /><br />

            <input type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} style={{ width: '250px' }} />
           <br /><br />

            <textarea name="message"placeholder="Message" value={formik.values.message} onChange={formik.handleChange}onBlur={formik.handleBlur} style={{ width: "250px", height: "100px", padding: "8px", resize: "none" }}/>
             <br /><br />

            <button
              type="submit" className="btn btn-primary" style={{ width: '250px' }} disabled={formik.isSubmitting}>Send
            </button>

          </div>
        </form>
      </div>

      <br /><br /><br /><br />
    </div>
  )
}

export default Contact
