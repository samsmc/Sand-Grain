import React from 'react';

const Home = () => {

  return (
    <div className="wrapper">
      <section id="content">
        <div className="content-view">
          <div className="box-site-head js-single-element">
            <div className="box-bg has-tablet">
              <a href="/sites/block-rage">
                <img src="./images/homepage.jpg" alt="Block Rage" width={1900} height={700} className="lazy lazy-loaded" />
              </a>
            </div>
            <div className="box-content">
              <a href="/sites/block-rage" className="item-link" aria-label="Block Rage" />
              <div className="inner vertical-center">
                <div className="box-info">
                  <div className="row">
                    <h2 className="heading-large"><a href="/sites/block-rage">Sand Grain</a></h2>
                  </div>
                  <div className="row">
                    <div className="by">
                      <strong>
                        <a href="/pgssoftware/">Everyone Counts</a></strong>
                    </div>
                  </div>
                  <div className="box-notesite js-notes">
                    <ul>
                      <li className="circle-note-progress style-design">
                        <div className="legend">You didn't know you could get so much from giving</div>
                      </li>
                    </ul>

                    <div>
            <a href="/events" id="volunteer-btn">I want to volunteer</a>
        </div>


                  </div>
                </div>
                <div className="box-breadcrumb">
                  <div className="box-left">
                    <span className="text-x-thin">November 19, 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="">
    
    <div className="">
        <h2>How it works</h2>
    </div>
    <div className="block">
        <div >
            <h3>Join and make a difference</h3>
            <div>Join our community and create great events to make the the difference.</div>
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