import React from 'react'
import { IoIosAppstore } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";


const Services = () => {
  return (
    <>
   <hr />
      <div name="Services" id="bento-grid" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  ">
      <h2 className="text-3xl font-semibold mb-5">Services </h2>
        <h2 className="h2-style"></h2>
        <div id="grid-container" className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
            <div className="row-start-1 row-end-3 group rounded-2xl gradient-hover-outer ">
                <div className="rounded-2xl w-full h-full p-6 flex gap-6  flex-col items-center gradient-hover-inner">
                    <h3 className="text-2xl">Application Development</h3>
                     <IoIosAppstore className='text-8xl'/>

                </div>     
            </div>
            <div className="row-start-1 row-end-4 group rounded-2xl  gradient-hover-outer">
                <div className=" rounded-2xl w-full h-full p-6 flex gap-6  flex-col items-center gradient-hover-inner ">
                    <h3 className="text-2xl">Website Developer </h3>
                    <p className="text-lg text-center font-light">I have developed many portfolio, college website and many person personal website. if you want to that your own portfolio then contact me.</p>
                    <FaLaptopCode className='text-8xl'/>

                </div>     
            </div>
            <div className="row-start-1 row-end-3 group rounded-2xl  gradient-hover-outer">
                <div className=" rounded-2xl w-full h-full p-6 flex gap-6  flex-col items-center gradient-hover-inner ">
                    <h3 className="text-2xl">Services</h3>
                    <MdOutlineMiscellaneousServices className='text-8xl'/>

                </div>     
            </div>
            <div className="row-start-3 row-end-6 group rounded-2xl  gradient-hover-outer">
                <div className=" rounded-2xl w-full h-full p-6 flex gap-6  flex-col items-center gradient-hover-inner ">
                    <h3 className="text-2xl">Programming</h3>
                    <p className="text-lg text-center font-light">I have one more and my favourite skill is programmig, I love to doing during programming and I'am enjoy it.</p>
                    <FaCode className="text-8xl"/>

                </div>     
            </div>
            <div className="row-start-4 row-end-6 group rounded-2xl  gradient-hover-outer">
                <div className="rounded-2xl w-full h-full p-6 flex gap-6  flex-col items-center gradient-hover-inner ">
                    <h3 className="text-2xl">Open Source</h3>
                    <p className='text-lg text-center font-light'>I am also an open-source enthusiast. I learned a lot from the open-source community and I love how collaboration and knowledge sharing happened through open-source..</p>
                   <FaCodePullRequest className='text-8xl' />

                </div>     
            </div>
            <div className="row-start-3 row-end-6 group rounded-2xl  gradient-hover-outer">
                <div className=" rounded-2xl w-full h-full p-6 flex gap-6  flex-col items-center gradient-hover-inner ">
                    <h3 className="text-2xl">Personal Guiddence</h3>
                    <p className="text-lg text-center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                    <FaHandsHelping className='text-8xl'/>

                </div>     
            </div>
           

        </div>
    </div>
    </>
  )
}

export default Services