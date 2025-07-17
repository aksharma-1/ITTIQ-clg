import React from "react";
import JobCard from "../Components/JobCard";
import Slider from "react-slick";
import { motion } from "framer-motion";

function JobPosts() {
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

  const cards = [
    "/Images/JobCards/card1.jpg",
    "/Images/JobCards/card2.jpg",
    "/Images/JobCards/card3.jpg",
    "/Images/JobCards/card4.jpg",
  ];

  return (
    <div className="relative px-10 py-10 dark:bg-zinc-800 2xl:w-[70%] 2xl:mx-auto">
      <motion.h1
        className="text-center text-4xl font-medium my-3"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        initial={{ opacity: 0, y: 70 }}
      >
        Choose Your Career Path
      </motion.h1>
      <motion.h6
        className="text-center text-neutral-500 w-[60%] mx-auto"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        initial={{ opacity: 0, y: 70 }}
      >
        Nous nous engageons à fournir une éducation technologique à la prochaine
        génération de leaders au Bénin, en promouvant l'égalité et
        l'autonomisation
      </motion.h6>

      <div id="jobCardLeftDiv" className="absolute top-0 z-10"></div>
      <div id="jobCardRightDiv" className="absolute top-0 z-10 right-0"></div>

      <div className="slider-container mt-10">
        <Slider {...settings}>
          {cards.map((item, index) => (
            <JobCard key={index} image={item} />
          ))}
        </Slider>
      </div>

      <div className="text-center mt-10">
        <motion.button
          className="group relative cursor-pointer"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          initial={{ opacity: 0, y: 70 }}
        >
          <div className="relative z-10 inline-flex p-2 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-800 px-8 font-normal text-neutral-50 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
            View All
          </div>
          <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
        </motion.button>
      </div>
    </div>
  );
}

export default JobPosts;
