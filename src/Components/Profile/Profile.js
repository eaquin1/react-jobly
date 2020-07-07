import React, {useState, useContext, useRef, useEffect} from "react";
import {Label, Form, Input, FormGroup, Container, Button} from "reactstrap"
import UserContext from "../../UserContext"
import JoblyApi from "../../Helpers/JoblyApi"
import {useHistory} from "react-router-dom"
//const MESSAGE_SHOW_PERIOD_IN_MSEC = 3000;
function Profile() {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const history= useHistory();
    
    //get info on user, to fill out the form
    const INITIAL_STATE = {
        first_name: currentUser.first_name|| undefined,
        last_name: currentUser.last_name || undefined,
        email: currentUser.email || undefined,
        photo_url: currentUser.photo_url || undefined,
        password: ""
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
        const updatedUser = await JoblyApi.updateUser(currentUser.username, formData);
        setCurrentUser(updatedUser)
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
   


//   const { currentUser, setCurrentUser } = useContext(UserContext);

//   const [userForm, setUserForm] = useState({
//     first_name: currentUser.first_name || "",
//     last_name: currentUser.last_name || "",
//     email: currentUser.email || "",
//     photo_url: currentUser.photo_url || "",
//     username: currentUser.username,
//     password: "",
//     errors: [],
//     saveConfirmed: false
//   });

//   const messageShownRef = useRef(false);
//   useEffect(
//     function() {
//       if (userForm.saveConfirmed && !messageShownRef.current) {
//         messageShownRef.current = true;
//         setTimeout(function() {
//           setUserForm(f => ({ ...f, saveConfirmed: false }));
//           messageShownRef.current = false;
//         }, MESSAGE_SHOW_PERIOD_IN_MSEC);
//       }
//     },
//     [userForm]
//   );

//   async function handleSubmit(evt) {
//     evt.preventDefault();

//     try {
//       let profileData = {
//         first_name: userForm.first_name || undefined,
//         last_name: userForm.last_name || undefined,
//         email: userForm.email || undefined,
//         photo_url: userForm.photo_url || undefined,
//         password: userForm.password
//       };

//       let username = userForm.username;
//       let updatedUser = await JoblyApi.updateUser(username, profileData);
//       console.log("UPDATED USER", updatedUser)
//       setUserForm(f => ({
//         ...f,
//         errors: [],
//         saveConfirmed: true,
//         password: ""
//       }));
//       setCurrentUser(updatedUser);
//     } catch (errors) {
//       setUserForm(f => ({ ...f, errors }));
//     }
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setUserForm(f => ({
//       ...f,
//       [name]: value,
//       errors: []
//     }));
//   }

//   return (
//     <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
//       <h3>Profile</h3>
//       <div className="card">
//         <div className="card-body">
//           <form>
//             <div className="form-group">
//               <label>Username</label>
//               <p className="form-control-plaintext">{userForm.username}</p>
//             </div>
//             <div className="form-group">
//               <label>First Name</label>
//               <input
//                 name="first_name"
//                 className="form-control"
//                 value={userForm.first_name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input
//                 name="last_name"
//                 className="form-control"
//                 value={userForm.last_name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 name="email"
//                 className="form-control"
//                 value={userForm.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Photo URL</label>
//               <input
//                 name="photo_url"
//                 className="form-control"
//                 value={userForm.photo_url}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Confirm password to make changes:</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 value={userForm.password}
//                 onChange={handleChange}
//               />
//             </div>

//             {userForm.errors.length ? (
//                 console.log(userForm.errors)
//             //   <Alert type="danger" messages={userForm.errors} />
//             ) : null}

//             {userForm.saveConfirmed ? (
//                 console.log("User updated successfully")
//             //   <Alert type="success" messages={["User updated successfully."]} />
//             ) : null}

//             <button
//               className="btn btn-primary btn-block mt-4"
//               onClick={handleSubmit}
//             >
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

  }

export default Profile