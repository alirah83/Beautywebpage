import React from 'react'
import '../style.css';
import TestimonialUser from './TestimonialUser';

const TestimonialCol = (props) =>{
    
    return(
        <React.Fragment>
            <div className="testimonial-col">
                <TestimonialUser src={props.src} >
                    {props.children}   
                </TestimonialUser>              
            </div>
        </React.Fragment>
    )       
}
                 
export default TestimonialCol