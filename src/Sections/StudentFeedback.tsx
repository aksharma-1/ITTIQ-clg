import React, { useState } from "react";
import StudentFeedbackCard from "../Components/StudentFeedbackCard";
import Slider from "react-slick";
import { motion } from "framer-motion";

interface Student{
  name: string;
  position: string;
  image: string;
}

function StudentFeedback() {
  var settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex:number, newIndex:number) => setPage(newIndex),
    appendDots: (dots:React.ReactNode) => (
      <div className="slider_dots">
        <ul
          className="flex justify-center gap-3 w-full"
          style={{ margin: "0px", position: "absolute", bottom: "-30px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i:number) => (
      <div
        className={`h-3 rounded-full ${
          i === currentPage ? "bg-orange-700 w-6" : "bg-neutral-500 w-3"
        }`}
      ></div>
    ),
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

  const [currentPage, setPage] = useState<number>(0);

  const students:Student[] = [
    {
      name: "Finlay Kirk",
      position: "Web Developper",
      image: "/Images/profile1.png",
    },
    {
      name: "Dannette P. Cervantes",
      position: "Web Design",
      image: "/Images/profile2.png",
    },
    {
      name: "Clara R. Altman",
      position: "UI&UX Design",
      image: "/Images/profile3.png",
    },
    {
      name: "Finlay Kirk",
      position: "Web Developper",
      image: "/Images/profile1.png",
    },
  ];

  return (
    <div className="px-10 py-20 2xl:w-[70%] 2xl:mx-auto overflow-hidden">
      <motion.h1
        className="text-center text-4xl font-medium my-3"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        initial={{ opacity: 0, x: 70 }}
      >
        What Our Student’s Say
      </motion.h1>
      <motion.h6
        className="text-center text-neutral-400 w-[80%] md:w-[55%] mx-auto leading-4"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        initial={{ opacity: 0, x: -70 }}
      >
        L'ITTIQ ne forme pas seulement des experts en technologie, mais
        également les futurs leaders de l'industrie technologique
      </motion.h6>

      <div className="slider-container mt-10">
        <Slider {...settings}>
          {students.map((item, index) => (
            <StudentFeedbackCard
              key={index}
              name={item.name}
              position={item.position}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default StudentFeedback;
