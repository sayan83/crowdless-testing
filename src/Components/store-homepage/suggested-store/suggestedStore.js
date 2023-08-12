import React, {Component} from 'react';
import './suggestedStore.css';
import SkeletonLoader from 'tiny-skeleton-loader-react';

class SuggestedStore extends Component {
    render() {
        return(
            <div className="suggested-store-container">
                <div className="suggested-store-heading">SUGGESTED STORES NEARBY</div>
                    {this.props.stores && this.props.stores.loaded ?
                        this.props.stores.available? 'Map through list':<span style={{color: 'gray'}}>No registered stores found</span> :
                        <SkeletonLoader width="90%" 
                            style={{
                                margin: 'auto',
                                height: '200px'
                            }} 
                        />
                    }
            </div>
        )
    }
}

export default SuggestedStore;