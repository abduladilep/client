

import React from 'react';
import { Redirect, Route, } from 'react-router';
import {  Navigate} from "react-router-dom";

// const isAuthenticatedAsAdmin = () => {
  // };
  
  const StudentRoute = ({ children, ...rest }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn= user && user.role === "Admin";
  console.log("admin route");
  console.log("chill",children);

  
  // if (!isLoggedIn) {
  //   return <Navigate to="/login"  />;
  // }
  return children
  
};


export default StudentRoute;