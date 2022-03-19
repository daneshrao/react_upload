import {  useState } from "react";
import { FcCallback } from "react-icons/fc";
import emailjs from "emailjs-com";
import React, { useRef } from "react";
import Modal from "./modal";

export const Contact = () => {
  const form = useRef();

  const [contactInfo, setContactInfo] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const [showModal,setShowModal] = useState(false);

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();

    emailjs
      .sendForm(
        "service_xp1g4dn",
        "template_unnv7x2",
        form.current,
        "QGGnS1loxQ9GS8FtK"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
        },
        (error) => {
          alert(error.message);
        }
      );
    setContactInfo({ from_name: "", from_email: "", phone: "", message: "" });
  };

  return (


    <form ref={form} onSubmit={handleSubmit}>

      <div className="flex h-1/2 w-ful justify-center items-center ">
        <div className="ml-8 mt-20 justify-center sm:h-[60vh] sm:w-[50vw]  bg-slate-50 shadow-xl flex flex-row sm:flex-col rounded-3xl">
          <div className="p-8">
            <span className="text-4xl font-semi">
              Get in Touch <FcCallback className="inline-block" />
            </span>
            <input
              type="text"
              name="from_name"
              value={contactInfo.from_name}
              onChange={handleChange}
              id="from_name"
              className="p-2 mt-7 focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-10 w-80"
              placeholder="Full Name"
            />
            <input
              type="text"
              value={contactInfo.from_email}
              onChange={handleChange}
              name="from_email"
              id="from_email"
              className="p-2 mt-7 focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-10 w-64"
              placeholder="Email address"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              value={contactInfo.phone}
              onChange={handleChange}
              className="p-2 mt-7 focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-10 w-64"
              placeholder="Contact Number"
            />
            <input
              type="text"
              name="message"
              id="message"
              value={contactInfo.message}
              onChange={handleChange}
              className="p-2 mt-7 focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-32 w-64 overflow-x-auto"
              placeholder="Message"
            />

            <input
              type="submit"
              className="p-2 mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-14 w-24 "
              placeholder="Submit"
            />
          </div>

          {/* <div className="absolute h-1/2 w-full  sm:h-[60vh] sm:w-96 bg-blue-400 sm:ml-[25%] text-white p-10 flex flex-row sm:flex-col space-y-7">
            <span className="text-3xl font-light p-2">Contact Me</span>
            <div className="p-2 flex flex-row space-x-10 text-s">
              <FaLocationArrow
                className="mr-6 h-7 w-7 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/iditPMZYmnkMEAZo8",
                    "_blank"
                  )
                }
              />{" "}
              Kavangarai, Puzhal, Chennai- 600066
            </div>
            <div className="p-2 flex flex-row space-x-10 text-s">
              <FaPhone className="mr-6 h-7 w-7 " /> +91- 9742276460
            </div>
            <div className="p-2 flex flex-row space-x-10 text-s">
              <FaMailBulk className="mr-6 h-7 w-7 " /> daneshrao@gmail.com{" "}
            </div>
            <div className="ml-10 p-3 flex flex-row h-14 w-48 bg-slate-500 rounded-xl hover:bg-slate-700">
              <div className="p-1 flex flex-row space-x-10 text-s">
                <FaGlobe
                  className="mr-6 h-7 w-7 cursor-pointer"
                  onClick={() =>
                    window.open("https://daneshrao.github.io/", "_blank")
                  }
                />{" "}
              </div>
              <div className="p-1 flex flex-row space-x-10 text-s">
                <FaLinkedin
                  className="mr-6 h-7 w-7 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/daneshwarrao0047/",
                      "_blank"
                    )
                  }
                />
              </div>
              <div className="p-1 flex flex-row space-x-10 text-s">
                <FaGithub
                  className="mr-6 h-7 w-7 cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/daneshrao", "_blank")
                  }
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </form>
  );
};

export default Contact;
