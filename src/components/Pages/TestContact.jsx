import React from "react";
import { useEffect, useState } from "react";
import { FcCallback, FcApproval } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Modal from "react-modal";


function TestContact() {
  Modal.setAppElement("#root");
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // backgroundColor: "rgba(255, 255, 255, 0.9)",
      background:"black",
      background:"rgba(0,0,0,0.85)",
    },
    content: {
      // position: "absolute",
      // top: "50vh",
      // left: "50vh",
      // right: "40px",
      // bottom: "50vh",
      // border: "1px solid #ccc",
      // background: "black",
      // overflow: "auto",
      WebkitOverflowScrolling: "touch",
      // borderRadius: "4px",
      // outline: "none",
      // padding: "20px",
      display: "flex",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      width: "300px",
      height: "300px",
      margin: "auto",
      // backgroundColor: "#F5F5F5",
      border: "40px"

      // background-color: "#f3f3f3",
    },
  };

  const [contactInfo, setContactInfo] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

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
          // alert("Message Sent Successfully");
          toggleModal();
          console.log("modal triggered");
        },
        (error) => {
          alert(error.message);
        }
      );
    setContactInfo({ from_name: "", from_email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-slate-50 text-slate-800"
    >
      <h1 className="text-4xl p-4 font-bold tracking-wide text-center">
        Get In Touch <FcCallback className="inline-block" />
      </h1>

      <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-evenly">
        <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
          <div className="bg-slate-100 shadow-xl w-full lg:w-1/2 h-full p-5 pt-8">
            <h3 className="text-2xl font-semibold mb-5">Connect</h3>

            <div className="flex flex-col gap-3">
              <a
                className="flex items-center hover:text-white hover:bg-blue-500 p-2 hover:cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/daneshrao", "_blank")
                }
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </a>
              <a
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/daneshwarrao0047/",
                    "_blank"
                  )
                }
                className="flex items-center hover:text-white hover:bg-blue-500 hover:cursor-pointer p-2"
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
                </svg>
                Linkedin
              </a>
              <a
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/iditPMZYmnkMEAZo8",
                    "_blank"
                  )
                }
                className="flex items-center hover:text-white hover:bg-blue-500 p-2 hover:cursor-pointer"
              >
                <GrLocation className="h-8 w-8 mr-1" />
                Location
              </a>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 shadow-xl p-6"
        >
          <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
          <div className="p-4">
            <div className="flex flex-col mb-3 ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="from_name"
                value={contactInfo.from_name}
                onChange={handleChange}
                id="from_name"
                className="px-3 py-2 bg-slate-100  border-gray-50 focus:outline-none focus:bg-gray-500 focus:text-white"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={contactInfo.from_email}
                onChange={handleChange}
                name="from_email"
                id="from_email"
                className="px-3 py-2 bg-slate-100 border-gray-50  focus:outline-none focus:bg-gray-500 focus:text-white"
                autoComplete="off"
                required
              />
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="email">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={contactInfo.phone}
                onChange={handleChange}
                className="px-3 py-2 bg-slate-100 border-gray-50  focus:outline-none focus:bg-gray-500 focus:text-white"
                autoComplete="off"
                required
              />
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                id="message"
                value={contactInfo.message}
                onChange={handleChange}
                className="px-3 py-2 bg-slate-100 border border-gray-50  focus:outline-none focus:bg-gray-500 focus:text-white"
              ></textarea>
            </div>
          </div>
          <div className="w-full pt-3">
            <button
              type="submit"
              className="w-full bg-blue-500  border px-4 py-2 transition duration-50 focus:outline-none text-white font-semibold  text-xl cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div class="flex items-center justify-center h-full">
        {/* <button class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={toggleModal}>Show Modal</button> */}
      </div>
      <div
        class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="modal"
      >
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              Message sent Successfully
            </div>
            <div class="bg-gray-200 px-4 py-3 text-right">
              <button
                type="button"
                class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                onclick="toggleModal()"
              >
                <i class="fas fa-times"></i> Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
      >
        <div className="flex flex-col items-center justify-center p-4  bg-slate-100 rounded-lg shadow-lg">
        <FcApproval size={"40"} className="mb-2"/>
        <div className=" mb-4 text-lg font-mono uppercase text-slate-700 font-semibold text-center">Message sent Successfully</div>
        <button onClick={toggleModal} className="bg-blue-300 text-white h-10 w-32 cursor-pointer uppercase font-semibold">Close</button>
        </div>

      </Modal>
    </section>
  );
}

export default TestContact;
