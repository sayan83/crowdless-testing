import React, {Component} from 'react';
import './aboutUs.css';

class AboutUs extends Component{
    render() {
        return(
            <div id="aboutus" className="about-us-container">
                <div className="aboutus-heading">ABOUT US</div>
                <div className="description">
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book. It has 
                survived not only five centuries.  took a galley of 
                type and scrambled it to make a type specimen book. 
                It has survived not only five centuries
                </div>
            </div>
        )
    }
}

export default AboutUs;