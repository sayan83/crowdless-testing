import React, {Component} from 'react';
import './store-homepage.css';
import Navbar from '../home-page/navbar/navbar';
import StoreDetails from './store-details/storeDetails';
import FeatureButtons from './store-feature-buttons/featureButtons';
import CrowdinessGraph from './crowdiness-graph/crowdinessGraph';
import SuggestedStores from './suggested-store/suggestedStore';
import BookAppointment from './store-feature-buttons/bookAppointment/bookappointment'
import Footer from '../home-page/footer/footer';
import axios from 'axios';
import config from '../../config/config';



class StoreHomePage extends Component {
    state = {
        storeId: this.props.match.params.store_id,
        loadGetTimeAPI: false,
        storeDetails: {
            storeName: '',
            storeAddress: '',
            storeLogoUrl: '', 
            contactNo: '',
            storeType: '',
            liveFootCount: '',
        },
        storeTimings: {
            startTime: null,
            endTime: null
        },
        storeFacilitiesAvailable: {
            eScheduling: '',
            shopFromHome: '',
            curbsidePickup: ''
        },
        suggestedStores: {
            loaded: false,
        },
        estimatedTrafficGraph: {},
    }
    liveCountUpdate = (count) => {
        console.log('updating text now',count);
        this.setState({
            storeDetails : {
                ...this.state.storeDetails,
                liveFootCount: count,
            }
        })
    }
    componentDidMount = () => {
        console.log(this.props.match.params.store_id)
        let storeId = this.props.match.params.store_id;
        //Add api call here
        //call setstate after api fetches data
        // axios.post(config.api.https+'/getstoreinfo', {storeId,})
        //     .then((response) => {
        //         console.log(response);
        //         let data = response.data.data;
        //         this.setState({
        //             storeDetails: {
        //                 storeName: data.storeName,
        //                 storeLogoUrl: data.storeLogo,
        //                 storeAddress: data.storeAddress,
        //                 storeType: data.storeType,
        //                 liveFootCount: data.liveCount,
        //                 contactNo: data.ContactNo
        //             },
        //             storeFacilitiesAvailable: {
        //                 eScheduling: data.facilitiesAvailable.eAppointment,
        //                 shopFromHome: data.facilitiesAvailable.shopFromHome,
        //                 curbsidePickup: data.facilitiesAvailable.curbSidePickup
        //             },
        //             liveTrafficGraph: {
        //                 loaded: true,
        //                 available: false,
        //                 notAvailableReason: 'Live Graph Currently Not Available',
        //             },
        //             suggestedStores: {
        //                 loaded: true,
        //                 available: false,
        //             },
        //             storeTimings: {
        //                 startTime: data.storeTimings.startTime,
        //                 endTime: data.storeTimings.endTime,
        //             }
        //         });
        //     })
        //     .catch(err => {
        //         console.error(err,err.response.status);
        //         // alert(err);

        //         if(err.response.status === 400){
        //             window.location.href = "/404"
        //         }
        //         //redirect to 404 not found page
        //     });
        if(storeId === 'S001') {
            setTimeout(() => {
                this.setState({
                    storeDetails: {
                        storeName: 'Star Store',
                        storeLogoUrl: 'https://i.ibb.co/FBmytVW/Star-3.png',
                        storeAddress: 'CE Avenue, Gbr Street, Kolkata',
                        storeType: 'Grocery',
                        liveFootCount: 0,
                        contactNo: "+91 1234567890"
                    },
                    storeFacilitiesAvailable: {
                        eScheduling: true,
                        shopFromHome: false,
                        curbsidePickup: false
                    },
                    liveTrafficGraph: {
                        loaded: true,
                        available: false,
                        notAvailableReason: 'Live Graph Currently Not Available',
                    },
                    suggestedStores: {
                        loaded: true,
                        available: false,
                    },
                    storeTimings: {
                        startTime: '10:00',
                        endTime: '20:00',
                    }
                });
            },2400)
        }
        else {
            window.location.href = "/404"
        }
    }
    bookAppointmentOnClick = () => {
        if(this.state.storeFacilitiesAvailable.eScheduling !== '' && this.state.storeFacilitiesAvailable.eScheduling) {
            var bookForm = document.getElementsByClassName('book-appointment-form')[0];
            bookForm.classList.remove('hide');
            this.setState({
                loadGetTimeAPI: true,
            })
        }
    }
    render() {
        return(
            <div className="store-homepage-container">
                <div className="book-appointment-form hide">
                    <BookAppointment storeId={this.state.storeId} loadAPI={this.state.loadGetTimeAPI}/>
                </div>
                <Navbar/>
                <StoreDetails details={this.state.storeDetails} />
                <FeatureButtons facilities={this.state.storeFacilitiesAvailable} bookAppointmentOnClick={this.bookAppointmentOnClick} />
                <div className="graph-suggested-stores-row">
                    <CrowdinessGraph countUpdate={this.liveCountUpdate} 
                                    graphData={this.state.liveTrafficGraph} 
                                    storeTime={this.state.storeTimings} 
                                    storeId={this.state.storeId} />
                    <SuggestedStores stores={this.state.suggestedStores} />
                </div>
                <Footer />
            </div>
        )
    }
}
export default StoreHomePage;