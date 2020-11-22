import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
 
        <div className="wrapper ">

          <header id="header">
            <div className="header-main">
              <div className="box-left">
                <div className="item bt-menu js-nav-main" data-menu-id="menu-main">

                  <a href="/"><img src="./images/SandGrainLogo.png" data-src="./images/homepage.png" data-src-2x="./images/homepage.png" className="lazy lazy-loaded" style={{ maxWidth: "100px" }}></img></a>
                </div>
              </div>
              <div className="box-right">
                <div className="item bt-search" id="js-search-container">
                  <svg className="ico-svg" viewBox="0 0 14 14">
                    <use xlinkHref="/" />
                  </svg>
                </div>
                <div className="item login">
                  <span>Are you a member?</span> <strong><a className="text-black open_login" href="/login">Register / log in</a></strong>
                </div>
                <div className="item has-tablet" id="bt-submit">
                  <a href="/submit/" className="button">
                    <span>SUBMIT YOUR EVENT</span>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
    )
  }
}





export default withAuth(Navbar);
