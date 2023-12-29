// import React from "react";
// import { Redirect, Route,Navigate } from "react-router";

// const AdminRoute = ({ children, ...rest }) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log("admin route",user);
//   console.log(children,"chill");

//   return (
//     <div>

//       <Route
//         {...rest}
//         render={({ location }) =>
//           user && user.role === "Admin" ? (
//             children
//           ) : (
//             <Navigate
//               to={{
//                 pathname: "/login",
//                 state: { from: location },
//               }}
//             />
//           )
//         }
//       />
//     </div>
//   );
// };

// export default AdminRoute;

import React from 'react';
import { Redirect, Route, } from 'react-router';
import {  Navigate} from "react-router-dom";

// const isAuthenticatedAsAdmin = () => {
  // };
  
  const AdminRoute = ({ children, ...rest }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn= user && user.role === "Admin";
  console.log("admin route");
  console.log("chill",children);

  
  // if (!isLoggedIn) {
  //   return <Navigate to="/login"  />;
  // }
  return children
  
};


export default AdminRoute;