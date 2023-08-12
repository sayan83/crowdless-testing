import React, { Component } from 'react';
import './storeDetails.css';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import StoreTypeLogo from '../../../assets/storeType.svg';
import StoreContactLogo from '../../../assets/storeContact.svg';
import StoreliveCount from '../../../assets/liveCount.svg';

class StoreDetails extends Component {
    render() {
        console.log('ss', this.props);
        return (
            <div className="store-details-container">
                <div className="store-name">
                    {this.props.details && this.props.details.storeLogoUrl !== '' ?
                        <img src={this.props.details.storeLogoUrl} className="store-name-logo" alt="store-logo"></img> :
                        <SkeletonLoader width="80px" circle={true}
                            style={{
                                marginLeft: 'auto',
                                height: '80px'
                            }} 
                        />
                    }
                    {this.props.details && this.props.details.storeName !== '' ?
                        <div className="store-name-text">{this.props.details.storeName}</div> :
                        <SkeletonLoader width="25%"
                            style={{
                                marginRight: 'auto',
                                height: '80px'
                            }} 
                        />
                    }
                </div>
                <div className="short-address-line">
                    {this.props.details && this.props.details.storeAddress !== '' ?
                        this.props.details.storeAddress :
                        <SkeletonLoader width="30%"
                            style={{
                                margin: 'auto',
                                height: '20px'
                            }} 
                        />
                    }
                </div>
                <div className="other-details-row">
                    <div className="other-details-col">
                        <img src={StoreTypeLogo} className="details-logo" alt="Store-Type"></img>
                        <div className="details-text-col">
                            <div className="details-heading">STORE TYPE</div>
                            <div className="details-value">
                                {this.props.details && this.props.details.storeType !== '' ?
                                    this.props.details.storeType :
                                    <SkeletonLoader width="70%"
                                        style={{
                                            // margin: 'auto',
                                            height: '15px'
                                        }} 
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="other-details-col">
                        <img src={StoreliveCount} className="details-logo" alt="live foot count"></img>
                        <div className="details-text-col">
                            <div className="details-heading">LIVE FOOT-COUNT</div>
                            <div className="details-value">
                                {this.props.details && this.props.details.liveFootCount !== '' ?
                                    this.props.details.liveFootCount :
                                    <SkeletonLoader width="70%"
                                        style={{
                                            // margin: 'auto',
                                            height: '15px'
                                        }} 
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="other-details-col">
                        <img src={StoreContactLogo} className="details-logo" alt="Store contact"></img>
                        <div className="details-text-col">
                            <div className="details-heading">CONTACT STORE</div>
                            <div className="details-value">
                                Ph: {this.props.details && this.props.details.contactNo !== '' ?
                                    this.props.details.contactNo :
                                    <SkeletonLoader width="70%" block={false}
                                        style={{
                                            // margin: 'auto',
                                            height: '15px'
                                        }} 
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StoreDetails;