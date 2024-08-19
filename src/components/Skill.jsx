import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaBloggerB } from "react-icons/fa";
const Skill = () => {
    const frontEnd = [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "TailWind",
          style:'border border-blue-500/60'
        },
        {
          id: 4,
          name: "JavaScript",
          style:'border border-yellow-500/60'
        },
        {
          id: 5,
          name: "ReactJs",
          style:'border border-blue-500/60'
        },
        {
          id: 6,
          name: "Boottrap",
          style:'border border-blue-400/60'
        },
      ];
      const backEnd= [
        {
          id: 1,
          name: "Nodjs",
          style:'border border-green-500/60'
         
        },
        {
          id: 2,
          name: "Express",
          style:'border border-gray-500/60'
        },
        {
          id: 3,
          name: "Php",
        },
        {
          id: 4,
          name: "Python",
          style:'border border-green-500/60'
        },
    
      ];
      const dataBase= [
        {
          id: 1,
          name: "MySql",
          style:'border border-blue-500/60'
        },
        {
          id: 2,
          name: "MongoDB",
          style:'border border-green-500/60'
        },
      
    
      ];
      const programming= [
        {
          id: 1,
          name: "C",
        },
        {
          id: 2,
          name: "c++",
        },
        {
          id: 3,
          name: "Java",
          style:'border border-yellow-500/60'

        },
        {
          id: 4,
          name: "Python",
          style:'border border-green-500/60'
        },
    
      ];
      const tools= [
        {
          id: 1,
          name: "Git",
          style:'border border-gray-500/60'
        },
        {
          id: 2,
          name: "Github",
        },
        {
          id: 3,
          name: "Postman",
          style: 'border border-red-600/60'
        },
        {
          id: 4,
          name: "Linux",
          style:'border border-black-500'
        },
       
    
      ];
  return (
    <>
    {/* <div className='max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20  space-y-2'> */}

 <hr />
     <section name="Skill" className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 p-4 mt-5 md:p-0 max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20  space-y-2 ">
          <div className="col-span-2  md:col-span-2 lg:col-span-3">
          <h1 className="text-3xl font-semibold mb-5">Skills</h1>
            <div className="text-xl font-semibold mt-2 mb-5">What I know</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* FrontEnd */}
              <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
                <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                  Frontend
                </div>
                <div className="flex flex-wrap gap-2">
                  {frontEnd.map(({ id, name, style }) => (
                    <div
                      key={id}
                      className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91] ${style}  `}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
                   {/* backEnd */}
              <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
                <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                  Backend
                </div>
                <div className="flex flex-wrap gap-2">
                  {backEnd.map(({ id, name, style }) => (
                    <div
                      key={id}
                      className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91]  ${style}`}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
              {/* Database */}
              <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
                <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                  DataBase
                </div>
                <div className="flex flex-wrap gap-2">
                  {dataBase.map(({ id, name, style }) => (
                    <div
                      key={id}
                      className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91]  ${style} `}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
{/*start  programming languages */}
              <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
                <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                  Programming Languages
                </div>
                <div className="flex flex-wrap gap-2">
                  {programming.map(({ id, name, style }) => (
                    <div
                      key={id}
                      className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91]  ${style} `}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
{/* end programming languages */}
{/* Tools */}
              <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
                <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                 Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map(({ id, name, style }) => (
                    <div
                      key={id}
                      className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91]  ${style}`}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          <div className="grid bg-[#1c1b23] gap-6 lg:col-span-3 p-5">
            <div className="text-xl font-medium mt-2 text-zinc-200">More projects</div>
            <div className="grid grid-cols-1 gap-4 rounded-lg">
                 <a  target="_blank" href="#">
                  <div className="flex items-center gap-1 text-[#8b8a91] rounded-lg">
                    {/* icon */}
                    <FaBloggerB className="text-5xl"/>
                    <div className="flex flex-1 xl flex-col px-4 py-2">
                      <div className="flex text-xl font-bold">ConVoApp</div>
                      <div className="flex text-xs">ReactJs, ExpressJs, NodeJs</div>
                      <div className="flex text-xs">It's a docs converter app Docs to Pdf- </div>
                    </div>
                    <IoIosArrowForward className="text-2xl"/>
                       {/* github visit icon */}
                  </div>
                 </a>
                 <a  target="_blank" href="#">
                  <div className="flex items-center gap-1 text-[#8b8a91] rounded-lg">
                    {/* icon */}
                    <FaBloggerB className="text-xl"/>
                    <div className="flex flex-1 xl flex-col px-4 py-2">
                      <div className="flex text-xl font-bold">News Website</div>
                      <div className="flex text-xs">Php, Bootstrap, Ajax, JavaScript</div>
                    </div>
                    <IoIosArrowForward className="text-2xl"/>
                       {/* github visit icon */}
                  </div>
                 </a>
                 <a  target="_blank" href="#">
                  <div className="flex items-center gap-1 text-[#8b8a91] rounded-lg">
                    {/* icon */}
                    <FaBloggerB className="text-xl"/>
                    <div className="flex flex-1 xl flex-col px-4 py-2">
                      <div className="flex text-xl font-bold">Personal Portfolio</div>
                      <div className="flex text-xs">Reactjs, JavaScript</div>
                    </div>
                    <IoIosArrowForward className="text-2xl"/>
                       {/* github visit icon */}
                  </div>
                 </a>
            </div>

          </div>
        </section>
       
        {/* </div> */}
    </>
  )
}

export default Skill