import React,{Component} from 'react';
import './appointment.css';
import StoreDetail from './storeDetails/storedetails';
import AppointmentDetails from './appointmentDetails/appointmentdetails';
import Footer from '../home-page/footer/footer';
import Navbar from '../home-page/navbar/navbar';
import short from 'short-uuid';
import axios from 'axios';
import config from '../../config/config';

class Appointment extends Component {
    constructor(props){
        super(props)
        this.state = {
            appointmentDetails: {
                appointmentId: '',
                estimatedTime: 0,
            },
            storeDetails: {
                storeName: '',
                storeAddress: '',
                storeLogoUrl: '', 
            }
        }
    }
    componentDidMount = () => {
        //Call api to fetch appointment status
        console.log('id',this.props.match)
        let appointmentIdShort = this.props.match.params.appointment_id;
        var translator = short();
        var longAppointmentId = translator.toUUID(appointmentIdShort);
        if(appointmentIdShort) {
            // axios.post(config.api.https + '/getappointmentdetails', { appointmentId: longAppointmentId, })
            // .then((response) => {
            //     console.log(response);
            //     let data = response.data;
            //     this.setState({
            //         appointmentDetails: {
            //             appointmentId: data.AppointmentID,
            //             estimatedTime: data.EstimatedAppointmentTime,
            //             status: data.Status
            //         },
            //         storeDetails: {
            //             storeName: data.storeName,
            //             storeAddress: data.storeAddress,
            //             storeLogoUrl: data.storeLogo, 
            //         }
            //     })
            // })
            // .catch(err => {
            //     console.error(err,err.response.status);
            //     // alert(err);
            //     //redirect to 404 not found page
            //     if(err.response.status){
            //         window.location.href="/404";
            //     }
            // });
            setTimeout(() => {
                let appointmentTime = new Date(new Date().getTime() + 3500000)
                this.setState({
                    appointmentDetails: {
                        appointmentId: longAppointmentId,
                        estimatedTime: appointmentTime,
                        status: 'Booked'
                    },
                    storeDetails: {
                        storeName: 'Star Store',
                        storeAddress: 'CE Avenue, Gbr Street, Kolkata',
                        storeLogoUrl: 'https://i.ibb.co/FBmytVW/Star-3.png',
                    }
                })
            },2000)
        }
        //just for testing
        // setTimeout(
        //     this.setState({
        //         appointmentDetails: {
        //             appointmentId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        //             estimatedTime: new Date().getTime()/1000
        //         },
        //         storeDetails: {
        //             storeName: 'STAR STORE',
        //             storeAddress: '123 STREET, ABC COLONY, STATE - XXXXXX',
        //             storeLogoUrl: 'https://crowdless-store-logo.s3.ap-south-1.amazonaws.com/starstoreLogo.svg', 
        //         }
        //     }),1500);
    }
    render() {
        return(
            <div className="appointment-container">
                <Navbar />
                <StoreDetail details={this.state.storeDetails}/>
                <AppointmentDetails details={this.state.appointmentDetails} />
                <Footer />
            </div>
        )
    }
}
export default Appointment;