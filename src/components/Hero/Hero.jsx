import React from "react";
import { motion } from "framer-motion";
import { Container } from "./style";
import Illustration from "../../assets/Hero.png";

function HeroCont() {
  return (
    <Container id="home">
      <div className="flex flex-col text-2xl text-gray-600 sm:mt-60 break-words bg-transparent sm:pl-28">
        <p className="m-2 pl-2 pb-3 text-4xl animate-bounce z-999">
          Hello👋, I am
        </p>

        <h1 className=" text-4xl sm:text-6xl font-bold text-gray-600 pl-2 pb-9 z-999 ">
          Daneshwar Rao
        </h1>

        <p className="pl-2 pb-8 z-999 ">
          A passionate Cloud & Devops engineer looking for challanging
          opportunities
        </p>

        <div className="flex flex-row space-x-5">
          <div className="pl-2 animate-pulse z-999 ">
            <button
              className="bg-blue-500 h-18 w-18 hover:bg-blue-700 text-white py-2 px-4 rounded sm:h-18 text-lg sm:text-2xl"
              onClick={() =>
                window.open(
                  "https://www.dropbox.com/s/9hjol2kte41zy8v/Daneshwar_resume_Jan_22.pdf?dl=0",
                  "_blank"
                )
              }
            >
              Hire me!
            </button>
          </div>
          <div className="pl-2 z-999 ">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded sm:h-18 h-18 w-18 text-lg sm:text-2xl"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <motion.div
        // initial={{ opacity:0 }}
        // animate={{ opacity:1 }}
        initial={{ x: -2000 }}
        animate={{ x: -10 }}
        transition={{ delay: 0.25, duration: 1 }}
      >
        <div className="mt-14 order-1 sm:h-[50vh] sm:w-[27vw] sm:mt-60 animate-bounce z-999">
          <img src={Illustration} />
        </div>
      </motion.div>
    </Container>
  );
}

export default HeroCont;
