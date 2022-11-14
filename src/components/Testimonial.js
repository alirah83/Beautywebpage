import React from 'react';

import '../style.css';
import TestimonialRow from './TestimonialRow';

const Testimonial = (props) =>{
    return(
        <section id="testimonial">
            <div className="title-text">
                <p>TESTIMONIAL</p>
                <h1>Our Clients Say</h1>
            </div>
            <TestimonialRow />
        </section>   
    )       
}
                 
export default Testimonial