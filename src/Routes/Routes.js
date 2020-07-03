import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import Companies from "../Components/Companies/Companies"
import Company from "../Components/Companies/Company"
import Jobs from "../Components/Jobs/Jobs"
import Login from "../Components/Auth/Login"
import Profile from "../Components/Profile/Profile"
import Home from "./Home"

function Routes() {
    return (
        <Switch>     
            <Route exact path="/companies"><Companies /></Route>
            <Route exact path="/companies/:handle"><Company /></Route>
            <Route exact path="/jobs"><Jobs /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/profile"><Profile /></Route>
            <Route exact path="/"><Home /></Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes