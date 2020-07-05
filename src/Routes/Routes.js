import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import Companies from "../Components/Companies/Companies"
import Company from "../Components/Companies/Company"
import Jobs from "../Components/Jobs/Jobs"
import Login from "../Components/Auth/Login"
import Profile from "../Components/Profile/Profile"
import Home from "./Home"
import PrivateRoute from "./PrivateRoute"

function Routes({setToken}) {
    return (
        <Switch>     
            <PrivateRoute exact path="/companies"><Companies /></PrivateRoute>
            <PrivateRoute exact path="/companies/:handle"><Company /></PrivateRoute>
            <PrivateRoute exact path="/jobs"><Jobs /></PrivateRoute>
            <Route exact path="/login"><Login setToken={setToken} /></Route>
            <PrivateRoute exact path="/profile"><Profile /></PrivateRoute>
            <Route exact path="/"><Home /></Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes