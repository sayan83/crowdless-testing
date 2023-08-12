import React,{Component} from 'react';
import './login.css';

class Login extends Component {
    handleLogIn = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username,password);
        //Attempt login here
    }
    showSignUp = () => {
        document.getElementById('login-wrapper').classList.add('hide');
        document.getElementById('signup-wrapper').classList.remove('hide');
    }
    showLogIn = () => {
        document.getElementById('login-wrapper').classList.remove('hide');
        document.getElementById('signup-wrapper').classList.add('hide');
    }
    handleSignUp = () => {
        var email = document.getElementById('Email').value;
        var password = document.getElementById('Password').value;
        var name = document.getElementById('Name').value;
        var phone = document.getElementById('Phone').value;
        let error_exists = false;
        if(!name){
            document.getElementById('name-empty').classList.remove('hide');
            error_exists = true;
        }
        else{
            document.getElementById('name-empty').classList.add('hide');
        }
        if(!password){
            document.getElementById('password-empty').classList.remove('hide')
            error_exists = true;
        }
        else{
            document.getElementById('password-empty').classList.add('hide');
        }
        if(!email){
            document.getElementById('email-empty').classList.remove('hide')
            error_exists = true;
        }
        else{
            document.getElementById('email-empty').classList.add('hide');
        }
        if(!phone){
            document.getElementById('phone-empty').classList.remove('hide')
            error_exists = true;
        }
        else{
            document.getElementById('phone-empty').classList.add('hide');
        }
        if(!error_exists){
            console.log(name,email,phone,password);
            //attempt signup here.
            // Below texts goes to callback function of signup
            document.getElementsByClassName('signup-form')[0].classList.add('hide');
            document.getElementsByClassName('verify-phone')[0].classList.remove('hide');
        }
    }
    handleVerify = () => {
        
    }
    render() {
        return(
            <div className="login-signup-container">
                <div id="login-wrapper" className="login-wrapper">
                    <input id="username" type="text" placeholder="Email or Mobile"></input>
                    <br></br>
                    <input id="password" type="password" placeholder="Password"></input>
                    <br></br>
                    <button id="login-button" className="button-style" onClick={this.handleLogIn}>LOG IN</button>
                    <div id="signup" className="switch-button" onClick={this.showSignUp}>Sign Up</div>
                </div>
                <div id="signup-wrapper" className="signup-wrapper hide">
                    <div className="signup-form">
                        <input id="Name" type="text" placeholder="Name"></input><div id="name-empty" className="empty-value-error hide">Name cannot be empty</div>
                        <br></br>
                        <input id="Email" type="email" placeholder="Email"></input><div id="email-empty" className="empty-value-error hide">Email cannot be empty</div>
                        <br></br>
                        <input id="Phone" type="number" placeholder="Phone"></input><div id="phone-empty" className="empty-value-error hide">Phone No cannot be empty</div>
                        <br></br>
                        <input id="Password" type="password" placeholder="Password"></input><div id="password-empty" className="empty-value-error hide">Password cannot be empty</div>
                        <br></br>
                        <button id="signup-button" className="button-style" onClick={this.handleSignUp}>SIGN UP</button>
                        <div id="login" className="switch-button" onClick={this.showLogIn}>Log In</div>
                    </div>
                    <div className="verify-phone hide">
                        <div className="instructions">Enter Verification code send to your Phone</div>
                        <input id="verify-code" type="number" placeholder="Verification Code"></input>
                        <button id="verify-button" className="button-style" onClick={this.handleVerify}>VERIFY</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;