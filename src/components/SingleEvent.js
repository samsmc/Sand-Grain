import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Event from "./Event";


class SingleEvent extends Component {

    state = {
        getId: null
    }

    componentDidMount() {
        const eventId = this.props.match.params

        axios
            .get(`http://localhost:4000/events/${eventId}`)
            .then(getId => {
                console.log(`EVENT DATA: ${JSON.stringify(getId)}`);
                this.setState({ getId });
            });
    }

    renderEvent(eventData) {
        return (
            <Event eventId={eventData} />
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.event.map(event => this.renderEvent(event))
                }

                <div className="wrapper ">
                    <section id="content">
                        <div className="content-view">

                            {/* EVENT TITLE */}
                            <div className="block p-0">
                                <div className="inner">
                                    <div className="box-heading">
                                        <div className="box-left">
                                            <h2 className="title">Check </h2>
                                            <span>the events that are waiting for you!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid">
                                <ul className="list-items list-flex list-one-row js-agency-content">



                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}


export default SingleEvent;

