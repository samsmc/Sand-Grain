import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className='navbar'>
        <Link to={"/"} id='home-btn'>
          <img classname="" src="./images/SandGrainLogo.png" style={{ maxWidth: "100px" }}></img>
        </Link>
        {isLoggedin ? (
          <>
            <p className='navbar-user'><a href="/private"> Account: {user.username}</a></p>
            <button className='navbar-button' onClick={logout}>
              Logout
            </button>
          </>
        ) : (
            <>
              <Link to='/login'>
                <button className='navbar-button'>Login</button>
              </Link>
              <br />
              <Link to='/signup'>
                <button className='navbar-button'>Sign Up</button>
              </Link>
            </>
          )}
      </nav>
    );
  }
}





export default withAuth(Navbar);
