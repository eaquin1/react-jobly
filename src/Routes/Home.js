import React, {useContext} from "react"
import img from "../Static/jobly.png"
import {Link} from "react-router-dom"
import UserContext from "../UserContext"
function Home() {
    const {currentUser} = useContext(UserContext)
    return (
        <div>
        <h1>Jobly</h1>
        <img src={img} alt="People working" style={{width: "900px"}}></img>
        {currentUser ? <h2>Welcome Back</h2> : <Link to="Login" style={{display: "block", fontSize: "3em"}}>Login</Link>}
        
        </div>
    )
    }

export default Home