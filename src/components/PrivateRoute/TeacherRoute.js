// import React from 'react';
// import { Redirect, Route } from 'react-router';

// const TeacherRoute = ({ children, ...rest }) => {
//     const user=JSON.parse(localStorage.getItem("user"))
    

//     return (
//         <div>
//         <Route
//   {...rest}
//   render={({ location }) =>
//     user && user.role==="Teacher" ? (
//       children
//     ) : (
//       <Redirect
//         to={{
//           pathname: "/login",
//           state: { from: location }
//         }}
//       />
//     )
//   }
// />
//     </div>
//     );
// };

// export default TeacherRoute;

import React from 'react';
import { Redirect, Route ,Navigate} from 'react-router';

const isAuthenticatedAsTeacher = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.role === "Teacher";
};

const TeacherRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticatedAsTeacher() ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default TeacherRoute;
