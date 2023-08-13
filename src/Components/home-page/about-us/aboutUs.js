import React, {Component} from 'react';
import './aboutUs.css';

class AboutUs extends Component{
    render() {
        return(
            <div id="aboutus" className="about-us-container">
                <div className="aboutus-heading">ABOUT US</div>
                <div className="description">
                In this busy world, we respect everybody’s time 
                And to help people get the most of their time, 
                we are building a platform that gives individuals 
                the ability to make the most of their time, by knowing
                upfront about crowd levels at their destination and planning
                visits accordingly. No more wait times in queues, visit when 
                <b> crowd’s-less</b> or book an appointment online before visit.
                </div>
            </div>
        )
    }
}

export default AboutUs;