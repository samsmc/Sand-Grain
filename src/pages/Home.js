import React from 'react';

const Home = () => {

  return (
    <div className="">
      <div className="">
        <h1>Give your free time and skills for a good cause</h1>
        <div>
          <a href="/events" id="volunteer-btn">I want to volunteer
          <br></br><p>Find opportunities</p></a>
        </div>
      </div>
      <div className="">
        <h2>How it works</h2>
      </div>
      <div className="block">
        <div >
          <h3>Join</h3>
          <div>Join our community and create a great profile to make the most of our service.</div>
        </div>
        <div>
          <h3>Explore</h3>
          <p>Search for volunteer opportunities, trustees or volunteers, and make contact.</p>
        </div>
        <div>
          <h3>Find a match</h3>
          <p>Are you a good fit? Talk it through and find your match.</p>
        </div>
        <div>
          <h3>Make a difference</h3>
          <p>93% of charities say their Reach volunteer makes them more effective.</p>
        </div>
      </div>
    </div>

  )
}

export default Home;