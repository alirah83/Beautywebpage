import React from 'react'
import '../style.css';

const Footer = (props) =>{
    return(  
      <section id="footer">
      <div className="title-text">
          <p>CONTACT US</p>
          <h1>Visit Shop Today</h1>
      </div>

      <div className="footer-row">
          <div className="footer-left">
              <h1>Opening Hours</h1>
              <p>Monday to Friday - 9am to 6pm</p>
              <p>Saturday - 9am to 11am</p>
          </div>

          <div className="footer-right">
              <h1>Get in Touch</h1>
              <p>#36, Via Roma, Milan</p>
              <p>Alirah83@gmail.com</p>
              <p>09302081107</p>
          </div>
      </div>
  </section>
      
  )
    
}

export default Footer