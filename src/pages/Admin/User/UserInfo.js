import React, { useEffect, useState } from "react";
import {  Typography,Button, } from "@material-ui/core";

import { Col, Container, Row } from "react-bootstrap";
import MainSidebar from "../AdminDashboard/MainSidebar/MainSidebar";
import Register from "../../Admin/userAdd/userAdd";
import Paper from "@material-ui/core/Paper";
import UserTable from "./UserTable";

function userInfo() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleSaveStudent = (data) => {
    const { userName, email, password, confirmpassword, role } = data;

    // Here you can send the data to the backend API
    console.log("Student data to be saved:", data);
    // setLoading(true);
    fetch("https://prabhatechlmsserver.onrender.com/auth/adduser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
        confirmpassword,
        role,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // setLoading(false);
        console.log(result);
        if (result.errors) {
          setError(result.errors);
        } else {
          // setToast(true);
          // setError(null);
          setTimeout(() => {
            navigate("/#");
          }, 3000);
          clearTimeout();
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Close the form after saving
    setShowRegisterModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2} sm={12} className={`d-none d-md-block`}>
            <MainSidebar />
          </Col>
          <Col md={10} style={{ marginTop: "150px" }}>
            <Container className="mb-5">
              <Paper>
                <Typography
                  className="text-center text-primary py-5"
                  variant="h4"
                >
                  User-Info
                </Typography>
                
              </Paper>
              <Button  className="btn bg-dark mt-5 text-white" variant="primary" onClick={handleShowRegisterModal}>
                 Add User 
              </Button>
              {/* <StudentTable /> */}
              <UserTable />
              <Register
                show={showRegisterModal}
                handleClose={handleCloseRegisterModal}
                handleSave={handleSaveStudent}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default userInfo;
