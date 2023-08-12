import React,{Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import homePage from './Components/home-page/homePage';
import login from './Components/login-page/login';
import storeHomePage from './Components/store-homepage/store-homepage';
import appointment from './Components/appointments/appointments';
import notFound from './Components/404/404notfound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <div className="content-wrap">
            <Switch>
              <Route path="/" component={homePage} exact/>
              <Route path="/login" component={login}/>
              <Route path="/store/:store_id" component={storeHomePage}/>
              <Route path="/appointment/:appointment_id" component={appointment}/>
              <Route path="/404" component={notFound}/>
              <Route path="/*" component={notFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
