import React from 'react';

const Home = () => {

  return (
    <div>


      <section id="content">
        <div className="content-view">
          <div className="box-site-head">
            <div className="box-bg has-tablet">
              <a href="/" data-type="submission" className="js-visit-item">
                <img src="https://res.cloudinary.com/mscsam/image/upload/v1606317586/homepage_zj0ktr.jpg" alt="cover" width={1900} height={700} className="lazy lazy-loaded" />
              </a>
            </div>


            <div className="box-photo has-mobile">
              <img src="https://res.cloudinary.com/mscsam/image/upload/v1606317586/homepage_zj0ktr.jpg" data-src="https://res.cloudinary.com/mscsam/image/upload/v1606317586/homepage_zj0ktr.jpg" data-src-2x="https://res.cloudinary.com/mscsam/image/upload/v1606317586/homepage_zj0ktr.jpg" alt="cover" className="lazy lazy-loaded" />
            </div>

            <div className="box-content">
              <div className="inner vertical-center">
                <div className="box-info">
                  <div className="row">
                    <a href="/"><img src="./images/sdFont.png" style={{ maxWidth: "50%" }}></img></a>
                  </div>
                  <div className="row">
                    <div className="by">
                      <strong>
                        <h2 className="heading-large">Everyone Counts</h2></strong>
                    </div>
                  </div>
                  <div className="box-notesite js-notes">
                    <a href="/events" id="volunteer-btn">I want to volunteer</a>
                  </div>
                </div>
                <div className="box-breadcrumb">
                  <div className="box-left">
                    <div className="legend">You didn't know you could get so much from giving</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block border-bottom has-tablet">
            <div className="inner width-3">
              <div className="box-page-info" style={{ textAlign: 'center' }}>
                <h2 className="heading-large">Join our comunity, be a volunteer, make a difference in someone's life!</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <div className="inner vertical-center" style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 className="heading-large" style={{ color: '#49c5b6' }}>How it works</h2>
        <div className="circle-note-progress style-design">
          <div className="wrapper" style={{ textAlign: 'center' }}>
            <img src="./images/join.png" style={{ maxWidth: "90px" }} />
            <h3>Join and make a difference</h3>
            <h4 className="h4">Join our community and create great events to make the the difference.</h4>
          </div>
          <div className="wrapper" style={{ textAlign: 'center' }}>
            <img src="./images/explorer.png" style={{ maxWidth: "90px" }} />
            <h3>Explore</h3>
            <h4 h4 className="h4">Search for volunteer oportunities, meet other volunteers, make new friends.</h4>
          </div>
        </div>
      </div>
    </div>

  )
}



export default Home;