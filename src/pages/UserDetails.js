import React, { useState } from 'react';
import { withAuth } from '../lib/AuthProvider';
import axios from 'axios';
import service from "../api/service";



const UserDetails = (props) => {


    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [imgUrl, setImgUrl] = useState();


    const submitChanges = async (event) => {
        event.preventDefault();
        /* const formData = new FormData() */
        const response = await axios.post(`http://localhost:4000/user/userDetails/${props.user._id}`, { username, email, address, phone, imgUrl })
        return response
        /*  const json = await response.json() */
        /* alert(JSON.stringify(response)) */

    }

    const handleFileUpload = async (e) => {

        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        uploadData.append("imageUrl", e.target.files[0]);

        try {
            const res = await service.handleUpload(uploadData);

            console.log("response is: ", res);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state
            setImgUrl(res.secure_url)
        } catch (error) {
            console.log("Error while uploading the file: ", error);
        }
    };

    console.log(imgUrl)


    return (
        <div className="NewEvent">
            <div>
                <h1>Manage your details</h1>
            </div>
            <div>
                <form onSubmit={submitChanges}>
                    <div>
                        <strong>Profile picture</strong>
                        <input
                            type="file"
                            name="img"
                            value={''}
                            onChange={handleFileUpload}
                            className="form-input"
                        />
                    </div>
                    <div>
                        <strong>User Name</strong>
                        <input
                            type="text"
                            name="username"
                            value={username || ''}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <strong>Email</strong>
                        <input
                            type="text"
                            name="email"
                            value={email || ''}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <strong>Address</strong>
                        <input
                            type="text"
                            name="address"
                            value={address || ''}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <strong>Phone</strong>
                        <input
                            type="number"
                            name="phone"
                            value={phone || ''}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>

                    <button className="btn" type="submit">UPDATE PROFILE</button>
                </form>
            </div>
        </div>
    )
}

export default withAuth(UserDetails);
