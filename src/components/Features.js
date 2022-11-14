
import React from 'react'
import companyFeature from '../img/man.jpg';
import '../style.css';

const Features =(props) =>{
    return(
        <React.Fragment>
            <section id="feature">
                <div className="title-text">
                    <p>FEATURES</p>
                    <h1>Why Choose Us</h1>
                </div>
                    <div className="feature-box">
                    <div className="features">
                        <h1>Experienced Staff</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga magni nobis reprehenderit, unde hic? Rem, est in. Minus ipsum temporibus veniam exercitationem vero dolorum hic, deserunt distinctio accusamus quas!</p>
                    </div>

                    <div className="features-img">
                        <img src={companyFeature} alt="man" />
                    </div>
                </div>   
            </section>
        </React.Fragment>
    )
        
} 
  
 
    
export default Features