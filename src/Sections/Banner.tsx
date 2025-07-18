import React, { useState } from "react";
import Navbar from "./Navbar";
import * as motion from "motion/react-client";
import slides from "../assets/slideData.json"

interface Slide {
  id: number;
  image: string;
  title: string;
}

function Banner() {

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [activeButton, setActiveButton] = useState<number>(0);

  return (
    <>
      <div id="banner" className="relative">
        <Navbar />

        <div className=" h-full ">
          <div className="overflow-hidden relative h-full w-full">
            <div
              className="flex transition duration-500 ease-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.slides.map((s:Slide) => (
                <img key={s.id} src={s.image} className="object-cover w-full h-full" />
              ))}
            </div>

            <div className="absolute bottom-0 flex justify-center gap-3 w-full py-5">
              {slides.slides.map((s:Slide) => (
                <div
                  key={s.id}
                  className={`h-1 w-8 rounded-full cursor-pointer ${
                    currentSlide == s.id ? "bg-orange-700" : "bg-gray-200"
                  }`}
                  onClick={() => setCurrentSlide(s.id)}
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
                  <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl 2xl:text-8xl 2xl:leading-28 px-5 sm:w-[60%] md:w-[80%] xl:w-[60%] mx-auto font-bold capitalize sm:leading-8 md:leading-8 lg:leading-16 xl:leading-20">
                    Améliorez
                    <span className="text-orange-600">
                      {" "}
                      vos compétences
                    </span>{" "}
                    pour faire progresser votre
                    <span className="text-orange-600">carrière</span>
                  </h1>
                </motion.div>
                <h6 className="text-neutral-400 px-3 2xl:text-3xl">
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
                      className={`group relative border-1 cursor-pointer inline-flex h-12 2xl:text-3xl 2xl:p-10 items-center justify-center overflow-hidden rounded-xl ${
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
                      className={`group relative border-1 cursor-pointer inline-flex h-12 2xl:text-3xl 2xl:p-10 items-center justify-center overflow-hidden rounded-xl ${
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
