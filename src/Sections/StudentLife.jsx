import React from "react";
import { motion } from "framer-motion";

function StudentLife() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 sm:px-30 py-20 md:px-10 2xl:w-[70%] 2xl:mx-auto  overflow-hidden">
      <motion.div
        className="relative"
        id="students_image"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        initial={{ opacity: 0, x: -70 }}
      >
        <motion.div
          className="absolute bg-neutral-800 text-white text-2xl md:text-3xl lg:text-4xl w-[80%] xl:w-[60%] p-10 -bottom-5 -right-5 sm:-bottom-14 sm:-right-14"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          initial={{ opacity: 0, y: -70 }}
        >
          <h1>From Unemployable to a skill worker </h1>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center gap-5"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        initial={{ opacity: 0, x: 70 }}
      >
        <h6 className="text-orange-700 text-xl font-medium">High rated</h6>
        <h1 className="text-5xl font-medium w-[70%]">Student Campus Life</h1>
        <h6 className="font-medium text-xl">
          BE AMBITIOUS. BE VULNERABLE. BE YOU
        </h6>
        <p className="text-neutral-500 font-extralight">
          In addition to its training programs, ITTIQ offers a rich and varied
          social experience and other support systems where you’ll find outlets
          for creative expression and be your true self.
        </p>
        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-4 lg:gap-8">
          <button className="px-5 lg:px-10 p-2 rounded-xl bg-orange-600 text-white text-lg hover:bg-orange-700 duration-300 cursor-pointer">
            How We Work
          </button>
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl font-extralight"></i>
            <p className="text-xl font-medium">+229-54335532</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StudentLife;
