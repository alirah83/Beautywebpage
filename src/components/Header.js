import React from 'react'
import companyLogo from '../img/logo.png';
import '../style.css';

const Header = (props) =>{
    return(  
        <section id="banner">
          <img src={companyLogo} alt='logo' className="logo"/>
          <div className="banner-text">
            <h1>Hair studio</h1>
            <p>Style Your Hair Is Style Your Life</p> 
            <div className="banner-btn">
                <a href="#"><span></span>Find Out</a>
                <a href="#"><span></span>Read More</a>
            </div>
           </div>  
        </section>
      
  )
    
}

export default Header