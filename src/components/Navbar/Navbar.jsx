import { FaBars } from "react-icons/fa";
import {FcHome , FcInfo, FcGraduationCap, FcPhone, FcRating} from "react-icons/fc"
import logo from "../../assets/d_trans.png"

import React, { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3 shadow-md">
        <div className="container px-3 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-extrabold leading-relaxed inline-block mr-2 py-2 whitespace-nowrap uppercase text-gray-700 prose-h3:first-letter:"
              href="/"
            >
              <img className="inline-block h-8 w-8 mr-1" src={logo}/>DAN
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars className="text-slate-700" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="flex items-center text-lg uppercase font-bold leading-snug px-3 py-1 text-gray-700 hover:opacity-75 space-x-2"
                  href="/"
                >
                  <FcHome/>
                  <span className="">HOME</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center text-lg  uppercase font-bold leading-snug px-3 py-1 text-gray-700 hover:opacity-75 space-x-2"
                  href="/about"
                >
                  <FcInfo/>
                  <span className="">ABOUT</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center text-lg uppercase font-bold leading-snug px-3 py-1 text-gray-700 hover:opacity-75 space-x-2"
                  href="/career"
                >
     <FcGraduationCap/>
                  <span className="">CAREER</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center text-lg uppercase font-bold leading-snug px-3 py-1 text-gray-700 hover:opacity-75 space-x-2"
                  href="/skills"
                >
     <FcRating/>
                  <span className="">SKILLS</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center text-lg  uppercase font-bold leading-snug px-3 py-1 text-gray-700 hover:opacity-75 space-x-2"
                  href="/contact"
                >
               <FcPhone/>
                  <span className="">CONTACT</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
// function Menu(e) {
//   let list = document.querySelector("ul");
//   console.log("menu triggere");
//   return e.name === "menu"
//     ? ((e.name = "close"),
//       list.classList.add("top-[80px]"),
//       list.classList.add("opacity-100"))
//     : ((e.name = "menu"),
//       list.classList.remove("top-[80px]"),
//       list.classList.remove("opacity-100"));
// }

// return (
//   <nav className="p-5 bg-gray-50 shadow md:flex md:items-center md:justify-between">
//     <div className="flex justify-between items-center ">
//       <span className="text-2xl ml-4 font-semibold font-[Poppins] cursor-pointer">
//         <a href="/"> DAN</a>
//       </span>

//       <span className="text-3xl cursor-pointer mx-2 md:hidden block">
//         <FaBars name="menu" onClick={Menu} />
//       </span>
//     </div>

//     <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 font-semibold">
//       <li className="mx-4 my-6 md:my-0">
//         <a href="/" className="text-xl hover:text-blue-500 duration-500">
//           HOME
//         </a>
//       </li>
//       <li className="mx-4 my-6 md:my-0">
//         <a href="/about" className="text-xl hover:text-blue-500 duration-500">
//           ABOUT
//         </a>
//       </li>
//       <li className="mx-4 my-6 md:my-0">
//         <a
//           href="/career"
//           className="text-xl hover:text-blue-500 duration-500"
//         >
//           CAREER
//         </a>
//       </li>
//       <li className="mx-4 my-6 md:my-0">
//         <a
//           href="/contact"
//           className="text-xl hover:text-blue-500 duration-500"
//         >
//           CONTACT
//         </a>
//       </li>
//     </ul>
//   </nav>

/* <nav class="z-999 bg-gradient-to-r from-blue-50 to-blue-200 px-2 sm:px-4 py-2.5 shadow-2xl">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
                <span class="self-center text-3xl text-gray-600 font-bold font-mono whitespace-nowrap ">DAN</span>
    </a>

    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-xl text-gray-400 rounded md:bg-transparent md:text-blue-700 md:p-0 " >Home</a>
        </li>
        <li>
          <a href="/about" class="block py-2 pr-4 pl-3 text-xl text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="/skills" class="block py-2 pr-4 pl-3 text-xl text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
        </li>
        <li>
          <a href="/career" class="block py-2 pr-4 pl-3 text-xl text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Career</a>
        </li>
        <li>
          <a href="/contact" class="block py-2 pr-4 pl-3 text-xl text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */
//   );
// }

export default Navbar;
