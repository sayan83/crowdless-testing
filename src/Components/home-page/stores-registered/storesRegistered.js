import React, {Component} from 'react';
import './storesRegistered.css';
import storeIcon from '../../../assets/footcounticon.svg';

class StoresRegistered extends Component{
    render() {
        return(
            <div className="stores-registered-container">
                <div className="stores-registered-heading">STORES REGISTERED WITH US</div>
                <div className="stores-slider">
                    <div className="stores-slider-col">
                        <img src={storeIcon} alt="store_name" className="registered-store-logo"></img>
                        <div className="registered-store-name">StarStore</div>
                    </div>
                    <div className="stores-slider-col">
                        <img src={storeIcon} alt="store_name" className="registered-store-logo"></img>
                        <div className="registered-store-name">StarStore</div>
                    </div>
                    <div className="stores-slider-col">
                        <img src={storeIcon} alt="store_name" className="registered-store-logo"></img>
                        <div className="registered-store-name">StarStore</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoresRegistered;