import React, {Component} from 'react';
import './homePage.css';
import Navbar from './navbar/navbar';
import LandingScreen from './landing-screen/landingScreen';
import ServiceProvided from './service-provided/serviceProvided';
import AboutUs from './about-us/aboutUs';
// import StoresRegistered from './stores-registered/storesRegistered';
import WhyRegister from './why-register/whyRegister';
import ContactUs from './contact-us/contactUs';
import Footer from './footer/footer';

class Homepage extends Component{
    render() {
        return(
            <div className="homepage-container">
                <Navbar />
                <LandingScreen />
                <ServiceProvided />
                <AboutUs />
                {/* <StoresRegistered /> */}
                <WhyRegister />
                <ContactUs />
                <Footer />
            </div>
        )
    }
}

export default Homepage;