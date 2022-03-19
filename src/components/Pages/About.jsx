import React from "react";
import { FcRight, FcEngineering, FcPuzzle, FcFilmReel, FcLike, FcReading, FcClock, FcCalendar } from "react-icons/fc";
import Dp_img from "../../assets/about_img.jpeg";

function About() {
  return (
    <section class="md:h-full flex items-center text-gray-600">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 justify-center">
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
              <div class="p-6 ">
                <h1 class="text-2xl font-semibold mb-3">A Gist About me !!</h1>
                <p class="leading-relaxed mb-3">
                  Ever since I was a teenager, software development<FcEngineering className="ml-1 inline-block"/> has been my
                  passion. This passion carried me through my education.
                  Software engineering is an ever-ending puzzle <FcPuzzle className="ml-1 inline-block"/> that I am
                  passionately engaged in solving. I believe in the power of
                  programming and software development to transform and improve
                  the lives of people around the world.
                </p>
                <ul className="mt-2">
                  <li>Date of Birth <FcCalendar className="inline-block"/>: 25th March 1995</li>
                  <li>Hobby <FcClock className="inline-block"/>: Calisthenics</li>
                  <li>Fav Book <FcReading className="inline-block"/>: 5AM club</li>
                  <li>Fav Food <FcLike className="inline-block"/>: Biriyani</li>
                  <li>Fav Cartoon <FcFilmReel className="inline-block"/>: Baki the grappler </li>
                </ul>
                <div class="mt-4 flex h-10 w-28 bg-blue-200 rounded-lg hover:cursor-pointer hover:shadow-2xl hover:shadow-indigo-100 ">
                  <a
                    class="text-slate-700 inline-flex items-center md:mb-2 lg:mb-0 px-2"
                    onClick={() =>
                      window.open(
                        "https://www.dropbox.com/s/9hjol2kte41zy8v/Daneshwar_resume_Jan_22.pdf?dl=0",
                        "_blank"
                      )
                    }
                  >
                    Hire Me <FcRight className="ml-2 text-white"></FcRight>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
              <div class="">
                <img src={Dp_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <motion.div
// initial={{ opacity:0 }}
// animate={{ opacity:1 }}
initial={{ x: -2000 }}
animate={{ x: -10 }}
transition={{ delay: 0.25, duration: 1 }}
>
<div className="h-[55vh] w-[30vw] ml-[200%] mt-[28%] ">
  <img
    src={Dp_img}
    alt=""
    className="relative h-[50vh] w-[25vw] rounded-xl shadow-lg shadow-slate-500 "
  />
</div>
</motion.div>

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 1, duration: 1.5 }}
>
<div
  className="border-3 border-black  bg-white-50 shadow-2xl h-[50vh] w-[30vw] mt-40 flex flex-col justify-center items-center text-gray-600
text-xl font-serif rounded-3xl "
>
  <p className="p-8">
    Ever since I was a teenager, software development has been my
    passion. This passion carried me through my education. Software
    engineering is an ever-ending puzzle that I am passionately
    engaged in solving. I believe in the power of programming and
    software development to transform and improve the lives of people
    around the world.
  </p>
  <button
    className="h-14 w-28 bg-sky-200 hover:bg-sky-500 text-gray-600 rounded-lg hover:text-white"
    onClick={() =>
      window.open(
        "https://www.dropbox.com/s/9hjol2kte41zy8v/Daneshwar_resume_Jan_22.pdf?dl=0",
        "_blank"
      )
    }
  >
    Hire Me
  </button>
</div>
</motion.div> */
}

export default About;
