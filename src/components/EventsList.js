import React from 'react';


const EventsList = () => {

    return (
                    
      <div>
        <div className="wrapper ">
          <section id="content">
            <div className="content-view">

               {/* EVENT LIST TITLE */}
              <div className="block p-0">
                <div className="inner">
                  <div className="box-heading">
                    <div className="box-left">
                      <h2 className="title">
                        <a href="/events" className="text-black">
                          Check
                        </a>
                      </h2>
                      <span>the events that are waiting for you!</span>
                    </div>
                  </div>

                  {/* EVENT CARD */}
                  <div className="grid">
                    <ul className="list-items list-flex list-one-row js-agency-content">
                      <li className="col-3">
                        <div className="box-item">
                          <figure className="rollover">
                            <a href="/events/:id" className="js-lightbox-sidebar">
                              <div className="box-photo">
                                <img width={417} height={298} alt="event" src="./images/evento1.jpg" data-srcset=".images/evento1.jpg" className="lazy lazy-loaded" srcSet="./images/evento1.jpg 1x, ./images/evento1.jpg 2x" />
                              </div>
                            </a>
                          </figure>
                          <div className="box-info">
                            <div className="content">
                              <div className="row" data-utc={1607011200}>
                                <strong>December 3, 2020</strong> 4:00 PM UTC
                              </div>
                              <div className="row row-auto">
                                <h3>
                                  <a href="/academy/webinar/live-design-jury-website-reviews-peter-smart-nahel-moussi-jonas-lempa">Collecting garbage from Barceloneta beach.</a>
                                </h3>
                              </div>
                              <div className="row">By 
                                <strong> Roi Docabo</strong>, <strong>Samantha Martins</strong>,
                             </div>
                            </div>
                            <div className="footer">
                              <div className="box-left">
                                <div className="box-users-likes">
                                  <ul className="list-users">
                                    <li>
                                      <div className="item js-user" data-username="benoitbeghyn">
                                        <a href="/benoitbeghyn/">
                                          <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/994337/5fad14710fa8a692263865.jpg" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/994337/5fad14710fa8a692263865.jpg" width={27} height={27} alt="Benoit Beghyn" className="lazy lazy-loaded" /></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item js-user" data-username="druhin">
                                        <a href="/druhin/">
                                          <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/827203/5f6784b8d080a258676743.png" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/827203/5f6784b8d080a258676743.png" width={27} height={27} alt="Druhin Tarafder" className="lazy lazy-loaded" /></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item js-user" data-username="premraval010">
                                        <a href="/premraval010/">
                                          <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/990210/5fa191d6b0260563038992.png" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/990210/5fa191d6b0260563038992.png" width={27} height={27} alt="premraval010" className="lazy lazy-loaded" /></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item js-user" data-username="illia.shytov">
                                        <a href="/illia.shytov/">
                                          <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/469642/5aaadd77ad571.jpg" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/469642/5aaadd77ad571.jpg" width={27} height={27} alt="Illia Shytov" className="lazy lazy-loaded" /></a>
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="container-bt-circle">
                                    <div className="tooltip">
                                      <div className="bt-like">
                                        <svg viewBox="0 0 27 27" className="circle">
                                          <path d="M13.513 26.5C6.326 26.5.5 20.68.5 13.5S6.326.5 13.513.5c7.023 0 12.73 5.564 12.987 12.52">
                                          </path>
                                        </svg>
                                        <svg className="ico-svg" viewBox="0 0 12.833 14">
                                          <use xlinkHref="https://www.awwwards.com/assets/images/sprite-icons.svg#user-2">
                                          </use>
                                        </svg>
                                        <div className="number">48</div>
                                      </div>
                                      <div className="box-tooltip">
                                        <div className="tooltip-text">People attending</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-right">
                                <a href="/academy/webinar/live-design-jury-website-reviews-peter-smart-nahel-moussi-jonas-lempa" className="button x-small border-gray rounded">
                                  Join Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


              {/* SELECTED BY REGION */}
              <div className="block p-0" id="block-directory">
                <div className="inner">
                  <div className="box-heading">
                  </div>
                  <div className="grid">
                    <ul className="list-items list-flex list-one-row js-agency-content">
                      <li className="col-3">
                        <div className="box-item box-style8">
                          <div className="box-info">
                            <div className="content">
                              <div className="row">
                                <strong>Professional Directory</strong>
                              </div>
                              <div className="row row-auto">
                                <div className="title">
                                  Discover more interesting events in
                                  <div>
                                    <div className="box-dropdown js-country-selector">
                                      <div className="option-active">Spain</div>
                                      <ul className="options style2">
                                        <li>
                                          <a className="item-option" href="/directory/U.S.A./">
                                            U.S.A.
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <span className="text-gray">94 events found</span>
                              </div>
                            </div>
                            <div className="footer">
                              <div className="box-left">
                                <strong><a href="/directory/Spain/" className="button x-small border-gray rounded">Discover</a></strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                     </ul>
                    <div className="button load-more style2 js-bt-loading js-bt-loadmore">
                      <span className="txt-default">Load More</span>
                      <span className="txt-loading">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer id="footer">
            <div className="box-top">
              <div className="inner">
                <div className="box-left">
                  <p className="follow">
                    <strong>Follow us</strong>
                    <a className="text-black" rel="noopener" href="https://twitter.com/awwwards" target="_blank">Twitter</a>
                    <a className="text-black" rel="noopener" href="https://www.facebook.com/awwwards/" target="_blank">Facebook</a>
                    <a className="text-black" rel="noopener" href="https://www.youtube.com/channel/UCYWGYef22gx8PaXZMLHAQsw/" target="_blank">Youtube</a>
                    <a className="text-black" rel="noopener" href="https://www.instagram.com/awwwards" target="_blank">Instagram</a>
                    <a className="text-black" rel="noopener" href="https://www.linkedin.com/company/awwwards" target="_blank">Linkedin</a>
                  </p>
                </div>
                <div className="box-right">
                  <div className="headline">
                    <strong><a href="https://www.awwwards.com/cancellation" className="link-underlined">Coming
                        soon</a></strong>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
        
    )
}



export default EventsList;