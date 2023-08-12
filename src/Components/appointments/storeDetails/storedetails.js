import React, { Component } from 'react';
import SkeletonLoader from 'tiny-skeleton-loader-react';

class StoreDetail extends Component {
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
            </div>
        )
    }
}
export default StoreDetail;