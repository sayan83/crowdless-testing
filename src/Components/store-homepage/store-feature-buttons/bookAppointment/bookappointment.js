import React,{Component} from 'react';
import './bookappointment.css';
import axios from 'axios';
import config from '../../../../config/config';
import shortuuid from 'short-uuid';
import LoadingOverlay from 'react-loading-overlay';

class BookAppointment extends Component {
    constructor(props){
        super(props);

        this.state = {
            apiLoaded: false,
            AppointmentTime: 0,
            clicked: false,
        }
    }
    componentDidUpdate = () => {
        console.log('triggered');
        console.log(this.props.storeId,this.props.loadAPI)
        if(this.props.storeId && this.props.loadAPI && !this.state.apiLoaded) {
            // axios.post(config.api.https + '/getappointmenttime', { storeId: this.props.storeId, })
            // .then((response) => {
            //     console.log(response);
            //     let data = response.data;
            //     this.setState({
            //         apiLoaded: true,
            //         AppointmentTime: data.time
            //     });
            // })
            // .catch(err => {
            //     console.error(err);
            //     alert(err);
            //     //redirect to 404 not found page
            // });

            setTimeout(() => {
                let appointmentTime = new Date(new Date().getTime() + 3500000)
                this.setState({
                    apiLoaded: true,
                    AppointmentTime: appointmentTime
                });
            },2000);
        }
    }
    componentDidMount = () => {
        //Call api to get estimated appointmet Time
        console.log(this.props.storeId,this.props.loadAPI)
        // if(this.props.storeId && this.props.loadAPI) {
        //     axios.post(config.api.https + '/getappointmenttime', { storeId: this.props.storeId, })
        //     .then((response) => {
        //         console.log(response);
        //         let data = response.data;
        //         this.setState({
        //             AppointmentTime: data.time
        //         });
        //     })
        //     .catch(err => {
        //         console.error(err);
        //         alert(err);
        //         //redirect to 404 not found page
        //     });
        // }
    }
    closeAppointmentForm = () => {
        var bookForm = document.getElementsByClassName('book-appointment-form')[0];
        bookForm.classList.add('hide');
        this.setState({
            apiLoaded: false,
            AppointmentTime: 0,
        })
    }
    bookAppointmentClick = () => {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phoneNo = document.getElementById('phoneno').value;
        let checkbox = document.getElementById('accept-termsconditions').checked;
        if(name && email && phoneNo && checkbox){
            const appointmentDetails = {
                name,
                email,
                phoneNo,
                storeId: this.props.storeId
            }
            if(!this.state.clicked){
                this.setState({
                    clicked: true,
                })
            }
            console.log(appointmentDetails);
            // axios.post(config.api.https + '/bookappointment', appointmentDetails)
            // .then((response) => {
            //     console.log(response);
            //     let appointmentId = response.data.appointmentId;
            //     let shortapptid = shortuuid().fromUUID(appointmentId);
            //     window.location.href = `/appointment/${shortapptid}`;
            // })
            // .catch(err => {
            //     console.error(err);
            //     alert(err);
            //     //redirect to 404 not found page
            // });

            setTimeout(() => {
                let appointmentId = this.uuidv4()
                let shortapptid = shortuuid().fromUUID(appointmentId);
                window.location.href = `/appointment/${shortapptid}`
            },4500)
        }
        else if(!name){
            alert('Enter Your Name');
        }
        else if(!email){
            alert('Enter Your Email');
        }
        else if(!phoneNo){
            alert('Enter Your Phone No');
        }
        else if(!checkbox){
            alert('Accept Terms and Conditions');
        }
    }
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
    render() {
        let appointmentTime = 'Loading ...';
        if(this.state.AppointmentTime !== 0){
            console.log(this.state.AppointmentTime)
            // let d = `${new Date(this.state.AppointmentTime * 1000)}`
            let d = this.state.AppointmentTime.toString()
            appointmentTime = d.substr(16,5) + d.substr(3,12) + d.substr(24,9)
        }
        return(
            <div className="book-appointment-container">
                <LoadingOverlay active={this.state.clicked} spinner text='We are booking your appointment ...'
                                styles={{
                                    wrapper: {
                                        height: '100vh',
                                        width: '98vw',
                                        position: 'absolute'
                                    }
                                }}>
                    <div className="book-appointment-content">
                        <div className="close-form" onClick={this.closeAppointmentForm}>x</div>
                        <div className="book-appointment-heading">BOOK YOUR APPOINTMENT ONLINE</div>
                        <input id="name" type="text" className="book-appointment-form-input" placeholder="NAME"></input>
                        <input id="email" type="email" className="book-appointment-form-input" placeholder="EMAIL"></input>
                        <input id="phoneno" type="number" className="book-appointment-form-input" placeholder="PHONE NO"></input>
                        <div className="appointment-time">
                            <sup>* </sup>ESTIMATED APPOINTMENT TIME :- <span style={{color: 'green'}}>{appointmentTime}</span>
                        </div>
                        <div className="remainder-text">
                            PLEASE MAKE SURE YOU CAN REACH THE STORE AT THE ESTIMATED APPOINTMENT TIME
                        </div>
                        <div className="appointment-time-note">
                            <sup>* </sup>Estimated Appointment Time may change depending on several factor. 
                            We will update you with the same on your mail and phone no. 
                            Read Terms and Conditions for more information. 
                        </div>
                        <div className="accept-terms-conditions">
                            <input type="checkbox" id="accept-termsconditions"></input>
                            <span className="accept-terms-conditions-text">I accept the <a className="" href="#">Terms and Conditions</a></span>
                        </div>
                        <button className="button-style book-button" onClick={this.bookAppointmentClick}>BOOK APPOINTMENT</button>
                    </div>
                </LoadingOverlay>
            </div>
        )
    }
}

export default BookAppointment;