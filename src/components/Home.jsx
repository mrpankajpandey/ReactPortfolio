import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiBuymeacoffee } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import photo from "../../public/photo.avif";
import About from "./About";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl   container mx-auto px-4 md:px-20 my-16 "
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-semibold"
                strings={[" Web Developer", " Programmer", " coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              >
                {/* <span className="text-red-700 font-semibold ">Developer</span> */}
              </ReactTyped>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a technology enthusiast and competent, well-focused full
              stack developer from Lucknow, Uttar Pradesh, India. Passionate
              about building fully functional web applications and Android
              applications, I specialize in HTML, CSS, JavaScript, ReactJS,
              Node.js, MongoDB, Express.js, and Git. Additionally, I develop
              Android applications using Java. I have a strong foundation in
              data structures and algorithms, and I am an avid open-source
              enthusiast. I've learned extensively from the open-source
              community and appreciate the collaboration and knowledge sharing
              it fosters.
            </p>
            <br />
            {/* Socila media icons  */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h2 className="font-semibold ">Available on </h2>
                <ul className="flex space-x-3">
                  <li>
                    <a target="_blank" href="https://github.com/mrpankajpandey">
                      <FaGithub className="text-xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/mrpankajpandey_"
                    >
                      <FaXTwitter className="text-xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mr.pankajpandey0038@gmail.com">
                      <CiMail className="text-xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://buymeacoffee.com/mrpankajpandey_"
                    >
                      <SiBuymeacoffee className="text-xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Skills  */}
              <div className="space-y-2 ">
                <h2 className="font-semibold ">Currently working on</h2>
                <div className="flex space-x-3 ">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200" />

                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200" />

                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200" />

                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8 ">
            <img
              className="rounded-full md:w-[400px] md:h-[400px]"
              src={photo}
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
