import { Paper, Typography,Button, } from "@material-ui/core";
// import React,{useState} from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import MainSidebar from "../AdminDashboard/MainSidebar/MainSidebar";
// import StudentTable from "./StudentTable/StudentTable";
// import Register from "../../Admin/userAdd/userAdd"

// const StudentInfo = () => {
//   const [showRegisterModal, setShowRegisterModal] = useState(false);

//   const handleSaveStudent = (data) => {
//     // Here you can send the data to the backend API
//     console.log("Student data to be saved:", data);

//     // Close the form after saving
//     setShowRegisterModal(false);
//   };

//   const handleShowRegisterModal = () => {
//     setShowRegisterModal(true);
//   };

//   const handleCloseRegisterModal = () => {
//     setShowRegisterModal(false);
//   };
//   return (
//     <div>
//       <Container fluid>
//         <Row>
//           <Col md={2} sm={12} className={`d-none d-md-block`}>
//             <MainSidebar />
//           </Col>
//           <Col md={10} style={{marginTop:"100px"}}>
//             <Container className="mb-5">
//               <Paper>
//                 <Typography
//                   className="text-center text-primary py-5"
//                   variant="h4"
//                 >
//                   Student-Info
//                 </Typography>
//               </Paper>
//               <Button variant="primary" onClick={handleShowRegisterModal}>
//                 Add Student
//               </Button>
//               <StudentTable />
//               <Register
//                 show={showRegisterModal}
//                 handleClose={handleCloseRegisterModal}
//                 handleSave={handleSaveStudent}
//               />
//             </Container>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default StudentInfo;



// import { Paper, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainSidebar from "../AdminDashboard/MainSidebar/MainSidebar";
import StudentTable from "./StudentTable/StudentTable";
import Register from "../../Admin/userAdd/userAdd";

const StudentInfo = () => {
 

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2} sm={12} className={`d-none d-md-block`}>
            <MainSidebar />
          </Col>
          <Col md={10} style={{ marginTop: "100px" }}>
            <Container className="mb-5">
              <Paper>
                <Typography
                  className="text-center text-primary py-5"
                  variant="h4"
                >
                  Student-Info
                </Typography>
              </Paper>
              
              <StudentTable />
             

            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentInfo;
