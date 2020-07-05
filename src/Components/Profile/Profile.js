import React, {useState, useContext} from "react";
import {Label, Form, Input, FormGroup, Container, Button} from "reactstrap"
import UserContext from "../../UserContext"
import JoblyApi from "../../Helpers/JoblyApi"
import {useHistory} from "react-router-dom"

function Profile() {
    const {currentUser} = useContext(UserContext)
    const history= useHistory();
    
    //get info on user, to fill out the form
    const INITIAL_STATE = {
        first_name: currentUser.first_name|| undefined,
        last_name: currentUser.last_name || undefined,
        email: currentUser.email || undefined,
        photo_url: currentUser.photo_url || undefined,
        password: undefined
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data, [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await JoblyApi.updateUser(currentUser.username, formData);

        history.push("/jobs")

    }
    return (
        <Container>
        <h1>Profile</h1>
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
        <Button>Save Changes</Button>
        </Form>
        </Container>

    )
    }

export default Profile