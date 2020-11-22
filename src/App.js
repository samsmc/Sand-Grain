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

import NewEventForm from "./components/NewEventForm";
import NewEventPage from "./pages/NewEventPage";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import EventsList from "./components/EventsList";


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='container'>
          <Navbar />

          <Switch>
          <Home exact path='/' component={Home}/>
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/private' component={Private} />
            <NewEventPage exact path='/add-event' component={NewEventForm} />
            <UserDetails exact path='/user/userDetails' component={UserDetails} />
            <EventsList exact path= '/events' component = {EventsList} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
