import React, { useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import courseImg1 from "../../../assests/images/web-design.png";
import courseImg2 from "../../../assests/images/graphics-design.png";
import courseImg3 from "../../../assests/images/ui-ux.png";
import courseImg4 from "../../../assests/images/why-choose-us.png";
// import courseImg3 from "../../../assests/images/ui-ux.png";
// import courseImg3 from "../../../assests/images/ui-ux.png";



import "./courses.css";
import CourseCard from "./CourseCard";
import { Card } from "react-bootstrap";
// import { useCart } from "../../reducer/cartContext";
// import { useCart } from "../reducer/cartContext";



const coursesData = [  
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    price: 500,
    imgUrl:courseImg1,
  
    category: "Graphics Design",
  },

  {
    id: "02",
    title: "Python for Beginners - Basics to Advanced Python",
    lesson: 12,
    students: 12.5,
    price: 500,
    imgUrl:courseImg2,
    category: "Web Design",
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    price: 500,
    imgUrl:courseImg3,
    category: "Graphics Design",
  },
  {
  id: "04",
  title: "UI/UX BootCamp for Beginners in 2022",
  lesson: 12,
  students: 12.5,
  price: 500,
  imgUrl:courseImg4,
  category: "Graphics Design",
},
{
  id: "05",
  title: "UI/UX BootCamp for Beginners in 2022",
  lesson: 12,
  students: 12.5,
  price: 500,
  imgUrl:courseImg3,
  category: "Graphics Design",
},
{
id: "06",
title: "UI/UX BootCamp for Beginners in 2022",
lesson: 12,
students: 12.5,
price: 500,
imgUrl:courseImg4,
category: "Web Design",
}
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const allCategories = ["All", "Web Design", "Graphics Design", "UI/UX"]; 

  const filteredCourses =
    selectedCategory === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick=(course)=>{
    console.log(course,"cvgv");
    setSelectedCourse(course);

  }

  // const { state } = useCart();
  // const { message } = state;

  return (
    <section>
       {/* {message && <p className="message">{message}</p>} */}
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>
              <div className="w-10 text-end d-flex justify-content-flexend align-items-center " style={{columnGap:"5px"}} >
                <h5 className="m-0">Categories:</h5>
                <DropdownButton
              
                  title={selectedCategory}
                  onSelect={handleCategorySelect}
                   style={{ maxWidth:"150px", fontSize: "18px"  }}
                   variant="success"
                >
                  {allCategories.map((category) => (
                    <Dropdown.Item key={category} eventKey={category}>
                      {category}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                
              </div>
            </div>
          </Col>
          {filteredCourses.map((item) => (
            <Col key={item.id} lg="4" md="6" sm="6">
              <CourseCard item={item} onClick={() => handleCardClick(item)} />
            </Col>
          ))}
        </Row>
        {selectedCourse && (
          <Row>
            <Col lg="12" className="mb-5">
              <Card>
                <Card.Header>{selectedCourse.title}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Lesson: {selectedCourse.lesson}
                    <br />
                    Students: {selectedCourse.students}
                    <br />
                    Price: {selectedCourse.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Courses;