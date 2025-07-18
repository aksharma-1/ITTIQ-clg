import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white sm:px-12 md:px-32 p-10">
      <div className="border-b-2 flex flex-col md:flex-row justify-between items-center pb-6 gap-10">
        <div>
          <img src="Images/logo.png" alt="Logo" />
        </div>

        <ul
          className="grid grid-cols-3 md:grid-cols-7 gap-4 justify-items-end"
          style={{ fontSize: "11px" }}
        >
          <li className="col-span-3 text-center md:col-span-1 w-full">
            <button className="cursor-pointer text-sm font-medium hover:scale-110 duration-300 ease-in-out">
              Quick Links
            </button>
          </li>
          <li className="w-full">
            <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
              Home
            </button>
          </li>
          <li className="w-full text-center md:text-left">
            <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
              Admission
            </button>
          </li>
          <li className="w-full text-right md:text-left">
            <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
              Programm & Courses
            </button>
          </li>
          <li className="w-full">
            <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
              Blog
            </button>
          </li>
          <li className="w-full text-center md:text-left">
            <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
              FAQ
            </button>
          </li>
          <li className="w-full text-right md:text-left">
            <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
              Careers
            </button>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 py-10 gap-10">
        <div className="md:pr-16 col-span-4 xl:col-span-1">
          <h6 className="text-center lg:text-left">
            Canada Chemin D’aigremont Lorraine Quebec Republic Of Benin - Lot 29
            PK Cotonou
          </h6>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col items-baseline sm:flex-row sm:items-center gap-2">
          <i className="bx bx-phone text-sm bg-white rounded-full text-black p-2"></i>
          <p>P+229-546235899</p>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col sm:flex-row items-end sm:items-center gap-2">
          <i className="bx bx-message text-sm bg-white rounded-full text-black p-2"></i>
          <p>info@gmail.com</p>
        </div>
        <div className="col-span-4 lg:col-span-2 xl:col-span-1 flex gap-4 flex-col">
          <p className="text-right">Subscribe</p>
          <div className="relative flex bg-white rounded-3xl p-2 pe-10">
            <input
              type="email"
              className="text-black focus:outline-0 ps-2 w-3/5"
            />
            <button className="absolute right-1 top-1 rounded-2xl group cursor-pointer inline-flex h-8 items-center justify-center overflow-hidden  bg-orange-700 text-white px-5 font-medium transition">
              <span>Subscribe</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-black/20"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center justify-items-normal">
        <div className="order-last md:order-first w-full">
          <h6 className="text-sm text-center md:text-left font-medium">
            loremipsum© 2023. All Rights Reserved.
          </h6>
        </div>
        <div>
          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            style={{ fontSize: "11px" }}
          >
            <li className="text-center w-full">
              <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
                Privacy Policy
              </button>
            </li>
            <li className="text-center w-full">
              <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
                Terms & Condition
              </button>
            </li>
            <li className="text-center w-full">
              <button className="cursor-pointer hover:scale-110 duration-300 ease-in-out">
                Site Map
              </button>
            </li>
          </ul>
        </div>
        <div className="order-first md:order-last flex gap-2 justify-center md:justify-end">
          <span className="text-lg bg-white rounded-full p-3 text-black cursor-pointer hover:text-blue-600">
            <FaFacebookF />{" "}
          </span>
          <span className="text-lg bg-white rounded-full p-3 text-black cursor-pointer hover:text-blue-600">
            <FaTwitter />
          </span>
          <span className="text-lg bg-white rounded-full p-3 text-black cursor-pointer hover:text-pink-600">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
