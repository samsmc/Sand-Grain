import React, { Component } from 'react';
import moment from 'moment';
import { withAuth } from "../lib/AuthProvider";
import axios from 'axios';
import { Link } from "react-router-dom";


class Event extends Component {

    constructor() {
        super();

        this.state = {
            isAdmin: false
        }

        this.joinEvent = this.joinEvent.bind(this);
        this.unsubscribeFromEvent = this.unsubscribeFromEvent.bind(this);
        this.isUserAlreadyParticipating = this.isUserAlreadyParticipating.bind(this);
    }

    componentDidMount() {
        this.setState({ isAdmin: this.props.isAdmin })
    }

    isUserAlreadyParticipating() {
        // console.log(`PARTICIPANTS ${JSON.stringify(this.props.volunteerEvent.participants)}`);
        // console.log(`USER ${JSON.stringify(this.props.user._id)}`);

        let user = this.props.user._id;
        let howManyTimesParticipating = this.props.volunteerEvent.participants.filter(participant => participant._id === user).length;
        return howManyTimesParticipating > 0;
    }

    joinEvent() {
        console.log("JOINING EVENT")
        console.log(`props ... ${JSON.stringify(this.props)}`)
        axios.post(`http://localhost:4000/events/add-participant-to-event`, { user: this.props.user._id, event: this.props.volunteerEvent._id }, { withCredentials: true })
            .then(response => {
                console.log(`RESPONSE: ${JSON.stringify(response)}`)

                this.props.refresh();
            })
    }

    unsubscribeFromEvent() {
        console.log("UNSUBSCRIBING FROM EVENT")
        console.log(`props ... ${JSON.stringify(this.props)}`)
        axios.put(`http://localhost:4000/events/delete-participant-to-event`, { user: this.props.user._id, event: this.props.volunteerEvent._id }, { withCredentials: true })
            .then(response => {
                console.log(`RESPONSE: ${JSON.stringify(response)}`)

                this.props.refresh();
            })
    }

    renderButtons() {
        const { participants, participantsLimit } = this.props.volunteerEvent;

        let isUserAlreadyParticipating = this.isUserAlreadyParticipating();
        const participantsCount = participants.length;

        if (this.state.isAdmin) {
            return (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="box-right">
                        <strong className="button x-small border-gray rounded" type="button">Delete</strong>
                    </div>

                    <Link to={`/add-event/${this.props.volunteerEvent._id}`}>
                    <div className="box-right" style={{ marginLeft: 5 }}>
                            <strong className="button x-small border-gray rounded" type="button">Edit</strong>
                        </div>
                    </Link>

                </div>
            )
        } else {
            return (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {
                        participantsCount < participantsLimit ?
                            <div className="box-right">
                                <button onClick={isUserAlreadyParticipating ? this.unsubscribeFromEvent : this.joinEvent} className="button x-small border-gray rounded" type="button">{isUserAlreadyParticipating ? 'Unsubscribe' : 'Join Now'}</button>
                            </div>
                            :
                            <div className="box-right">
                                <button disabled className="button x-small border-gray rounded" type="button">Full</button>
                            </div>
                    }
                </div>
            )
        }
    }

    render() {
        const { name, description, date, time, location, img, participants, participantsLimit } = this.props.volunteerEvent;
        const formattedDate = moment(date).format('LL');

        let isUserAlreadyParticipating = this.isUserAlreadyParticipating();
        const participantsCount = participants.length;

        return (
            <li className="col-3">
                <div className="box-item">
                    <figure className="rollover">
                        <a href={`/events/${this.props.volunteerEvent._id}`} className="js-lightbox-sidebar">
                            <div className="box-photo">
                                <img width={417} height={298} alt="event" src={img} className="lazy lazy-loaded img-container" style={{ width: 417, height: 298, backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'", backgroundSize: "cover" }} />
                            </div>
                        </a>
                    </figure>
                    <div className="box-info">
                        <div className="content">
                            <div className="row">
                                <strong>{name}</strong>
                            </div>
                            <div className="row">
                                <strong>{formattedDate}</strong>, at {time}
                                <h3>By participants</h3>
                            </div>
                            <div className="row row-auto">
                                <h3>{description}</h3>
                            </div>
                            <div className="row">in :
                              <strong>{location}</strong>
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
                                                <div className="number">{participantsCount}</div>
                                            </div>
                                            <div className="box-tooltip">
                                                <div className="tooltip-text">People attending</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {this.renderButtons()}


                        </div>
                    </div>
                </div>
            </li>

        )
    }
}

Event.defaultProps = {
    refresh: () => null,
    isAdmin: false
}


export default withAuth(Event);