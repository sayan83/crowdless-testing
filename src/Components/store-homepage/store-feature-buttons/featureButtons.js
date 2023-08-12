import React, {Component} from 'react';
import './featureButtons.css';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import BookAppointment from './bookAppointment/bookappointment';

class FeatureButtons extends Component{
    bookAppointmentClick = () => {
        this.props.bookAppointmentOnClick()
    }
    render() {
        return(
            <div className="feature-buttons-row">
                <div className="book-appointment-form hide">
                    <BookAppointment />
                </div>
                <div className="button-col">
                    <button className="button-style store-feature-button" onClick={this.bookAppointmentClick}>BOOK YOUR E-TICKET</button>
                    <div className="feature-status">
                        {this.props.facilities && this.props.facilities.eScheduling !== '' ?
                            this.props.facilities.eScheduling? '':'Currently Not Available' :
                            <SkeletonLoader width="100%" 
                                style={{
                                    height: '20px'
                                }} 
                            />
                        }
                    </div>
                </div>
                <div className="button-col">
                    <button className="button-style store-feature-button">SHOP FROM HOME</button>
                    <div className="feature-status">
                        {this.props.facilities && this.props.facilities.shopFromHome !== '' ?
                            this.props.facilities.shopFromHome? '':'Currently Not Available' :
                            <SkeletonLoader width="100%" 
                                style={{
                                    height: '20px'
                                }} 
                            />
                        }
                    </div>
                </div>
                <div className="button-col">
                    <button className="button-style store-feature-button">CURBSIDE PICKUP</button>
                    <div className="feature-status">
                        {this.props.facilities && this.props.facilities.curbsidePickup !== '' ?
                            this.props.facilities.curbsidePickup? '':'Currently Not Available' :
                            <SkeletonLoader width="100%" 
                                style={{
                                    height: '20px'
                                }} 
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureButtons;