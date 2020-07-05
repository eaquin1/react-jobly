import React, { useState } from "react";

import { Label, Input, Form, Button, FormGroup, Container } from "reactstrap";
import JoblyApi from "../../Helpers/JoblyApi";
import { useHistory } from "react-router-dom";

function Login({setToken}) {
    const history = useHistory();
    const INITIAL_STATE_LOGIN = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        errors: [],
    };
    const [loginFormData, setLoginFormData] = useState(INITIAL_STATE_LOGIN);
    const [activeView, setActiveView] = useState("login");

    function setLoginView() {
        setActiveView("login");
    }

    function setRegisterView() {
        setActiveView("register");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    async function handleLogin(evt) {
        evt.preventDefault();
        let data;
        let endpoint;

        if (activeView === "register") {
            //unrequired fields can be undefined
            data = {
                username: loginFormData.username,
                password: loginFormData.password,
                first_name: loginFormData.first_name || undefined,
                last_name: loginFormData.last_name || undefined,
                email: loginFormData.email || undefined,
            };
            endpoint = "register";
        } else {
            data = {
                username: loginFormData.username,
                password: loginFormData.password,
            };
            endpoint = "login";
        }
        let token;
        try {
            token = await JoblyApi[endpoint](data);
        } catch (errors) {
            return setLoginFormData((l) => ({ ...l, errors }));
        }

        setToken(token)
        history.push("/jobs");
    }

    const registerFields = (
        <>
            <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={loginFormData.first_name}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={loginFormData.last_name}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginFormData.email}
                    onChange={handleChange}
                />
            </FormGroup>
        </>
    );

    return (
        <Container>
            <Button
                className={`$activeView === "login" ? "active" : ""`}
                onClick={setLoginView}
            >
                Login
            </Button>
            <Button
                className={`$activeView === "register" ? "active" : ""`}
                onClick={setRegisterView}
            >
                Sign Up
            </Button>
            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={loginFormData.username}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="username">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginFormData.password}
                        onChange={handleChange}
                    />
                </FormGroup>

                {activeView === "register" ? registerFields : ""}
                <Button>Submit</Button>
            </Form>
        </Container>
    );
}

export default Login;
