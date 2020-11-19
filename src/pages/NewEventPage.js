import React from 'react';
import NewEvent from "../components/NewEventForm";

const NewEventPage = () => {
  return (
    <div> 
      <h1>Create an Event</h1>
      <NewEvent />
    </div>
  )
}

/* this.state.participants.length < this.statelimitParticipants ? “You can be in this event” : “You can’t not be in the event”

 */
export default NewEventPage;