import React, { useState } from "react";

function Partner() {
  const partners:string[] = [
    "/Images/partner1.png",
    "/Images/partner2.png",
    "/Images/partner3.png",
    "/Images/partner4.png",
  ];
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="bg-neutral-800 w-full py-5 border-4 border-y-orange-600 2xl:w-[70%] 2xl:mx-auto">
      <h4 className="text-center text-white font-medium text-3xl mb-8">
        Our partners
      </h4>
      <div className="w-[60%] h-full mx-auto">
        <div className="overflow-hidden relative h-full">
          <div
            className="flex justify-center gap-10 transition duration-500 ease-out h-full"
            style={{
              transform: `translateX(-${currentSlide * 50}%)`,
            }}
          >
            {partners.map((item:string, index) => (
              <img key={index} src={item} className="w-[10%] cursor-pointer hover:scale-110 transition-all duration-300" />
            ))}
            {partners.map((item:string, index) => (
              <img key={index} src={item} className="w-[10%] cursor-pointer hover:scale-110 transition-all duration-300" />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 w-full mt-10">
          {partners.slice(0,2).map((s, index:number) => (
            <div
              key={index}
              className={`h-3 rounded-full cursor-pointer transition duration-300 ${
                currentSlide == index ? "bg-orange-700 w-8" : "bg-gray-200 w-3"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partner;
