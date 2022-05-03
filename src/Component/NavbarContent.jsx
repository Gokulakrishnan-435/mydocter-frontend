import React from "react";
import Collapsible from "react-collapsible";

const NavbarContent = () => {
  
  return (
      <div>
          
      
      <ul>
        <li className="pb-4">
          <a href="/">Dashboard</a>
        </li>
        <li className="pb-4">
          <a href="/">Inbox</a>
        </li>
        <li className="pb-4">
          <a href="/">Accounts</a>
        </li>
        <li className="pb-4">
          <a href="/">Search</a>
        </li>
        <li className="pb-4">
          <a href="/">Schedule</a>
        </li>
        <li className="pb-4">
          <Collapsible trigger="Settings">
            <a href="/adminsignup">
              <li>Admin Login</li>
            </a>
            <a href="/">
              <li>Doctor Login</li>
            </a>
            <a href="/">
              <li>Patient Login</li>
            </a>
          </Collapsible>
        </li>
      </ul>
    </div>
  );
};

export default NavbarContent;
