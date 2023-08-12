import React, {Component} from 'react';
import './contactUs.css';

class ContactUs extends Component{
    render() {
        return(
            <div id="contactus" className="contact-us-container">
                <div className="contact-us-heading">CONTACT US</div>
                <div className="form-row" id="row-1">
                    <input id="name" type="text" className="contact-us-form-input contact-us-form-row-1" placeholder="YOUR NAME"></input>
                    <input id="email" type="email" className="contact-us-form-input contact-us-form-row-1" placeholder="YOUR EMAIL"></input>
                </div>
                <div className="form-row" style={{height: 45+"%"}}>
                    <textarea id="message" type="text" className="contact-us-form-input" placeholder="YOUR MESSAGE HERE"></textarea>
                </div>
                <div className="send-button-wrapper">
                    <button className="button-style">SEND</button>
                </div>
            </div>
        )
    }
}

export default ContactUs;