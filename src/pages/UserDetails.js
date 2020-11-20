import React, { useState } from 'react';
import {withAuth} from '../lib/AuthProvider';

const UserDetails = () => {


    const [userProfile, setUserProfile] = useState({
        img: '',
        username: '',
        email: '',
        address: '',
        phone: '',
    });

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        setUserProfile({ ...userProfile, [inputName]: inputValue });
    }

    const submitChanges = async (event) => {
        event.preventDefault();
        /* const formData = new FormData() */

        const response = await fetch('http://localhost:4000/user/userDetails', {
            method: 'POST',
            body: userProfile
        })
        const json = await response.json()
        /* alert(JSON.stringify(response)) */

        console.log(json);
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
                            value={userProfile.username || ''}
                            onChange={e=> handleChange(e)}
                        />
                    </div>
                    <div>
                        <strong>Email</strong>
                        <input
                            type="text"
                            name="email"
                            value={userProfile.email || ''}
                            onChange={e=> handleChange(e)}
                        />
                    </div>
                    <div>
                        <strong>Address</strong>
                        <input
                            type="text"
                            name="address"
                            value={userProfile.address || ''}
                            onChange={e=> handleChange(e)}
                        />
                    </div>
                    <div>
                        <strong>Phone</strong>
                        <input
                            type="number"
                            name="phone"
                            value={userProfile.phone || ''}
                            onChange={e=> handleChange(e)}
                        />
                    </div>

                    <button className="btn" type="submit">UPDATE PROFILE</button>
                </form>
            </div>
        </div>
    )
}

export default withAuth(UserDetails);
