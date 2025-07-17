import React, { useState } from "react";
import Navbar from "./Navbar";
import * as motion from "motion/react-client";

function Banner() {
  let slides = [
    "/Images/banner.jpg",
    "/Images/banner.jpg",
    "/Images/banner.jpg",
    "/Images/banner.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <>
      <div id="banner" className="relative 2xl:w-[70%] 2xl:mx-auto">
        <Navbar />

        <div className=" h-full ">
          <div className="overflow-hidden relative h-full w-[100%]">
            <div
              className="flex transition duration-500 ease-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((s, index) => (
                <img key={index} src={s} className="object-cover" />
              ))}
            </div>

            <div className="absolute bottom-0 flex justify-center gap-3 w-full py-5">
              {slides.map((s, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full cursor-pointer ${
                    currentSlide == index ? "bg-orange-700" : "bg-gray-200"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>

            <div className="absolute text-center top-1/4 w-full">
              <div className="text-white flex flex-col justify-center items-center gap-5 sm:gap-3 md:gap-5 lg:gap-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2.5,
                    scale: { type: "spring", visualDuration: 1.9, bounce: 0.5 },
                  }}
                >
                  <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl px-5 sm:w-[60%] md:w-[80%] xl:w-[60%] mx-auto font-bold capitalize sm:leading-8 md:leading-8 xl:leading-20">
                    Améliorez
                    <span className="text-orange-600">
                      {" "}
                      vos compétences
                    </span>{" "}
                    pour faire progresser votre
                    <span className="text-orange-600">carrière</span>
                  </h1>
                </motion.div>
                <h6 className="text-neutral-400 px-3">
                  Nous nous engageons à fournir une éducation technologique à la
                  prochaine <span className="md:block">génération</span> de
                  leaders au Bénin, en promouvant l'égalité et l'autonomisation.
                </h6>
                <div className="flex justify-center gap-2 sm:gap-8 flex-col sm:flex-row">
                  <motion.div
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: "0%" }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                    }}
                  >
                    <button
                      className={`group relative border-1 cursor-pointer inline-flex h-12 items-center justify-center overflow-hidden rounded-xl ${
                        activeButton !== 0 ? "bg-transparent" : "bg-orange-600"
                      } px-6 font-medium text-neutral-50`}
                      onClick={() => setActiveButton(0)}
                    >
                      <span
                        className={`absolute h-0 w-0 rounded-full bg-orange-600 transition-all duration-300 ${
                          activeButton !== 0
                            ? "group-hover:h-56 group-hover:w-full"
                            : "group-hover:h-56 group-hover:w-full group-hover:bg-orange-700"
                        }`}
                      ></span>
                      <span className="relative">Apply Now</span>
                    </button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: "0%" }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                    }}
                  >
                    <button
                      className={`group relative border-1 cursor-pointer inline-flex h-12 items-center justify-center overflow-hidden rounded-xl ${
                        activeButton !== 1 ? "bg-transparent" : "bg-orange-600"
                      } px-6 font-medium text-neutral-50`}
                      onClick={() => setActiveButton(1)}
                    >
                      <span
                        className={`absolute h-0 w-0 rounded-full bg-orange-600 transition-all duration-300 ${
                          activeButton !== 1
                            ? "group-hover:h-56 group-hover:w-full"
                            : "group-hover:h-56 group-hover:w-full group-hover:bg-orange-700"
                        }`}
                      ></span>
                      <span className="relative">Browse Course</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
