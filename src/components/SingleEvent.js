import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Event from "./Event";


class SingleEvent extends Component {

    constructor() {
        super()

        this.state = {
            event: {}
        }
    }


    componentDidMount() {
        const { match: { params } } = this.props;


        axios
            .get((`${process.env.REACT_APP_API_URL}/events/${params.id}`), { withCredentials: true })
            .then(res => {
                
                this.setState({ event: res.data });
            });
    }


    render() {
        const { name, description, img, date, time, participants, location } = this.state.event;
        const formattedDate = moment(date).format('LL');

      
        let participantsString = participants && participants.length > 0
            ? participants.map((participant, index) => index !== participants.length - 1 ? `${participant.username}, ` : `${participant.username}`).join("")
            : ' No participants assigned yet';

       

        return (
            <div id="singleback">
                <br></br>
                <section id="content">
                    <div style={{ alignSelf: 'center', height: 400, width: 400, display: "flex", borderRadius: 50 }}>
                        <img width={417} height={298} alt="event" src={img} className="lazy lazy-loaded img-container"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'", backgroundSize: "cover", flex: 1, borderRadius: 50 }} />
                    </div>

                    <div className="block" id="block-content">
                        <div className="inner width-3 courseID">
                            <div className="entry">
                                <div className="entry-text item-scroll animate" style={{ textAlign: "center" }}>
                                    <h2 style={{ textAlign: 'center' }}><strong>{name}</strong></h2>
                                    <p>{description}</p>
                                    <ul>
                                        <li>when: <b>{formattedDate}</b></li><br></br>
                                        <li>at: <b>{time}</b></li><br></br>
                                        <li>where: <b>{location}</b></li><br></br>
                                        <li>who is attending: <b>{participantsString}</b></li><br></br>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}


export default SingleEvent;

