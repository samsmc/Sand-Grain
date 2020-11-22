import React from 'react';

const Home = () => {

  return (
    <div>


      <section id="content">
        <div className="content-view">
          <div className="box-site-head">
            <div className="box-bg has-tablet">
              <a href="/" data-type="submission" className="js-visit-item">
                <img src="./images/homepage.png" alt="" width={1900} height={700} className="lazy lazy-loaded" />
              </a>
            </div>


            <div className="box-photo has-mobile">
              <a href="/" data-type="submission" className="js-visit-item">
                <img src="./images/homepage.png" data-src="./images/homepage.png" data-src-2x="./images/homepage.png" alt="" className="lazy lazy-loaded" />
              </a>
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
              <div className="box-page-info">
                <h3 className="h4">Join our comunity, make friends, give your free time.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="inner vertical-center">
        <h2 className="heading-large">How it works</h2>
        <div className="circle-note-progress style-design">
          <div className="wrapper">
            <h3>Join and make a difference</h3>
            <p>Join our community and create great events to make the the difference.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <p>Search for volunteer opportunities, meet other volunteers, make new friends.</p>
          </div>
        </div>
      </div>
    </div>

  )
}



export default Home;