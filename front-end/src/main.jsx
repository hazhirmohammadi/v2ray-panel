import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Search} from "./components/index.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render((
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
           <Route path="/" element={<App/>}/>
           <Route path="/search" element={<Search/>}/>
        </Routes>
     </BrowserRouter>
  </React.StrictMode>
))
