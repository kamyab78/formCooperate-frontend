import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./IRANSans/css/style.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Redirect, Route,Routes } from 'react-router-dom';
import CompanyApp from "./CompanyApp";
import Landing from './Landing/Landing'
import Vision from './Vision/Vision'
import EnCompanyApp from './enCompany'
import EnApp from './enApp'
import Event from './Event/Event'
import News from './News/News'
import Program from './Program/Program'
import Contactus from './Contactus/Contactus'
import AboutSPbU from './AboutSpbu/AboutSpbu'
import Committee from './Committee/Committee'
ReactDOM.render(
  <React.StrictMode>
        <Router>
       
   
        <Routes>
        <Route path='/user' element={<App/>}></Route>
        <Route path='/enuser' element={<EnApp/>}></Route>
        <Route path='/company' element={<CompanyApp/>}></Route>
        <Route path='/encompany' element={<EnCompanyApp/>}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
        <Route path='/vision' element={<Vision/>}></Route>
        <Route path='/program' element={<Program/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/event' element={<Event/>}></Route>
        <Route path='/aboutSPbU' element={<AboutSPbU/>}></Route>
        <Route path='/committee' element={<Committee/>}></Route>
          </Routes>
          </Router>


    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
 
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
