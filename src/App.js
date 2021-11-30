import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Main from './components/Routing/Main';
import { useEffect, useState } from 'react';
import { ObjectId } from "mongodb"
import UserContext from './context/UserContext';
import * as React from "react";
function App() {
  const [userId, setUserId] = useState(null);

  const readSession = () => {
    var result = localStorage.getItem("userId");
    if (result) {
      setUserId(result);
    }
    else {
      var objectId = new ObjectId();
      localStorage.setItem("userId", objectId);
      setUserId(objectId);
    }
  }
  useEffect(() => {
    if(userId === null){
      readSession();
    }
  }, [])
  return (
    <UserContext.Provider
      value={{ userId, setUserId }}
    >
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </UserContext.Provider >
  );
}

export default App;
