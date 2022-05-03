import React from "react";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSignUp from "./Authondication/AdminSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from './Authondication/AdminLogin';

const App = () => {
  return (
    <Router>
      <section>
        <ToastContainer toastStyle={{ backgroundColor: "crimson" ,color:"white" }} />
        <article>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminsignup" element={<AdminSignUp />} />
            <Route path="/adminlogin" element={<AdminLogin/> }/>
          </Routes>
        </article>
      </section>
    </Router>
  );
};

export default App;
