import React, { useState, useContext, useRef, useEffect } from "react";
import { Label, Form, Input, FormGroup, Button, Alert } from "reactstrap";
import UserContext from "../../UserContext";
import JoblyApi from "../../Helpers/JoblyApi";

//import "./Profile.css"

const MESSAGE_SHOW_PERIOD_IN_MSEC = 3000;

function Profile() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
   

    //get info on user, to fill out the form
    const INITIAL_STATE = {
        first_name: currentUser.first_name || undefined,
        last_name: currentUser.last_name || undefined,
        email: currentUser.email || undefined,
        photo_url: currentUser.photo_url || undefined,
        password: "",
        errors: [],
        saveConfirmed: false
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const messageShownRef = useRef(false);

    useEffect(
        function() {
            if (formData.saveConfirmed && !messageShownRef.current) {
                messageShownRef.current = true;
                setTimeout(function() {
                    setFormData(f => ({ ...f, saveConfirmed: false}))
                    messageShownRef.current = false
                }, MESSAGE_SHOW_PERIOD_IN_MSEC)
            }
        }, [formData]
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
     
        e.preventDefault();

        try {
            let profileData = {
                first_name: formData.first_name || undefined,
        last_name: formData.last_name || undefined,
        email: formData.email || undefined,
        photo_url: formData.photo_url || undefined,
        password: formData.password
            }
        
        const updatedUser = await JoblyApi.updateUser(
            currentUser.username,
            profileData
        );
      console.log("Updated user", updatedUser)
        setCurrentUser(updatedUser);

        setFormData(f => ({
            ...f,
            errors: [],
            saveConfirmed: true,
            password: ""
        }))
        }catch(errors) {
            setFormData(f => ({ ...f, errors}))
        }

       
    };
    return (
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
            <h1>Profile</h1>
            <div className="card">
                <div className="card-body">
                    <Form onSubmit={handleSubmit}>
                        <Label for="username">Username</Label>
                        <p>{currentUser.username}</p>
                        <FormGroup>
                            <Label for="first_name">First Name</Label>
                            <Input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Photo URL</Label>
                            <Input
                                type="text"
                                name="photo_url"
                                value={formData.photo_url}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Re-enter Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        {formData.errors.length ? (
                            <Alert color="danger">{formData.errors}</Alert>
                        ): null}

                        {formData.saveConfirmed ? (
                            <Alert color="success">User updated successfully</Alert>
                        ): null}
                        <Button>Save Changes</Button>
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default Profile;
