import React from "react";

function StudentFeedbackCard({ name, position, image }: { name: string; position: string; image: string }) {
  return (
    <div className="shadow-xl cursor-pointer hover:scale-105 transition-all duration-300">
      <div className="px-2 pb-6">
        <h1 className="font-extralight mt-2 leading-5 text-sm mb-10">
          “Complete account of the system and expound the actual Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots”
        </h1>
        <div className="flex flex-row sm:flex-col md:flex-row items-center gap-3">
          <img src={image} className="w-10 h-10 rounded-full" />
          <div className="leading-0">
            <p className="text-xs font-medium m-0">{name}</p>
            <span className="text-xs font-medium text-neutral-500 m-0">{position}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentFeedbackCard;
