import React, { Fragment } from "react";
import HeroSection from "../components/Home/Hero-Section/HeroSection";
import Courses from "../components/Home/Courses-section/Courses";
import Features from "../components/Home/Feature-section/Features";


// import CompanySection from "../components/Company-section/Company";

// import AboutUs from "../components/About-us/AboutUs";
// import ChooseUs from "../components/Choose-us/ChooseUs";
import FreeCourse from "../components/Home/Free-course-section/FreeCourse";

import Testimonials from "../components/Home/Testimonial/Testimonials";

import Newsletter from "../components/Home/Newsletter/Newsletter";
import Footer from "../components/Home/Footer/Footer";
import Header2 from "../components/Home/Header2/Header2";

const Home = () => {
  console.log("homeee pagee");
  return (
<>
     <Header2/>
      <HeroSection />
      {/* <CompanySection /> */}
      {/* <AboutUs /> */}
      <Courses />
      {/* <ChooseUs /> */}
      <Features />
      <FreeCourse />
      {/* <Testimonials /> */}
      <Newsletter /> 
      <Footer />
      </> 
  );
};

export default Home;
