import React from 'react';

const Home = () => {
  return (
    <div class="center-div main-dashboard">
      <div class="main-dashboard-elements">
        <h3>Your Profile</h3>
        <p>Personalize your profile and set all the information that you want to show.</p>
        <button class="fashion-button"><a href="/user/userDetails">Edit profile</a></button>
      </div>
      <div>
        <h3>Your Events</h3>
        <p>Create, edit and remove your events.</p>
        <button class="fashion-button"><a href="/user/userCreatedEvents">See events</a></button>
      </div>
      <div>
        <h3>Events you joined</h3>
        <p>Create, edit and remove your events.</p>
        <button class="fashion-button"><a href="/user/userJoinedEvents">check event</a></button>
      </div>
    </div>

  )
}

export default Home;