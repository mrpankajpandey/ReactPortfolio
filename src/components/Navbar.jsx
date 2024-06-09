import React, { useEffect, useRef, useState } from "react";
import photo from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useGSAP } from "@gsap/react";
import Login from "./Login";
import gsap from "gsap";
const Navbar = ({ theme }) => {
  const [menu, setMenu] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Services" },
    { id: 4, name: "Skill" },
    { id: 5, name: "Contact" },
  ];

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
 

  return (
    <>
      <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1c1b23] ">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={photo} className="w-12 h-12 rounded-full" alt="" />
            <h1 className="text-xl font-thin cursor-pointer">
              PanKa<span className="text-2xl text-green-500 font-mono">J</span>
              <p className="text-sm">Full-Stack Web Dev</p>
            </h1>
          </div>
          {/* For destop menu  */}
          <div>
            <ul id="list" className="hidden lg:flex space-x-8 text-lg">
              {navItems.map(({ id, name }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {" "}
                    {name}
                  </Link>
                </li>
              ))}
              <li
                onClick={openLogin}
                className="border cursor-pointer hover:border-blue-700 text-black px-4 rounded-lg dark:text-white"
              >
                Login
              </li>
              <li onClick={() => theme()} className="text-2xl">
                {" "}
                <CiDark />{" "}
              </li>
            </ul>
            <div className="lg:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* For mobile devices */}
        {menu && (
          <div className="bg-white">
            <ul className="lg:hidden h-screen dark:bg-black dark:text-white flex flex-col items-center justify-center space-y-8  text-3xl">
              {navItems.map(({ id, name }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {" "}
                    {name}
                  </Link>
                </li>
              ))}
              <li
                onClick={openLogin}
                className="border cursor-pointer hover:border-blue-700 text-white px-4 rounded-lg"
              >
                Login
              </li>
              <li onClick={() => theme()} className="text-5xl">
                {" "}
                <CiDark />{" "}
              </li>
            </ul>
          </div>
        )}
      </nav>
      <Login isOpen={isLoginOpen} onRequestClose={closeLogin} />
    </>
  );
};

export default Navbar;
