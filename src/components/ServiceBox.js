
import React from 'react'
import '../style.css';
import SingleService from '../components/SingleService';
import SingleService1 from '../img/s1.jpg';
import SingleService2 from '../img/s2.jpg';
import SingleService3 from '../img/s3.jpg';
import SingleService4 from '../img/s4.jpg';

const ServiceBox = (props) => {
    return(
        <React.Fragment>
            <div className="service-box">
                <SingleService src = {SingleService1}>
                <div className="service-desc">
                    <h1>Hair Styling</h1>
                    <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                </SingleService>
                <SingleService src = {SingleService2}>
                <div className="service-desc">
                    <h1>Facial Treatment</h1>
                    <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                </SingleService>
                <SingleService src = {SingleService3}>
                <div className="service-desc">
                    <h1>Make Up</h1>
                    <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                </SingleService>
                <SingleService src = {SingleService4}>
                <div className="service-desc">
                    <h1>Nail designs</h1>
                    <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                </SingleService>
            </div>
        </React.Fragment>
    )
        
}

export default ServiceBox