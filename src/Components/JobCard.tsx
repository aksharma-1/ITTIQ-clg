import React from "react";

function JobCard({ image }:{image: string}) {
  return (
    <div className="rounded-xl shadow-2xl pb-2 overflow-hidden">
      <img src={image} className="object-cover w-full cursor-pointer h-56 rounded-t-xl hover:scale-105 transition-all duration-300" />
      <div className="border-b border-b-gray-400 px-2 pb-6">
        <h1 className="w-[60%] font-semibold mt-2 leading-5 text-sm">
          Financial fundamentals courses
        </h1>
        <p className="text-neutral-500 text-xs mt-1">By Kelly Anderson</p>
      </div>

      <div className="flex gap-4 px-2 py-3">
        <div className="flex items-center gap-1">
          <i className="bxr  bx-clock-3"></i>
          <span className="text-xs text-neutral-500">22hr 30min</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="bx bx-video"></i>
          <span className="text-xs text-neutral-500">33 Courses</span>
        </div>
        <div className="flex items-center">
          <i className="bxr  bx-arrow-down-circle"></i>
          <span className="text-xs text-neutral-500">250 Sales</span>
        </div>
      </div>

      <div className="px-1 w-full mt-3">
        <button className="bg-orange-600 p-2 text-center w-full rounded-xl cursor-pointer text-white hover:bg-orange-700">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard;
