import React from "react";
import CourseCard from "../Components/CourseCard";
import Slider from "react-slick";
import { motion } from "framer-motion";

function Courses() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const courses = [
    "/Images/course1.jpg",
    "/Images/course1.jpg",
    "/Images/course1.jpg",
    "/Images/course1.jpg",
  ];

  return (
    <div className="px-10 md:px-24 py-10 pt-20 bg-purple-50 2xl:w-[70%] 2xl:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 overflow-hidden">
        <motion.div
          className="flex flex-col gap-2"
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-orange-500 text-xl font-medium">
            ITTIQ helps you design,
          </h4>
          <h1 className="font-medium text-4xl w-[90%]">
            Deliver, Manage, and Sustain Talent Development Solutions
          </h1>
          <h6 className="font-medium text-xl">for today and the future</h6>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={ { once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h6>
            Our team of experts brings a wealth of experience and knowledge to
            every client engagement, ensuring that we understand your unique
            needs and challenges. We work with you to develop customized talent
            solutions that align with your business strategy, culture, and
            goals...<span className="text-orange-500">Read More</span>
          </h6>
        </motion.div>
      </div>

      <motion.div
        className="slider-container mt-10"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Slider {...settings}>
          {courses.map((item, index) => (
            <CourseCard key={index} image={item} />
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Courses;
