import React from 'react'
import '../style.css';

const TestimonialUser = (props) =>{
    
    return(
        <React.Fragment>
           <div className="user">
                <img src={props.src} alt="client"/>
                <div className="user-info">
                    {props.children}
                </div>
           </div> 
        </React.Fragment>
    )       
}
                 
export default TestimonialUser