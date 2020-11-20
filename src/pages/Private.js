import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Private extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="restaurant-headers restaurant-dashboard">
            <h1>Welcome {this.props.user.username}</h1>
            <div className="restaurant-dashboard-text">
              <h5>Manage your details</h5>
            </div>
          </header>
          <main className="center-div main-dashboard">
            <div className="main-dashboard-elements">
              <h3>Account details</h3>
              <p>Personalize your profile and set all the information.</p>
              <button className="fashion-button"><a href="/user/userDetails">Edit profile<hr /></a></button>
              <h3>Your joined events</h3>
              <p>Create, edit and remove your events.</p>
              <button className="fashion-button"><a href="/user/userJoinedEvents">check your joined events<hr /></a></button>
            </div>
            <div className="main-dashboard-elements">
              <h3>Your created events</h3>
              <p>Create the event that you believe that is going to change the world. You can modify it whenever you want!</p>
              <button className="fashion-button"><a href="/user/userCreatedEvents">Edit your events<hr /></a></button>
              <h3>Your Favorites</h3>
              <p>Check all the events you have liked.</p>
              <button className="fashion-button"> <a href="/user/favorites">Manage favorites<hr /></a></button>
              <h3>Your Favorites</h3>
              <p>Check how you have evolved from all the events you have yet participated.</p>
              <button className="fashion-button"> <a href="/user/evolves">voluntary level<hr /></a></button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withAuth(Private);
