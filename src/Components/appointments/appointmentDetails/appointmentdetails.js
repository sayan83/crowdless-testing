import React,{Component} from 'react';
import './appointmentdetails.css';
import QRCode from 'qrcode';

class AppointmentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url : '',
            qrloaded : false,
        }
    }
    componentDidUpdate = () => {
        let appointmentId = this.props.details.appointmentId;
        if(appointmentId !== '' && !this.state.qrloaded) {
            QRCode.toDataURL(appointmentId, (err,data) => {
                if(err) {
                    alert('Error loading QR Code, please try again');
                    console.log(err);
                    return;
                }
                this.setState({
                    url: data,
                    qrloaded: true,
                })
            })
        }
    }
    componentDidMount = () => {
        // let url = '';
        // let appointmentId = this.props.details.appointmentId;
        // if(appointmentId !== '') {
        //     QRCode.toDataURL(appointmentId, (err,data) => {
        //         if(err) {
        //             alert('Error loading QR Code, please try again');
        //             return;
        //         }
        //         url = data;
        //         this.setState({
        //             url: data,
        //         })
        //     })
        // }
    }
    render() {
        let time = 'N/A',date = 'N/A',status = 'N/A';
        if(this.props.details && this.props.details.estimatedTime !== 0){
            // let d = `${new Date(this.props.details.estimatedTime * 1000)}`;
            let d = this.props.details.estimatedTime.toString()
            time = d.substr(16,5) + d.substr(24,9);
            date = d.substr(0,15);
            status = this.props.details.status;
        }
        return (
            <div className="appnt-details-row">
                <div className="appnt-details-col">
                    Your appointment is successfully booked <br></br><br></br>
                    TIME   : {time} <br></br>
                    DATE   : {date} <br></br>
                    STATUS : {status} <br></br><br></br><br></br>
                    A mail with QR Code and details have been sent to you. <br></br><br></br>
                    You will receive updates about your appointment on your phone and mail.
                </div>
                <div className="appnt-qrcode">
                    <img className="qrcode" src={this.state.url} alt="qrcode"></img>
                </div>
            </div>
        )
    }
}

export default AppointmentDetails;