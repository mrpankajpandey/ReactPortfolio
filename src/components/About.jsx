import React from "react";


const About = () => {


  return (
    <>
      <div name="About" className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20  space-y-2">
        <h1 className="text-3xl font-semibold mb-5">About </h1>
        <p className="text-md font-normal">
          Hello, I'am Pankaj, a passionate Web developer with a keen eye a MERN
          stack. With a backgroud in IT, I strive to create impactful and
          visually stunnig solution that leave a lasting imparison.
        </p>
        <button className="py-3 px-4 bg-blue-600 rounded-full hover:scale-110 text-white ">
         <a className="" target="_blank" href="https://drive.google.com/file/d/10u_Bm9yX3tUgpwZHsgzPmxifVjbEBtb6/view?usp=sharing">Download CV </a>
        </button>

       

      </div>
    </>
  );
};

export default About;
