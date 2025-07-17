import React from "react";
import JobCard from "../Components/JobCard";
import Slider from "react-slick";

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
      <h1 className="text-center text-4xl font-medium my-3">
        Choose Your Career Path
      </h1>
      <h6 className="text-center text-neutral-500 w-[60%] mx-auto">
        Nous nous engageons à fournir une éducation technologique à la prochaine
        génération de leaders au Bénin, en promouvant l'égalité et
        l'autonomisation
      </h6>

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
        <button className="group relative cursor-pointer">
          <div className="relative z-10 inline-flex p-2 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-800 px-8 font-normal text-neutral-50 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
            View All
          </div>
          <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
        </button>
      </div>
    </div>
  );
}

export default JobPosts;
