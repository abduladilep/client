// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Switch,
//   useNavigate,
// } from "react-router-dom";
// import DashBoard from "./pages/DashBoard/Dashboard";
// import Settings from "./pages/Settings/Settings";
// import Messages from "./pages/Messages/Messages";
// import Grades from "./pages/Grades/Grades";
// import Profile from "./pages/Profile/Profile";
// import Header from "./components/Header/Header";
// import CourseInfo from "./pages/CourseInfo/CourseInfo";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import TeacherDashboard from "./pages/Teacher/TeacherDashboard/TeacherDashboard";
// import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import StudentRoute from "./components/PrivateRoute/StudentRoute";
// import TeacherRoute from "./components/PrivateRoute/TeacherRoute";
// import AdminRoute from "./components/PrivateRoute/AdminRoute";
// import AdminCourseInfo from "./pages/Admin/Course/AdminCourseInfo";
// import StudentInfo from "./pages/Admin/Student/StudentInfo";
// import TeacherInfo from "./pages/Admin/Teacher/TeacherInfo";
// import AllCourses from "./pages/All-Courses/AllCourses";
// import NotFound from "./pages/404NotFoud/NotFound";
// import Libray from "./pages/Library/Libray";
// import Ucam from "./pages/Ucam/Ucam";
// import Home from "./pages/Home";

// const App = () => {
//   // const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user.role)
//   // useEffect(() => {
//   //   if (!user) {
//   //     navigate("/login");
//   //   } else {
//   //     dispatch({ type: "SET__USER", payload: user });
//   //   }
//   // }, []);
//   return (
//     <Router>
//       <Routes>
//       <StudentRoute exact path="/">
//         <DashBoard />
//       </StudentRoute>
//       <StudentRoute exact path="/library">
//         <Libray />
//       </StudentRoute>
//       <StudentRoute exact path="/ucam">
//         <Ucam />
//       </StudentRoute>
//       <TeacherRoute exact path="/teacher-dashboard">
//         <TeacherDashboard />
//       </TeacherRoute>
//       <AdminRoute exact path="/admin-dashboard">
//         <AdminDashboard />
//       </AdminRoute>
//       <Route path='/admin-dashboard'><AdminDashboard/></Route>
//       <AdminRoute exact path="/admin/course-info">
//         <AdminCourseInfo />
//       </AdminRoute>

//       <AdminRoute exact path="/admin/student-info">
//         <StudentInfo />
//       </AdminRoute>
//       <AdminRoute exact path="/admin/teacher-info">
//         <TeacherInfo />
//       </AdminRoute>
//       <StudentRoute exact path="/messages">
//         <Messages />
//       </StudentRoute>
//       <Route exact path="/profile">
//         <Profile />
//       </Route>
//       <Route exact path="/settings">
//         <Settings />
//       </Route>
//       <Route exact path="/grades">
//         <Grades />
//       </Route>

//       <Route exact path="/login">
//         <Login />
//       </Route>
//       <Route exact path="/register">
//         <Register />
//       </Route>
//       <Route exact path="/all-courses">
//         <AllCourses />
//       </Route>
//       <Route exact path="/course/:courseId">
//         <CourseInfo />
//       </Route>

//       <Route  path="*">
//          <NotFound />
//        </Route>
//        </Routes>
//        </Router>
//          );
//  };
// // function App() {
// //   return (
// //     <div className="App">
// //       <Router>
// //         <Routes>
// //         {/* <Header /> */}
// //           {/* <Routing /> */}
// //           <Route exact path="/home" element={<Home />}></Route>
// //           <Route exact path="/" element={<DashBoard />}></Route>
// //           <Route exact path="/library" element={<Libray />}></Route>
// //           <Route exact path="/ucam" element={<Ucam />}></Route>
// // {/*
// //           <TeacherRoute
// //             exact
// //             path="/teacher-dashboard"
// //             element={<TeacherDashboard />}
// //           ></TeacherRoute> */}
// //            <Route
// //             path="/teacher-dashboard"
// //             element={<TeacherRoute component={<TeacherDashboard />} />}
// //           />
// //            {/* <Route
// //             path="/admin-dashboard"
// //             element={<AdminRoute component={<AdminDashboard />} />}
// //           /> */}

// //           {/* <Route
// //             path="/admin/course-info"
// //             element={<AdminRoute component={<AdminCourseInfo />} />}
// //           /> */}
// //           <AdminRoute
// //             exact
// //             path="/admin-dashboard"
// //             element={<AdminDashboard />}
// //           ></AdminRoute>
// //           {/* <AdminRoute
// //             exact
// //             path="/admin/course-info"
// //             element={<AdminCourseInfo />}
// //           ></AdminRoute>
// //           <AdminRoute
// //             exact
// //             path="/admin/student-info"
// //             element={<StudentInfo />}
// //           ></AdminRoute>
// //           <AdminRoute
// //             exact
// //             path="/admin/teacher-info"
// //             element={<TeacherInfo />}
// //           ></AdminRoute> */}
// //           {/* <StudentRoute
// //             exact
// //             path="/messages"
// //             element={<Messages />}
// //           ></StudentRoute> */}

// //           <Route exact path="/profile" element={<Profile />}></Route>
// //           <Route exact path="/settings" element={<Settings />}></Route>
// //           <Route exact path="/grades" element={<Grades />}></Route>

// //           <Route exact path="/login" element={<Login />}></Route>
// //           <Route exact path="/register" element={<Register />}></Route>
// //           <Route exact path="/all-courses" element={<AllCourses />}></Route>
// //           <Route
// //             exact
// //             path="/course/:courseId"
// //             element={<CourseInfo />}
// //           ></Route>
// //         </Routes>
// //       </Router>
// //     </div>
// //   );
// // }

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Routes,
  useHistory,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard";
import Settings from "./pages/Settings/Settings";
import Messages from "./pages/Messages/Messages";
import Grades from "./pages/Grades/Grades";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StudentRoute from "./components/PrivateRoute/StudentRoute";
import TeacherRoute from "./components/PrivateRoute/TeacherRoute";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import AdminCourseInfo from "./pages/Admin/Course/AdminCourseInfo";
import StudentInfo from "./pages/Admin/Student/StudentInfo";
import TeacherInfo from "./pages/Admin/Teacher/TeacherInfo";
import UserInfo from "./pages/Admin/User/UserInfo";
import AllCourses from "./pages/All-Courses/AllCourses"
import NotFound from "./pages/404NotFoud/NotFound";
import Libray from "./pages/Library/Libray";
import Ucam from "./pages/Ucam/Ucam";
import Home from "./pages/Home";  
import Cart from "./components/Home/cart/cart";
import AddCourseModal from "./pages/Admin/Course/AddCourse/AddCourseModal/AddCourseModal";
const Routing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user)
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   } else {
  //     dispatch({ type: "SET__USER", payload: user });
  //   }
  // }, []);
  return (
    <Routes>
      <Route
        path="/admin-dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/course-info"
        element={
          <AdminRoute>
            <AdminCourseInfo />
          </AdminRoute>
        }
      />
    
       
      <Route
        path="/admin/student-info"
        element={
          <AdminRoute>
            <StudentInfo />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/teacher-info"
        element={
          <AdminRoute>
            <TeacherInfo />
          </AdminRoute>
        }
      />
       <Route
        path="/admin/user-info"
        element={
          <AdminRoute>
            <UserInfo />
          </AdminRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <StudentRoute>
            <DashBoard />
          </StudentRoute>  
        }
      />
      <Route
        path="/library"
        element={
          <StudentRoute>
            <Libray />
          </StudentRoute>
        }
      />

      <Route
        path="/ucam"
        element={
          <StudentRoute>
            <Ucam />
          </StudentRoute>
        }
      />

      <Route
        path="/teacher-dashboard"
        element={
          <TeacherRoute>
            <TeacherDashboard />
          </TeacherRoute>
        }
      />

      <Route
        path="/messages"
        element={
          <StudentRoute>
            <Messages />
          </StudentRoute>
        }
      />

      <Route path="/profile" element={<Profile />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="/grades" element={<Grades />} />

      <Route path="/login" element={<Login />} />

      <Route  path="/" element={<Home />} />

      <Route exact path="/register" element={<Register />} />

      <Route exact path="/all-courses" element={<AllCourses />} />

      <Route exact path="/course/:courseId" element={<CourseInfo />} />
      <Route exact path="/cart" element={ <Cart/>} />
      {/* <Route exact path="/AddCourseModal" element={ <AddCourseModal/>} /> */}



      {/* <Route path="*">
        <NotFound />
      </Route> */}
    </Routes>
  );
};

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routing />
       

      </BrowserRouter>
    </div>
  );
}

export default App;
