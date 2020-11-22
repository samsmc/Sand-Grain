import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>

        <div className="wrapper ">
          <nav className="nav-main" id="nav-main">
            <div className="top">
              <div className="header">
                <div className="pull-right">
                  <div className="bt-close js-close-menu text-uppercase">close</div>
                </div>
              </div>
            </div>
          </nav>
          <header id="header">
            <div className="header-main">

              <div className="box-left">
                <div className="item bt-menu js-nav-main" data-menu-id="menu-main">
                  <a href="/"><img classname="" src="./images/SandGrainLogo.png" style={{ maxWidth: "100px" }}></img></a>
                </div>
              </div>
              <div className="box-right">

                <div className="item login">
                  <span>Are you a member?</span> <strong><a className="text-black open_login" href="/login">Register /
                    log in</a></strong>
                </div>
                <div className="item has-tablet" id="bt-submit">
                  <a href="/submit/" className="button">
                    <span>SUBMIT YOUR EVENT!</span>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        
      </div>
    )
  }
}





export default withAuth(Navbar);
