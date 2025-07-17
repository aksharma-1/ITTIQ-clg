import React, { useState } from "react";
import StudentFeedbackCard from "../Components/StudentFeedbackCard";
import Slider from "react-slick";

function StudentFeedback() {
  var settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setPage(newIndex),
    appendDots: (dots) => (
      <div className="slider_dots">
        <ul
          className="flex justify-center gap-3 w-full"
          style={{ margin: "0px", position: "absolute", bottom: "-30px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
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

  const [currentPage, setPage] = useState(0);

  const students = [
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
    <div className="px-10 py-20 2xl:w-[70%] 2xl:mx-auto">
      <h1 className="text-center text-4xl font-medium my-3">
        What Our Student’s Say
      </h1>
      <h6 className="text-center text-neutral-400 w-[80%] md:w-[55%] mx-auto leading-4">
        L'ITTIQ ne forme pas seulement des experts en technologie, mais
        également les futurs leaders de l'industrie technologique
      </h6>

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
