import React, { useState }  from "react"

import {Label, Input, Form, Button, FormGroup} from "reactstrap"
import JoblyApi from "../../Helpers/JoblyApi";
import {useHistory} from "react-router-dom"
function Login() {
    const history= useHistory()
    const INITIAL_STATE_LOGIN = {username: "", password: "", first_name:"", last_name:"", email:"", errors: []}
    const [loginFormData, setLoginFormData] = useState(INITIAL_STATE_LOGIN)
    const [activeView, setActiveView] = useState("login") 

    function setLoginView() {
        setActiveView("login")
    }

    function setSignUpView() {
        setActiveView("signup")
    }

    const handleChange = e => {
        const {name, value} =e.target;
        setLoginFormData(formData => ({
            ...formData,
            [name]:value
        }))
    }

    async function loginFunc(data) {
         await JoblyApi.login(data)
    }

    async function handleLogin(evt) {
        evt.preventDefault()
     
        await loginFunc(loginFormData)
        setLoginFormData(INITIAL_STATE_LOGIN)
       history.push("/jobs")
       
    }

    return (
       <Form onSubmit={handleLogin}>
           <FormGroup>
           <Label for="username">Username</Label>
            <Input 
            type="text"
            name="username"
            placeholder="Username"
            value={loginFormData.username}
            onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
           <Label for="username">Password</Label>
            <Input 
            type="password"
            name="password"
            placeholder="Password"
            value={loginFormData.password}
            onChange={handleChange}/>
            </FormGroup>
            <Button>Submit</Button>
       </Form>
    )
// : (
//        <Form>
//            <FormGroup>
//            <Label for="username">Username</Label>
//             <Input 
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={loginFormData.username}
//             onChange={handleChange}/>
//             </FormGroup>
//             <FormGroup>
//            <Label for="username">Password</Label>
//             <Input 
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={loginFormData.password}
//             onChange={handleChange}/>
//             </FormGroup>
//             <FormGroup>
//             <Label for="first_name">First Name</Label>
//             <Input 
//             type="text"
//             name="first_name"
//             placeholder="First Name"
//             value={loginFormData.first_name}
//             onChange={handleChange}/>
//             </FormGroup>
//             <FormGroup>
//             <Label for="last_name">Last Name</Label>
//             <Input 
//             type="text"
//             name="last_name"
//             placeholder="Last Name"
//             value={loginFormData.last_name}
//             onChange={handleChange}/>
//             </FormGroup>
//             <FormGroup>
//             <Label for="email">Email</Label>
//             <Input 
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={loginFormData.email}
//             onChange={handleChange}/>
//             </FormGroup>
          
//        </Form>
//     )
    }

export default Login