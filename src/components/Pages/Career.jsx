import React from "react";
import ReactDOM from "react-dom";
import infyIcon from "../../assets/infy_logo.jpeg";
import myntIcon from "../../assets/mynt-logo.png";
import dxcIcon from "../../assets/dxc_2.jpeg";
import clopsIcon from "../../assets/clop_logo.jpeg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";

function Career() {
  var items = document.querySelectorAll("li");

  function isItemInView(item) {
    var rect = item.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  return (
    <div class="flex flex-col justify-center py-6 lg:py-12">
      <div class="w-full mx-auto lg:max-w-4xl">
        <div class="relative">
          {/* <!-- Vertical middle line--> */}

          <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
          <div class="space-y-12 lg:space-y-8">
            {/* <!-- Left section --> */}
            <div>
              <div class="flex flex-col items-center">
                <div class="flex items-center justify-start w-full mx-auto">
                  <div class="w-full lg:w-1/2 lg:pr-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    >
                      <div class="p-4 bg-white rounded-3xl shadow-lg shadow-indigo-200 break-words hover:motion-safe:animate-bounce">
                      <img
                          src={myntIcon}
                          className="h-16 w-30 flex justify-center items-center"
                        />
                        <span className="text-base font-mono font-semibold">
                          Senior Software Engineer - SRE
                        </span>
                        <br />
                        <span className="font-light text-sm">
                          NOV 2021 - <span className="font-bold">PRESENT</span>
                        </span>
                        <span className="text-base font-mono font-medium"></span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div class="absolute flex items-center justify-center w-7 h-7  transform -translate-x-1/2 -translate-y-4 bg-blue-400 border-red-200 rounded-full left-1/2 sm:translate-y-0"></div>
              </div>
            </div>

            {/* <!-- Right section --> */}
            <div>
              <div class="flex flex-col items-center">
                <div class="flex items-center justify-end w-full mx-auto">
                  <div class="w-full lg:w-1/2 lg:pl-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <div class="p-4 bg-white rounded-3xl shadow-lg shadow-slate-200 break-words hover:motion-safe:animate-bounce ">
                      <img
                          src={clopsIcon}
                          className="h-24 w-30 flex justify-center items-center"
                        />
                        <span className="text-base font-mono font-semibold">
                          Senior Devops Engineer
                        </span>
                        <br />
                        <span className="font-light text-sm">
                          AUG 2020 - NOV 2021
                        </span>
                        <span className="text-base font-mono font-medium"></span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div class="absolute flex items-center justify-center w-7 h-7  transform -translate-x-1/2 -translate-y-4 bg-blue-400  border-red-200 rounded-full left-1/2 sm:translate-y-0"></div>
              </div>
            </div>

            {/* <!-- Left section --> */}
            <div>
              <div class="flex flex-col items-center">
                <div class="flex items-center justify-start w-full mx-auto">
                  <div class="w-full lg:w-1/2 lg:pr-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 1}}
                    >
                      <div class="p-4 bg-white rounded-3xl shadow-lg shadow-slate-200 break-words hover:motion-safe:animate-bounce ">

                      <img
                          src={dxcIcon}
                          className="h-20 w-30 flex justify-center items-center"
                        />
                        <span className="text-base font-mono font-semibold">
                          Associate Devops Engineer
                        </span>
                        <br />
                        <span className="font-light text-sm">
                         JAN 2019 - JUL 2020
                        </span>
                        <span className="text-base font-mono font-medium"></span>


                        
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div class="absolute flex items-center justify-center w-7 h-7  transform -translate-x-1/2 -translate-y-4 bg-blue-400 border-red-200 rounded-full left-1/2 sm:translate-y-0"></div>
              </div>
            </div>

            {/* <!-- Right section --> */}
            <div>
              <div class="flex flex-col items-center">
                <div class="flex items-center justify-end w-full mx-auto">
                  <div class="w-full lg:w-1/2 lg:pl-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 1 }}
                    >
                      <div class="p-4 bg-white rounded-3xl shadow-lg shadow-slate-200 break-words hover:motion-safe:animate-bounce ">
                        
                      <img
                          src={infyIcon}
                          className="h-20 w-30 flex justify-center items-center"
                        />
                        <span className="text-base font-mono font-semibold">
                          Senior Systems Engineer
                        </span>
                        <br />
                        <span className="font-light text-sm">
                          MAY 2016 - JAN 2019
                        </span>
                        <span className="text-base font-mono font-medium"></span>



                        
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div class="absolute flex items-center justify-center w-7 h-7 transform -translate-x-1/2 -translate-y-4 bg-blue-400 border-red-200 rounded-full left-1/2 sm:translate-y-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
