import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

import EventForm from "./components/EventForm";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import EventsList from "./components/EventsList";
import SingleEvent from "./components/SingleEvent";
import UserCreatedEvents from "./components/UserCreatedEvents";
import JoinedEvents from "./components/JoinedEvents";


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='container'>
          <Navbar />

          <Switch>
            <Home exact path='/' component={Home} />
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/private' component={Private} />
            <PrivateRoute exact path='/add-event' component={EventForm} />
            <PrivateRoute exact path='/add-event/:id' component={EventForm} />
            <PrivateRoute exact path='/user/userDetails' component={UserDetails} />
            <PrivateRoute exact path='/events' component={EventsList} />
            <PrivateRoute exact path='/event/:id' component={SingleEvent} />
            <PrivateRoute exact path='/user/UserCreatedEvents' component={UserCreatedEvents}/>
            <PrivateRoute exact path='/user/userJoinedEvents' component={JoinedEvents}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
