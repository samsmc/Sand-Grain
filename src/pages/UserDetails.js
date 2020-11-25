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

        <section id="content">
            <div className="content-view">
                <div className="block js-purchase-type" data-type="submission">
                    <div className="inner width-2">
                        <div className="head-box-form">
                            <h1 className="heading-large horizontal-center">
                                Your details</h1>
                        </div>

                        <form onSubmit={submitChanges}>
                            <div className="box-form-fields js-forms">
                                <ul>
                                    <li>
                                        <div className="row left">
                                            <label htmlFor="standard_submission_submission_sitename" className="asterisk-required">
                                                <strong>Username</strong>
                                            </label>
                                        </div>
                                        <div className="row right">
                                            <div className="form-group ">
                                                <input id="standard_submission_submission_sitename" className="text-input js-validate_characters" data-msg="form.characters_remaining" data-max={30}
                                                    type="text"
                                                    name="username"
                                                    value={username || ''}
                                                    onChange={e => setUsername(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row left">
                                            <label htmlFor="standard_submission_submission_description" className="asterisk-required">
                                                <strong>Email</strong>
                                            </label>
                                        </div>
                                        <div className="row right">
                                            <div className="form-group ">
                                            <input id="standard_submission_submission_sitename" className="text-input js-validate_characters" data-msg="form.characters_remaining" data-max={30}
                                                    type="text"
                                                    name="email"
                                                    value={email || ''}
                                                    onChange={e => setEmail(e.target.value)}
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
                                                <strong>Address</strong>
                                            </label>
                                        </div>
                                        <div className="row right">
                                            <div className="form-group ">
                                            <input id="standard_submission_submission_sitename" className="text-input js-validate_characters" data-msg="form.characters_remaining" data-max={30}
                                                    type="text"
                                                    name="address"
                                                    value={address || ''}
                                                    onChange={e => setAddress(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row left">
                                            <label htmlFor="standard_submission_submission_designerUrl" className="asterisk-required">
                                                <strong>Phone</strong>
                                            </label>
                                        </div>

                                        <div className="row right">
                                            <div className="form-group ">
                                            <input id="standard_submission_submission_sitename" className="text-input js-validate_characters" data-msg="form.characters_remaining" data-max={30}
                                                    type="number"
                                                    name="phone"
                                                    value={phone || ''}
                                                    onChange={e => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row left">
                                            <label htmlFor="standard_submission_submission_url" className="asterisk-required">
                                                <strong>Profile picture</strong>
                                            </label>
                                        </div>
                                        <div className="row right">
                                            <div className="form-group ">
                                            <input id="standard_submission_submission_sitename" className="text-input js-validate_characters" data-msg="form.characters_remaining" data-max={30}
                                                    type="file"
                                                    name="img"
                                                    value={''}
                                                    onChange={handleFileUpload}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <button className="button large width-full" type="submit">UPDATE PROFILE</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAuth(UserDetails);
