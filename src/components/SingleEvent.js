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

        console.log(`PROPS: ${JSON.stringify(this.props)}`)

        axios
            .get((`http://localhost:4000/events/${params.id}`), { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.setState({ event: res.data });
            });
    }


    render() {
        const { name, description, img, date, time, participants, location } = this.state.event;
        const formattedDate = moment(date).format('LL');

        console.log(`IMAGE: ${img}`)
        let participantsString = participants && participants.length > 0 
            ? participants.map((participant, index) => index !== participants.length - 1 ? `${participant.username}, ` : `${participant.username}`).join("")
            : ' No participants assigned yet';

        console.log(`PARTICIPANTS: ${JSON.stringify(participantsString)}`)    

        return (
            <div>
                <div className="wrapper ">
                    <section id="content">
                        <div className="content-view">

                            {/* EVENT TITLE */}
                            <div className="block p-0">
                                <div className="inner">
                                    <div className="box-heading">
                                        <div className="box-left">
                                            <h2 className="title">{name}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-item">
                            <div style={{alignSelf: 'stretch', height: 400 , display: "flex"}}>
                                <img width={417} height={298} alt="event" src={img} className="lazy lazy-loaded img-container" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'", backgroundSize: "cover", flex: 1}} />
                            </div>
                    <div className="box-info">
                        <div className="content">
                            <div className="row">
                                <strong>{formattedDate}</strong>, at {time}
                                <h3>By participants: <strong>{participantsString}</strong></h3>
                            </div>
                            <div className="row row-auto">
                                <h3>{description}</h3>
                            </div>
                            <div className="row">in :
                              <strong>{location}</strong>
                             </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}


export default SingleEvent;

