import React, { useState } from 'react';


const NewEventForm = () => {

    const [event, setEvent] = useState({
        name: '',
        img: '',
        description: '',
        participants: '',
        organizer: '',
        location: '',
        date: '',
        time: '',
        category: '',
        stars: '',
    });

    function handleChange(event) {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        setEvent({ ...event, [inputName]: inputValue });
    }

    const submitEvent = (event) => {
        event.preventDefault();
        /*  const { name, img, description, participants, organizer, location, date, time, category, stars } = this.state;
  */
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
                            type="img"
                            name="image"
                            value={event.image} /*Como subir la photo? - Claudinary*/
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Name</strong>
                        <input
                            type="text"
                            name="name"
                            value={event.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Organizer</strong>
                        <input
                            type="text"
                            name="tagline"
                            value={event.organizer} /*Como cargar el user?*/
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Description</strong>
                        <input
                            type="text"
                            name="description"
                            value={event.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Category</strong>
                        <input
                            type="text"
                            name="category"
                            value={event.category} /*Como cargar las opciones del dropdown?*/
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Location</strong>
                        <input
                            type="text"
                            name="location"
                            value={event.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Date</strong>
                        <input
                            type="date"
                            name="date"
                            value={event.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Time</strong>
                        <input
                            type="date"
                            name="time"
                            value={event.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Participants</strong>
                        <input
                            type="number"
                            name="participants"
                            value={event.participants} /*Como cambiar el numero de acuerdo con el num de usuarios?*/
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Stars</strong>
                        <input
                            type="number"
                            name="stars"
                            value={event.stars}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">ADD NEW EVENT</button>
                </form>
            </div>
        </div>
    );
}


export default NewEventForm;