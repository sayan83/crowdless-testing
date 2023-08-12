import React, {Component} from 'react';
import './navbar.css';
import mobilemenuicon from '../../../assets/menu-icon.png';
import mobilemenuclose from '../../../assets/close.png';

class Navbar extends Component{

    showMenu = () => {
        var drawer = document.getElementById('drawer');
        var closedrawer = document.getElementById('close-drawer');
        var mobilemenu = document.getElementById('mobile-menu');
        if(drawer){
            drawer.style.width = "70vw";
            setTimeout(() => {
                closedrawer.classList.remove("hide");
                mobilemenu.classList.remove("hide");
            },500);
        }
    }
    hideMenu = () => {
        var drawer = document.getElementById('drawer');
        var closedrawer = document.getElementById('close-drawer');
        var mobilemenu = document.getElementById('mobile-menu');
        if(drawer) {
            drawer.style.width = "0";
            setTimeout(() => {
                closedrawer.classList.add("hide");
                mobilemenu.classList.add("hide");
            },200);
        }
    }
    render() {
        return(
            <div className="navbar-container">
                <div className="logo-image">
                    <img alt="crowdless logo"></img>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-menu-item"><a className="remove-decorations" href="/#services">SERVICES OFFERED</a></div>
                    <div className="navbar-menu-item"><a className="remove-decorations" href="/#aboutus">ABOUT US</a></div>
                    <div className="navbar-menu-item"><a className="remove-decorations" href="/#whyregister">REGISTER YOUR STORE</a></div>
                    <div className="navbar-menu-item"><a className="remove-decorations" href="/#contactus">CONTACT US</a></div>
                </div>
                <div className="login">
                    <div className="navbar-menu-item"><a className="remove-decorations" href="/login">LOG IN</a></div>
                </div>
                <div className="user-profile-icon hide">
                    
                </div>
                <div className="navbar-menu-icon-mobile">
                    <img src={mobilemenuicon} onClick={this.showMenu} alt="Menu"></img>
                </div>
                <div id="drawer" className="rightdrawer">
                    <img src={mobilemenuclose} className="close-drawer hide" alt="Close" onClick={this.hideMenu} id="close-drawer"></img>
                    <div className="menu-mobile hide" id="mobile-menu">
                        <div className="navbar-menu-item"><a className="remove-decorations navbar-menu-item-mobile" href="/#services">SERVICES OFFERED</a></div>
                        <div className="navbar-menu-item"><a className="remove-decorations navbar-menu-item-mobile" href="/#aboutus">ABOUT US</a></div>
                        <div className="navbar-menu-item"><a className="remove-decorations navbar-menu-item-mobile" href="/#whyregister">REGISTER YOUR STORE</a></div>
                        <div className="navbar-menu-item"><a className="remove-decorations navbar-menu-item-mobile" href="/#contactus">CONTACT US</a></div>
                        <div className="navbar-menu-item"><a className="remove-decorations navbar-menu-item-mobile" href="/login">LOG IN</a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;