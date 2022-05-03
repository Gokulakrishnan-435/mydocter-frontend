import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;
  let handleSubmit = e => {
    e.preventDefault();
    let adminLogin = async () => {
      try {
        let login = await signInWithEmailAndPassword(auth, email, password);
        console.log(login);
        toast.success("succesfully logged in ");
      } catch (error) {
        console.log(error);
        toast.error("error");
      }
    };
    adminLogin();
    navigate("/")
  };
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="flex">
      <Navbar />
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Admin email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
