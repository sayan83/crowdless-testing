import React, {Component} from 'react';
import './whyRegister.css';
import MoreCustomerImg from '../../../assets/moreCustomer.svg';
import MoreEfficientImg from '../../../assets/moreEfficient.png';
import MoreProfitImg from '../../../assets/moreProfit.png';

class WhyRegister extends Component{
    render() {
        return(
            <div id="whyregister" className="why-register-container">
                <div className="register-your-store-question">WANT TO REGISTER YOUR STORE?</div>
                <button className="button-style">REGISTER NOW</button>
                <div className="why-register-question">WHY REGISTER?</div>
                <div className="store-benefits-row">
                    <div className="store-benefit-col">
                        <img src={MoreCustomerImg} alt="get-more-customers" className="store-benefit-image"></img>
                        <div className="store-benefit-heading">
                            MORE CUSTOMERS
                        </div>
                        <div className="store-benefit-description">
                            Lorem Ipsum descritipn about this beefit and how.
                        </div>
                    </div>
                    <div className="store-benefit-col">
                        <img src={MoreEfficientImg} alt="be-more-efficient" className="store-benefit-image"></img>
                        <div className="store-benefit-heading">
                            MORE EFFICIENCY
                        </div>
                        <div className="store-benefit-description">
                            Lorem Ipsum descritipn about this beefit and how.
                        </div>
                    </div>
                    <div className="store-benefit-col">
                        <img src={MoreProfitImg} alt="earn-more-profit" className="store-benefit-image"></img>
                        <div className="store-benefit-heading">
                            MORE PROFIT
                        </div>
                        <div className="store-benefit-description">
                            Lorem Ipsum descritipn about this beefit and how.
                        </div>
                    </div>
                </div>
                <div className="registration-cost">ALL AT NO COST</div>
            </div>
        )
    }
}

export default WhyRegister;