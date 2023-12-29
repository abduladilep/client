import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin";
// import Styles from "./AdminDashboard.module.css";
import { Paper, Typography } from "@material-ui/core";
import MainSidebar from "./MainSidebar/MainSidebar";
import Dashboard from "../../DashBoard/Dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import Body4Card from "../../DashBoard/Body4Card/Body4Card";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CourseCard from "../../DashBoard/CourseCard/CourseCard";
import SideCalender from "../../../components/Calender/SideCalender";
import RightSidebar from "../../DashBoard/RightSidebar/RightSidebar";
import img1 from "../../../assests/images/seo.png"
import MessageIcon from "@material-ui/icons/Message";
import {
  Button,
  Card,
  Divider,
  IconButton,
 
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";



const AdminDashboard = () => {
  const [data, setData] = useState([]);

  const [pageValue, setPageValue] = useState(5);
  const { user } = useSelector((state) => state.auth);
  const { courseInfo } = useSelector((state) => state.course);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);

  return (
    <Container fluid>
      <Row>
        <Col
          md={2}
          sm={12}
          className={`d-none d-md-block`}
        >
          <MainSidebar/>
          {/* <Dashboard/> */}
          
        </Col>
        <Col md={10}  style={{marginTop:"150px"}}>
          {/* <Container>
            <Paper>
              <Typography
                className="text-center text-primary py-5"
                variant="h4"
              >
                Welcome to Admin Dashboard
                
              </Typography>
            </Paper>
          </Container> */}
          
      <div>
        <Container>
          <div>
            {/* <h2 >{user && user.userName}</h2> */}
            {/* <Link to="/">Dashboard</Link> */}
          </div>
        </Container>

        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
          <Body4Card
            link="/messages"
            shortTitle="Communicate"
            title="Message"
            Icon={MessageIcon}
          />
          <Body4Card
            link="/profile"
            shortTitle="Your Profile"
            title="Profile"
            Icon={AccountCircleOutlinedIcon}
          />
          <Body4Card
            link="/settings"
            shortTitle="Preferences"
            title="Settings"
            Icon={SettingsApplicationsIcon}
          />
          <Body4Card
            shortTitle="Performance"
            title="Grades"
            Icon={TouchAppIcon}
          />
          
        </div>

        <Container fluid className="my-5">
          <Row>
            <Col md={9} xs={12} sm={12}>
              <Container>
                <Button
                  className="my-2 mb-5"
                  color="primary"
                  variant="contained"
                >
                  Customize This Page
                </Button>
                <div>
                  <Row>
                    <Col>
                      <Paper className="d-flex justify-content-between align-items-center p-2 flex-wrap">
                        <Typography variant="h6">
                          Recently accessed courses
                        </Typography>

                        <div >
                          <IconButton
                            onClick={() => {
                              if (start==0 || end==0) {
                                setEnd(courseInfo.length);
                                setStart(courseInfo.length-1);
                              } else {
                               
                                setStart(start - 1);
                                setEnd(end - 1);
                              }
                              console.log(start,end)
                            }}

                          >
                            <ArrowBackIosIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              if (courseInfo.length == end) {
                                setStart(0);
                                setEnd(1);
                              } else {
                                setStart(start + 1);
                                setEnd(end + 1);
                              }
                            }}
                          >
                            <ArrowForwardIosIcon />
                          </IconButton>
                        </div>
                      </Paper>
                    </Col>
                  </Row>
                </div>

                <Divider />
                {courseInfo.length > 0 &&
                  courseInfo.slice(start, end).map((val) => {
                    return (
                      <CourseCard
                        key={Math.random(2) * 10}
                        title={val.courseDescription}
                        name={val.courseName}
                        id={val._id}
                        img={val.courseThumbnail}
                      />
                    );
                  })}
              </Container>

              <Container className="mt-5">
                <Paper className="d-flex justify-content-between align-items-center p-4">
                  <Typography variant="h6">Courses</Typography>
                </Paper>
                <Divider />

                {data.length > 0 &&
                  data.slice(0, pageValue).map((val) => {
                    return (
                      <CourseCard
                        key={Math.random(2) * 10}
                        title={val.courseDescription}
                        name={val.courseName}
                        id={val._id}
                        img={val.courseThumbnail}
                      />
                    );
                  })}

                <div className=" d-flex align-items-center my-2">
                  <Typography className="mr-3" variant="subtitle1">
                    Show
                  </Typography>
                  <select
                   
                    onChange={(e) => setPageValue(e.target.value)}
                  >
                    {[5, 10, 20, "All"].map((val) => {
                      return <option key={val}>{val}</option>;
                    })}
                  </select>
                </div>
              </Container>
            </Col>

            {/* TODO:Right Sidebar */}

            <Col className=" right__sidebar__dashboard " md={3} xs={12} sm={12}>
              <RightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
        </Col>

      </Row>
    </Container>
  );
};

export default AdminDashboard;
