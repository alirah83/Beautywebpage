
import React from 'react'
import '../style.css';
import ServiceBox from './ServiceBox'

const Service = (props) => {
    return(
        <React.Fragment>
            <section id="service">
                <div className="title-text">
                    <p>SERVICES</p>
                    <h1>We Provide Better</h1>
                </div>
                <ServiceBox/>
            </section>
        </React.Fragment>
    )        
}     
export default Service