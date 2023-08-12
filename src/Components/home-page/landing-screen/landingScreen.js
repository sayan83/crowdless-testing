import React, {Component} from 'react';
import './landingScreen.css';
import searchbuttonicon from '../../../assets/search-icon.svg'

class LandingScreen extends Component{
    render() {
        return(
            <div className="landing-screen-container">
                <div className="landing-text">
                    <div className="landing-text-small">GET RID OF</div>
                    <div className="landing-text-big">LONG QUEUES</div>
                    <div className="landing-text-small">AND</div>
                    <div className="landing-text-big">WAITING TIME</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="ENTER STORE NAME OR YOUR LOCATION" id="search-input"></input>
                    <button className="search-button button-style"><img src={searchbuttonicon} alt="search-icon"></img></button>
                    {/* <img src={searchbuttonicon} alt="search-button" className="search-button"></img> */}
                </div>
            </div>
        )
    }
}

export default LandingScreen;