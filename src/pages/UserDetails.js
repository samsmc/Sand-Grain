import React, { useState } from 'react';
import {withAuth} from '../lib/AuthProvider';
import axios from 'axios';

const UserDetails = (props) => {


   const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    

    const submitChanges = async (event) => {
        event.preventDefault();
        /* const formData = new FormData() */
        const response = await axios.post(`http://localhost:4000/user/userDetails/${props.user._id}`, {username, email, address, phone})
        return response
       /*  const json = await response.json() */
        /* alert(JSON.stringify(response)) */

            }


    return (
        <div className="NewEvent">
            <div>
                <h1>Manage your details</h1>
            </div>
            <div>
                <form onSubmit={submitChanges}>
                    <div>
                        <strong>Profile picture</strong>
                      {/*   <input
                            type="file"
                            name="img"
                            value={userProfile.img}
                            onChange={handleChange}
                            className="form-input"
                        /> */}
                    </div>
                    <div>
                        <strong>User Name</strong>
                        <input
                            type="text"
                            name="username"
                            value={username || ''}
                            onChange={e=> setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <strong>Email</strong>
                        <input
                            type="text"
                            name="email"
                            value={email || ''}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <strong>Address</strong>
                        <input
                            type="text"
                            name="address"
                            value={address || ''}
                            onChange={e=> setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <strong>Phone</strong>
                        <input
                            type="number"
                            name="phone"
                            value={phone || ''}
                            onChange={e=> setPhone(e.target.value)}
                        />
                    </div>

                    <button className="btn" type="submit">UPDATE PROFILE</button>
                </form>
            </div>
        </div>
    )
}

export default withAuth(UserDetails);
