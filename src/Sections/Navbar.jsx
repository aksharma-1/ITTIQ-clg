import React, { useState } from "react";

const activeRoute = () => {
  return (
    <div
      className="absolute w-full left-0 border-2 rounded-2xl transform transition-transform"
      style={{
        top: "-8px",
      }}
    ></div>
  );
};

function Navbar() {
  const navigations = [
    "home",
    "admission",
    "corporate training",
    "programs & courses",
    "about us",
    "blog",
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("home");

  return (
    <>
      <nav className="absolute z-10 flex items-center justify-around text-xs p-3 w-full">
        <a href="/" className="">
          <img src="Images/logo.png" width={120} />
        </a>

        <div className="flex items-center justify-around gap-6 font-medium">
          <ul className="md:flex items-center justify-around gap-4 hidden text-white h-full">
            {navigations.map((item, index) => (
              <li
                key={index * 12}
                className={`cursor-pointer px-2 py-4 relative capitalize duration-200 ${
                  currentRoute !== item && "hover:pb-2 hover:text-orange-600"
                }`}
                onClick={() => setCurrentRoute(item)}
              >
                {currentRoute === item && activeRoute()}
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="group relative cursor-pointer inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-orange-800 transition hover:scale-110">
            <span>Apply</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-black/20"></div>
            </div>
          </button>
          <button className="md:hidden cursor-pointer p-2 rounded-xl focus:outline-1 focus:outline-purple-300">
            <i
              className="bx bx-menu text-xl text-gray-600"
              onClick={() => setMenuOpen(!isMenuOpen)}
            ></i>
          </button>
        </div>

        <div
          className={`absolute xl:hidden bg-amber-50 top-15 left-0 w-full flex flex-col items-center transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          <li className="list-none text-center p-4 transition-all cursor-pointer">
            HOME
          </li>
          <li className="list-none text-center p-4 transition-all cursor-pointer">
            Admissions
          </li>
          <li className="list-none text-center p-4 transition-all cursor-pointer">
            Corporate Training
          </li>
          <li className="list-none text-center p-4 transition-all cursor-pointer">
            Program & Courses
          </li>
          <li className="list-none text-center p-4 transition-all cursor-pointer">
            About Us
          </li>
          <li className="list-none text-center p-4 transition-all cursor-pointer">
            Blog
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
