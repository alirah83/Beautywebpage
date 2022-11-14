
import React from 'react'
import '../style.css';

const SingleService = (props) => {
    return(
        <React.Fragment>
            <div className="single-service">
                <img src = {props.src} alt="s1" />
                <div className="overlay"></div>
                {props.children}
            </div>
        </React.Fragment>
    )        
}  
    
export default SingleService