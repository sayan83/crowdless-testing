import React, {Component} from 'react';
import './footer.css';
import CrowdlessLogo from '../../../assets/footcounticon.svg'

class Footer extends Component{
    render() {
        return(
            <div className="footer-container">
                <div className="footer-col" id="logo-col">
                    <div id="crowdlesslogofooter">
                        <img src={CrowdlessLogo} alt="Crowdless" className="footer-logo"></img>
                    </div>
                    <div className="copyright-text">@Copyright Crowdless 2023</div>
                </div>
                <div className="footer-col" id="office-col">
                    <div className="footer-heading">
                        OFFICE
                        <div className="footer-text">320/1, CE Block,</div>
                        <div className="footer-text">Kolkata - 700157</div>
                    </div>
                    <div className="footer-heading">
                        SERVING LOCATIONS
                        <div className="footer-text">Kolkata</div>
                        {/* <div className="footer-text">US</div> */}
                    </div>
                </div>
                <div className="footer-col">
                    <div className="footer-heading">
                        IMPORTANT LINKS
                        <div className="footer-text">Privacy Policy</div>
                        <div className="footer-text">Terms and Conditions</div>
                        <div className="footer-text">Our Team</div>
                        <div className="footer-text">Directions</div>
                        <br></br>
                        <div id="short-copyright-mobile" className="footer-heading">@Copyright Crowdless 2023</div>
                    </div>
                </div>
                <div className="footer-col">
                    <div className="footer-heading">CONNECT WITH US</div>
                    <div className="social-media-row">
                        <div className="green-circle">Ln</div>
                        <div className="green-circle">Tw</div>
                        <div className="green-circle">fb</div>
                    </div>
                    <div className="social-media-row" style={{height: 35+'px'}}>
                        <div className="social-media-label">LinkedIn</div>
                        <div className="social-media-label">Twitter</div>
                        <div className="social-media-label">facebook</div>
                    </div>
                    <div className="footer-text">
                        Ph: XXXXXXXXXX<br></br>
                        Email: contact@crowdless.online
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;