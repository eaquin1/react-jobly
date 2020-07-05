import React, {useContext} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "./UserContext";

function NavBar({logout}) {
   
   const {currentUser} = useContext(UserContext)

    const loggedIn = () => { 
        return (
        <>
            <NavItem>
                <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/profile">Profile</NavLink>
            </NavItem>

            <NavItem>
                <NavLink to="/" onClick={logout}>Logout</NavLink>
            </NavItem>
        </>
    );
    }

    const loggedOut = () => { 
        return (
        <>
            <NavItem>
                <NavLink to="/login">Login</NavLink>
            </NavItem>
        </>
    );
    }
    return (
        <div>
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    Jobly
                </NavLink>
                <Nav className="ml-auto" navbar>
                    {currentUser ? loggedIn() : loggedOut()}
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;
