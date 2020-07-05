import React, {useEffect, useState} from 'react';
import {decode} from "jsonwebtoken"
import useLocalStorage from "./hooks/useLocalStorage"
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes/Routes"
import JoblyApi from './Helpers/JoblyApi';

export const TOKEN_STORAGE_ID = "jobly-token"

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)

  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
 
  useEffect(() =>{
    async function getCurrentUser() {
      try {
        let {username} = decode(token)
        let currentUser = await JoblyApi.getUser(username)
        setCurrentUser(currentUser)
      } catch (err) {
        setCurrentUser(null)
      }
      setInfoLoaded(true)
    }
    setInfoLoaded(false)
    getCurrentUser()

  }, [token]) 

   const handleLogOut = () => {
    setCurrentUser(null);
    setToken(null);
  }

  if (!infoLoaded) {
    return (<h1>Loading</h1>)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar logout={handleLogOut}/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
