import React from "react";

function CourseCard({ image }: { image: string }) {
  return (
    <div className="rounded-xl shadow-xl pb-2">
      <div className="w-full h-60 overflow-hidden">
        <img
          src={image}
          className="object-cover rounded-t-xl cursor-pointer hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="border-b border-b-gray-400 px-2 pb-6">
        <p className="text-neutral-500 text-xs mt-2">UI/UX Design</p>
        <h1 className="w-[60%] font-semibold mt-2 leading-5 text-sm">
          UI/UX Design for Beginners
        </h1>
      </div>

      <div className="flex gap-4 px-2 py-3">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
          <i className="bx bx-clock-3"></i>
          <span className="text-xs text-neutral-500">22hr 30min</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center  items-center gap-1 text-center">
          <i className="bx bx-video"></i>
          <span className="text-xs text-neutral-500">33 Courses</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center  items-center gap-1 text-center">
          <i className="bxr  bx-arrow-down-circle"></i>
          <span className="text-xs text-neutral-500">250 Sales</span>
        </div>
      </div>

      <div className="px-1 w-full mt-3">
        <button className="group relative w-full inline-flex h-[calc(48px+8px)] items-center justify-center rounded-xl bg-orange-600 py-1 pl-6 pr-14 font-medium text-neutral-50 cursor-pointer">
          <span className="z-10 pr-2 group-hover:text-neutral-900">
            Learn More
          </span>
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-xl bg-orange-100 duration-500 transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="mr-3.5 flex items-center justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-700"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
