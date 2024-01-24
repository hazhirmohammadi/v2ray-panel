import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Alert, Search} from "./components/index.js";
import CreateUser from "./components/createUser/CreateUser.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render((
    <React.StrictMode>
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<App/>}/>
             <Route path="/search" element={<Search/>}/>
             <Route path="/alerts" element={<Alert/>}/>
             <Route path="/create_user" element={<CreateUser/>}/>
          </Routes>
       </BrowserRouter>
    </React.StrictMode>
))
