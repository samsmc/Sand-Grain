import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Private extends Component {

  render() {
    const { user } = this.props

    return (
      <div style={{ marginLeft: "30px" }}>
        <div className="main-dashboard-elements">
          <br></br>
          <h3>Hello {user.username}</h3>

          <div className="top" style={{textAlign:'right', marginRight:'50px'}}>
          <img width={417} height={298} alt="avatar_img" src={user.img} className="circle-img" style={{ width: 417, height: 298, backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'", backgroundSize: "cover" }} />
          <p className="info">{user.email}</p>
        </div>

        
          <p>Here you can personalize your profile and check all the information about the events you have joined and created.</p><br></br>
        </div>


        <div>
          <Link to="/user/userCreatedEvents">
            <h3>Created events</h3> </Link>
          <p>Create, edit and remove your events.</p><br></br>
        </div>

        <div>
          <Link to="/user/userJoinedEvents">
            <h3>Joined events</h3></Link>
          <p>Create, edit and remove your events.</p><br></br>
        </div>

        <div>
          <Link to="/user/userDetails">
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
