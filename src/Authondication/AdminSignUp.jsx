import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const AdminSignUp = () => {
  let [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",

    adminid: "",
    email: "",
  });
  let { username, password, adminid, email } = adminDetails;
  let handleSubmit = e => {
    e.preventDefault();
    console.log(adminDetails);
    let adminSignUp = async () => {
      try {
        let adminUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(adminUser.user);
        let confirmMessage = ` ${email} hass been stored in database`;

        toast.success(confirmMessage);
      } catch (error) {
        console.log(error.message);
        toast.error("not valied");
      }
    };
    adminSignUp();
  };
  let handleChange = e => {
    let { name, value } = e.target;
    setAdminDetails({ ...adminDetails, [name]: value });
  };
  return (
    <section className="">
      <article>
        <div className="fixed">
          <Navbar />
        </div>
        <div className="flex items-center justify-center">
          <div
            className="absolute top-28 w-[30%] bg-red-300 h-[70%]  
      rounded-md "
          >
            <form onSubmit={handleSubmit}>
              <div className="text-2xl font-bold px-32 pb-5 pt-7">
                <p>Admin Login</p>
              </div>
              <div className="pb-5 p-[12px] flex justify-between ">
                <label>AdminName</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="pb-5  p-[15px]  flex justify-between">
                <label>CreatePassword</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div className="pb-5  p-[12px] flex justify-between">
                <label>Creat adminId</label>
                <input
                  type="number"
                  name="adminid"
                  value={adminid}
                  onChange={handleChange}
                />
              </div>
              <div className="pb-5  p-[12px] flex justify-between">
                <label>Email </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-slate-900 text-white rounded-md w-[25%] flex items-center justify-center"
                  onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AdminSignUp;
