import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Private extends Component {
  render() {
    const { user, name, img, phone, email } = this.props;
    return (
      <div>
        <div className="main-dashboard-elements">
          <h3>Hello {user.username}</h3>
          <p>Here you can personalize your profile and check all the information about the events you have joined and created.</p><br></br>
        </div>

        <div className="card">
          <div className="top">
            <h2 className="name">{this.props.name}</h2>
            <img className="circle-img" src={this.props.img} alt="avatar_img" />
          </div>
          <div className="bottom">
            <p className="info">{this.props.phone}</p>
            <p className="info">{this.props.email}</p>
          </div>
        </div>

        <div>
          <Link to="/user/userCreatedEvents">
            <h3>Created events</h3> </Link>
          <p>Create, edit and remove your events.</p><br></br>
        </div>

        <div>
          <Link to= "/user/userJoinedEvents">
          <h3>Joined events</h3></Link>
          <p>Create, edit and remove your events.</p><br></br>
        </div>

        <div>
          <Link to= "/user/userDetails">
          <h3>Edit profile</h3></Link>
          <p>Update your details.</p><br></br>
        </div>

        <div>
          <Link to="/add-event">
            <h3>Create a new event </h3>
          </Link>
          <p>Ready to organize a new adventure?</p>
        </div>
      </div>
    );
  }
}

export default withAuth(Private);
