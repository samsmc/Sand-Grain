import React, { useState } from 'react';
import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";



class EventForm extends React.Component {

    constructor() {
        super();

        this.state = {
            alreadyExists: false,
            eventToCreate: {
                name: '',
                img: '',
                description: '',
                participantsLimit: '',
                location: '',
                date: new Date(),
                time: '',
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
        this.updateEvent = this.updateEvent.bind(this);

    }

    componentDidMount() {

        const { match: { params } } = this.props;

        axios
            .get((`${process.env.REACT_APP_API_URL}/events/${params.id}`), { withCredentials: true })
            .then(res => {

                this.setState({ eventToCreate: res.data, alreadyExists: true });
            });

    }

    handleChange(event) {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        this.setState({ eventToCreate: { ...this.state.eventToCreate, [inputName]: inputValue } });
    }

    updateEvent = (event) => {
        event.preventDefault();

        axios.put(`${process.env.REACT_APP_API_URL}/events/update-event`, this.state.eventToCreate, { withCredentials: true })
            .then(response => {
                this.props.history.push("/events");
            })
    }

    submitEvent = (event) => {
        event.preventDefault();
        
        axios.post(`${process.env.REACT_APP_API_URL}/events/add-event`, this.state.eventToCreate, { withCredentials: true })
            .then(response => {
                this.props.history.push("/events");
            })
    }

    render() {

        return (
            <section id="content">
                <div className="content-view">
                    <div className="block js-purchase-type" data-type="submission">
                        <div className="inner width-2">
                            <div className="head-box-form">
                                <h1 className="heading-large horizontal-center">
                                    Create a new event</h1>
                            </div>

                            <form onSubmit={this.state.alreadyExists ? this.updateEvent : this.submitEvent}>
                                <div className="box-form-fields js-forms">
                                    <ul>
                                        <li>
                                            <div className="row left">
                                                <label htmlFor="standard_submission_submission_sitename" className="asterisk-required">
                                                    <strong>Event's name</strong>
                                                </label>
                                            </div>
                                            <div className="row right">
                                                <div className="form-group ">
                                                    <input id="standard_submission_submission_sitename" className="text-input js-validate_characters" data-msg="form.characters_remaining" data-max={30}
                                                        type="text"
                                                        name="name"
                                                        value={this.state.eventToCreate.name}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row left">
                                                <label htmlFor="standard_submission_submission_url" className="asterisk-required">
                                                    <strong>Photo URL</strong>
                                                </label>
                                            </div>
                                            <div className="row right">
                                                <div className="form-group ">
                                                    <input id="standard_submission_submission_url" className="text-input js-validate_url" placeholder="Paste the URL link" data-msg="form.add_a_url_with_http" data-validator="url" inputMode="url"
                                                        type="text"
                                                        name="img"
                                                        value={this.state.eventToCreate.img}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row left">
                                                <label htmlFor="standard_submission_submission_description" className="asterisk-required">
                                                    <strong>Description</strong>
                                                </label>
                                            </div>
                                            <div className="row right">
                                                <div className="form-group ">
                                                    <textarea id="standard_submission_submission_description" data-msg="form.characters_remaining_no_html" className="text-input js-validate_characters" data-max={185} defaultValue={""}
                                                        type="text"
                                                        name="description"
                                                        value={this.state.eventToCreate.category}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-form-fields js-forms">
                                    <ul>
                                        <li>
                                            <div className="row left">
                                                <label htmlFor="standard_submission_submission_designBy" className="asterisk-required">
                                                    <strong>Location</strong>
                                                </label>
                                            </div>
                                            <div className="row right">
                                                <div className="form-group ">
                                                    <input type="text" id="standard_submission_submission_designBy" required="required" className="text-input js-validate_characters" data-msg="form.characters_remaining" data-max={30}
                                                        type="text"
                                                        name="location"
                                                        value={this.state.eventToCreate.location}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row left">
                                                <label htmlFor="standard_submission_submission_designerUrl" className="asterisk-required">
                                                    <strong>Date</strong>
                                                </label>
                                            </div>

                                            <div className="row right">
                                                <div className="form-group ">
                                                    <input type="text" id="standard_submission_submission_designerUrl" className="text-input js-validate_url" data-msg="form.add_a_url_with_http" placeholder="DD/MM/YYYY" inputMode="url"
                                                        type="date"
                                                        name="date"
                                                        value={this.state.eventToCreate.date}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row left">
                                                <label htmlFor="standard_submission_submission_designerUrl" className="asterisk-required">
                                                    <strong>Time</strong>
                                                </label>
                                            </div>

                                            <div className="row right">
                                                <div className="form-group ">
                                                    <input type="text" id="standard_submission_submission_designerUrl" className="text-input js-validate_url" data-msg="form.add_a_url_with_http" placeholder="00:00" inputMode="url"
                                                        type="time"
                                                        name="time"
                                                        value={this.state.eventToCreate.time}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="box-form-fields">
                                    <ul>
                                        <li>
                                            <div className="row left">
                                                <label>
                                                    <strong>Number of participants</strong>
                                                </label>
                                            </div>
                                            <div className="row right">
                                                <div className="form-group ">
                                                    <div className="form-collaborator">
                                                        <div className="form-group">
                                                            <input className="js-search-user text-input" placeholder="0"
                                                                type="number"
                                                                name="participantsLimit"
                                                                value={this.state.eventToCreate.participantsLimit}
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <button className="button large width-full" type="submit">{this.state.alreadyExists ? 'UPDATE EVENT' : 'ADD NEW EVENT'}</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default withAuth(EventForm);