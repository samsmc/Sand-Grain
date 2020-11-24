import React, { useState } from 'react';
import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";



class EventForm extends React.Component {

    constructor(){
        super();

        this.state = {
            eventToCreate: {
                name: 'Feeding the homeless',
                img: 'Paste the URL link',
                description: 'A revolutionary event',
                participantsLimit: 3,
                location: 'BCN',
                date: new Date(),
                time: '14:00',
                category: 'cleaning'
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }

    // const [eventToCreate, setEventToCreate] = useState({
    //     name: 'Samantha',
    //     img: 'Paste the URL link',
    //     description: 'A revolutionary event',
    //     participantsLimit: 3,
    //     location: 'BCN',
    //     date: new Date(),
    //     time: '14:00',
    //     category: 'cleaning',
    // });

    // function handleChange(event) {
    //     const inputValue = event.target.value;
    //     const inputName = event.target.name;
    //     setEventToCreate({ ...eventToCreate, [inputName]: inputValue });
    // }

    handleChange(event) {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        this.setState({eventToCreate : { ...this.state.eventToCreate, [inputName]: inputValue }});
    }


    submitEvent = (event) => {
        event.preventDefault();
        // console.log(`EVENT: ${JSON.stringify(event)}`)
        console.log(`EVENT eventToCreate: ${JSON.stringify(this.state.eventToCreate)}`)
        console.log(` this.props.session: ${JSON.stringify(this.props   )}`)

        axios.post('http://localhost:4000/events/add-event', this.state.eventToCreate, { withCredentials: true })
        .then(response => {
            this.props.history.push("/events");
        })
    }

    render() {
        
    return (
        <div className="NewEvent">
            <div>
                <h1>Add a new event</h1>
            </div>
            <div>
                <form onSubmit={this.submitEvent}>
                    <div>
                        <strong>Upload the photo</strong>
                        <input
                            type="text"
                            name="img"
                            value={this.state.eventToCreate.img}
                            onChange={this.handleChange}
                            className="form-input"
                        />
                    </div>
                    <div>
                        <strong>Name</strong>
                        <label htmlFor="name">Event Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.eventToCreate.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <strong>Description</strong>
                        <input
                            type="text"
                            name="description"
                            value={this.state.eventToCreate.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <strong>Category</strong>
                        <input
                            type="text"
                            name="category"
                            value={this.state.eventToCreate.category} /*Como cargar las opciones del dropdown?*/
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <strong>Location</strong>
                        <input
                            type="text"
                            name="location"
                            value={this.state.eventToCreate.location}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <strong>Date</strong>
                        <input
                            type="date"
                            name="date"
                            value={this.state.eventToCreate.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <strong>Time</strong>
                        <input
                            type="time"
                            name="time"
                            value={this.state.eventToCreate.time}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <strong>Participants</strong>
                        <input
                            type="number"
                            name="participantsLimit"
                            value={this.state.eventToCreate.participantsLimit} /*Como cambiar el numero de acuerdo con el num de usuarios?*/
                            onChange={this.handleChange}
                        />
                    </div>

                        <button className="btn" type="submit">ADD NEW EVENT</button>
                </form>
            </div>
        </div>
    );
    }
}


export default withAuth(EventForm);