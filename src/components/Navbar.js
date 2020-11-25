import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    
    return (

      <div className="wrapper ">

        <nav className="nav-main" id="nav-main">
          <div className="top">
            <div className="header">
            <div className="pull-left"></div>

            </div>
            <ul className="menu active" id="menu-main">
              <li><span className="item open_login">Register / Log in</span></li>
              <li className="active"><a href="/" className="item">Home</a></li>
              <li><a href="/" className="item">Events</a></li>
              <li><a href="/private" className="item">Account</a></li>
            </ul>
          </div>
        </nav>

        <header id="header">
          <div className="header-main">
          <div class="box-left">
                <div class="item bt-menu js-nav-main" data-menu-id="menu-main">
                    <Link to= '/events'> <span class="has-tablet">EVENTS</span></Link>
                </div>
            </div>
            <div className="box-right">

              {isLoggedin ? (
                <>
                  <div className="item login">
                    <strong><a className="text-black open_login" href="/private">{user.username}</a></strong>
                    
                    <button className="text-black open_login" onClick={logout}>
                      logout </button>
                  </div>

                  <div className="item has-tablet" id="bt-submit">
                    <a href="/add-event" className="button">
                      <span>SUBMIT YOUR EVENT</span>
                    </a>
                  </div>
                </>


              ) : (
                  <>
                    <div className="item login">
                      <span>Are you a member?</span> <strong><a className="text-black open_login" href="/login">Register / log in</a></strong>
                    </div>

                    <div className="item has-tablet" id="bt-submit">
                      <a href="/login" className="button">
                        <span>SUBMIT YOUR EVENT</span>
                      </a>
                    </div>
                  </>
                )}


            </div>
            <div className="logo-header">
                    <a href="/"><img src="./images/SandGrainLogo.png" alt="logo" className="lazy lazy-loaded" style={{ maxWidth: "90px" }}></img></a>
                  
                </div>
          </div>
        </header>
      </div>
    )
  }
}





export default withAuth(Navbar);
