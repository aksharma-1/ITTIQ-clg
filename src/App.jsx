import React, { useEffect } from "react";
import "../src/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Sections/Banner";
import JobPosts from "./Sections/JobPosts";
import Courses from "./Sections/Courses";
import Partner from "./Sections/Partner";
import StudentFeedback from "./Sections/StudentFeedback";
import StudentLife from "./Sections/StudentLife";
import Footer from "./Sections/Footer";

function App() {


  return (
    <div className={`scroll-smooth`}>
      <Banner />
      <JobPosts />
      <Courses />
      <Partner />
      <StudentFeedback />
      <StudentLife />
      <Footer />
    </div>
  );
}

export default App;
