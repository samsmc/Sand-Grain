import React, { Component } from 'react';
import Event from "./Event";
import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';

class UserCreatedEvents extends Component {

    constructor() {
        super();

        this.state = {
            events: [],
        }
    }
    


    componentDidMount() {
        axios
            .get(`http://localhost:4000/user/userCreatedEvents`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.setState({ events: res.data });
            });
    }


    renderEvent(eventData) {
        return (
            <Event isAdmin={true} refresh={this.refresh} volunteerEvent={eventData} />
        )
    }

    render() {
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
                                            <span>the events that are waiting for you! We have {this.state.events.length} events</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid">
                                <ul className="list-items list-flex list-one-row js-agency-content">

                                    {
                                        this.state.events.map(event => this.renderEvent(event))
                                    }

                                </ul>
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
                                                                <strong>Explore</strong>
                                                            </div>
                                                            <div className="row row-auto">
                                                                <div className="title">
                                                                    Discover more interesting events in
                                  <div>
                                                                        <div className="box-dropdown js-country-selector">
                                                                            <div className="option-active">Spain</div>
                                                                            <ul className="options style2">
                                                                                <li>
                                                                                    <a className="item-option" href="/events/U.S.A./">
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
                                                                <strong><a href="/events" className="button x-small border-gray rounded">Discover</a></strong>
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
                                        <a className="text-black" rel="noopener" href="https://twitter.com" target="_blank">Twitter</a>
                                        <a className="text-black" rel="noopener" href="https://www.facebook.com" target="_blank">Facebook</a>
                                        <a className="text-black" rel="noopener" href="https://www.youtube.com/" target="_blank">Youtube</a>
                                        <a className="text-black" rel="noopener" href="https://www.instagram.com" target="_blank">Instagram</a>
                                        <a className="text-black" rel="noopener" href="https://www.linkedin.com" target="_blank">Linkedin</a>
                                    </p>
                                </div>
                                <div className="box-right">
                                    <div className="headline">
                                        <strong><a href="/events" className="link-underlined">Coming
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

    
}


export default withAuth(UserCreatedEvents);