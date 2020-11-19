import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import NewEventForm from "./components/NewEventForm";
import NewEventPage from "./pages/NewEventPage";
import Home from "./pages/Home";

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
            <NewEventForm exact path='/newEvent' component={NewEventPage} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
