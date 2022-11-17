
import React from 'react'
import companyMenu from '../img/menu.png';
import companyClose from '../img/close.png';
import '../style.css';

class Menu extends React.Component {

    ClickHandeler = () => {
        
        var menu = document.getElementById("menu");
        var sideNav = document.getElementById("sideNav");
        sideNav.style.right = sideNav.style.right || "-200px";
    
        if (sideNav.style.right === "-200px") {
            sideNav.style.right = "0"
            menu.src = companyClose;
        }
        else {
            sideNav.style.right = "-200px"
            menu.src = companyMenu;
        }
    }
    
    render() {

        return (
            <React.Fragment>
                <div id="sideNav">
                    <nav>
                        <ul>
                            <li><a href="#banner"> HOME </a></li>
                            <li><a href="#feature"> FEATURES </a></li>
                            <li><a href="#service"> SERVICES </a></li>
                            <li><a href="#testimonial"> TESTIMONIALS </a></li>
                            <li><a href="#footer"> MEET US </a></li>
                        </ul>
                    </nav>
                </div>
                <div id="menuBtn" >
                    <img src={companyMenu} alt="menu" id="menu" onClick={this.ClickHandeler}/>

                </div>
            </React.Fragment>
        )
    }
}

export default Menu