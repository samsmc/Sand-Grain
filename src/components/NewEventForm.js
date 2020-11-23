import React, { useState } from 'react';
import axios from 'axios';




const NewEventForm = () => {

    const [eventToCreate, setEventToCreate] = useState({
        name: 'Samantha',
        img: '',
        description: 'A revolutionary event',
        participantsLimit: 3,
        location: 'BCN',
        date: new Date(),
        time: '22:00',
        category: 'cleaning',
        stars: 0
    });

    function handleChange(event) {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        setEventToCreate({ ...eventToCreate, [inputName]: inputValue });
    }


    const submitEvent = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:4000/events/add-event', eventToCreate);
    }

    return (
        <div className="NewEvent">
            <div>
                <h1>Add a new event</h1>
            </div>
            <div>
                <form onSubmit={submitEvent}>
                    <div>
                        <strong>Upload the photo</strong>
                        <input
                            type="text"
                            name="img"
                            value={eventToCreate.img} /*Como subir la photo? - Claudinary*/
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                    <div>
                        <strong>Name</strong>
                        <label htmlFor="name">Event Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={eventToCreate.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Description</strong>
                        <input
                            type="text"
                            name="description"
                            value={eventToCreate.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Category</strong>
                        <input
                            type="text"
                            name="category"
                            value={eventToCreate.category} /*Como cargar las opciones del dropdown?*/
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Location</strong>
                        <input
                            type="text"
                            name="location"
                            value={eventToCreate.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Date</strong>
                        <input
                            type="date"
                            name="date"
                            value={eventToCreate.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Time</strong>
                        <input
                            type="time"
                            name="time"
                            value={eventToCreate.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Participants</strong>
                        <input
                            type="number"
                            name="participantsLimit"
                            value={eventToCreate.participantsLimit} /*Como cambiar el numero de acuerdo con el num de usuarios?*/
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Stars</strong>
                        <input
                            type="number"
                            name="stars"
                            value={eventToCreate.stars}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn" type="submit"><a href="/events">ADD NEW EVENT</a></button>
                </form>
            </div>
        </div>
    );
}


export default NewEventForm;