import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

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
          <h3><a href="/user/userCreatedEvents">Created events</a></h3>
          <p>Create, edit and remove your events.</p><br></br>
        </div>
        <div>
          <h3><a href="/user/userJoinedEvents">Joined events</a></h3>
          <p>Create, edit and remove your events.</p><br></br>
        </div>
        <div>
          <h3><a href="/user/userDetails">Edit profile</a></h3>
          <p>Update your details.</p><br></br>
        </div>
        <div>
          <h3><a href="/add-event">Create a new event</a></h3>
          <p>Ready to organize a new adventure?</p><br></br>
        </div>
      </div>
    );
  }
}

export default withAuth(Private);
