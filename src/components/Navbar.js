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

              <div className="pull-right">
                <div className="bt-close js-close-menu text-uppercase">close</div>
              </div>
            </div>
            <ul className="menu active" id="menu-main">
              <li><span className="item open_login">Register / Log in</span></li>
              <li className="active"><a href="/" className="item">Home</a></li>
              <li><a href="navbar.html" className="item">Events</a></li>
              <li><a href="/private" className="item">Account</a></li>
            </ul>
          </div>
        </nav>

        <header id="header">
          <div className="header-main">
            <div className="box-left">
            <div className="item bt-menu js-nav-main" data-menu-id="menu-main">
                        <div className="ico-menu">
                            <div className="bar" />
                            <div className="bar" />
                            <div className="bar" />
                        </div>
              </div>
            </div>
            <div className="box-right">
              <div className="item bt-search" id="js-search-container">
                <svg className="ico-svg" viewBox="0 0 14 14">
                  <use xlinkHref="/" />
                </svg>
              </div>

              {isLoggedin ? (
                <>
                  <div className="item login">
                    <span>Are you a member?</span> <strong><a className="text-black open_login" href="/private">{user.username}</a></strong>
                    <a type="hidden"><span hidden>span</span></a>
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
                    <a href="/"><img src="./images/SandGrainLogo.png" data-src="./images/homepage.png" data-src-2x="./images/homepage.png" className="lazy lazy-loaded" style={{ maxWidth: "90px" }}></img></a>
                  
                </div>
          </div>
        </header>
      </div>
    )
  }
}





export default withAuth(Navbar);
