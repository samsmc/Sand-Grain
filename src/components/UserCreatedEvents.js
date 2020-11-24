import React, { Component } from 'react';
import Event from "./Event";
import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';

class UserCreatedEvents extends Component {

    state = {
        events: [],
    }


    componentDidMount() {
        axios
            .get(`http://localhost:4000/user/userCreatedEvents`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.setState({ events: res.data });
            });
    }


    render() {
        return (
            <div>
                {
                    this.state.events.map(event => {

                        return (
                            <div>
                                {event.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default withAuth(UserCreatedEvents);