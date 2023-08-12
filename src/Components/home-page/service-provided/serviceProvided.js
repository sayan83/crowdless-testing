import React, {Component} from 'react';
import './serviceProvided.css';
import footcounticon from '../../../assets/footcounticon.svg'

class ServiceProvided extends Component{
    render() {
        return(
            <div id="services" className="service-provided-container">
                <div className="service-heading">SERVICES OFFERED</div>
                <div className="services-wrapper">
                    <div className="services-col">
                        <div className="services-row">
                            <img className="service-icons" src={footcounticon} alt="realtime foot count"></img>
                            <div className="service-name">REALTIME FOOT COUNT</div>
                        </div>
                        <div className="services-row">
                            <img className="service-icons" src={footcounticon} alt="e-appointment booking"></img>
                            <div className="service-name">E-APPOINTMENT BOOKING</div>
                        </div>
                        <div className="services-row">
                            <img className="service-icons" src={footcounticon} alt="traffic prediction"></img>
                            <div className="service-name">TRAFFIC PREDICTION</div>
                        </div>
                    </div>
                    <div className="services-col">
                        <div className="services-row">
                            <img className="service-icons" src={footcounticon} alt="curbside-pickup"></img>
                            <div className="service-name">CURBSIDE PICKUP</div>
                        </div>
                        <div className="services-row">
                            <img className="service-icons" src={footcounticon} alt="shop from home"></img>
                            <div className="service-name">SHOP FROM HOME</div>
                        </div>
                        <div className="services-row">
                            <img className="service-icons" src={footcounticon} alt="volunteer"></img>
                            <div className="service-name">VOLUNTEER</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceProvided;