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
                <a href='/#contactus'><button className="button-style">CONTACT US</button></a>
                <div className="why-register-question">WHY REGISTER?</div>
                <div className="store-benefits-row">
                    <div className="store-benefit-col">
                        <img src={MoreCustomerImg} alt="get-more-customers" className="store-benefit-image"></img>
                        <div className="store-benefit-heading">
                            MORE CUSTOMERS
                        </div>
                        <div className="store-benefit-description">
                            Get analytics to drive more customers.
                        </div>
                    </div>
                    <div className="store-benefit-col">
                        <img src={MoreEfficientImg} alt="be-more-efficient" className="store-benefit-image"></img>
                        <div className="store-benefit-heading">
                            MORE EFFICIENCY
                        </div>
                        <div className="store-benefit-description">
                            Know the expected crowd before hand to manage efficiently
                        </div>
                    </div>
                    <div className="store-benefit-col">
                        <img src={MoreProfitImg} alt="earn-more-profit" className="store-benefit-image"></img>
                        <div className="store-benefit-heading">
                            MORE PROFIT
                        </div>
                        <div className="store-benefit-description">
                            With more customers and more efficiency comes more profit
                        </div>
                    </div>
                </div>
                {/* <div className="registration-cost">ALL AT NO COST</div> */}
            </div>
        )
    }
}

export default WhyRegister;