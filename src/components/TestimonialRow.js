import React from 'react'
import '../style.css';
import TestimonialCol from './TestimonialCol';

import TestimonialImg1 from '../img/img1.jpg';
import TestimonialImg2 from '../img/img2.jpg';
import TestimonialImg3 from '../img/img3.jpg';

const TestimonialUser = (props) =>{
    
    return(
        <React.Fragment>
            <div className="testimonial-row">
                <TestimonialCol src = {TestimonialImg1}>
                    <h4>Meryl</h4> 
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>       
                </TestimonialCol>
        
                <TestimonialCol src = {TestimonialImg2}>
                    <h4>Jahn</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>       
                </TestimonialCol>
                
                <TestimonialCol src = {TestimonialImg3}>
                    <h4>Diana</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>       
                </TestimonialCol>      
            </div>
        </React.Fragment>
    )       
}
                 
export default TestimonialUser