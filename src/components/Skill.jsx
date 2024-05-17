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
        },
        {
          id: 4,
          name: "JavaScript",
        },
        {
          id: 5,
          name: "ReactJs",
        },
      ];
      const backEnd= [
        {
          id: 1,
          name: "Nodjs",
        },
        {
          id: 2,
          name: "Express",
        },
        {
          id: 3,
          name: "Php",
        },
        {
          id: 4,
          name: "Python",
        },
    
      ];
      const dataBase= [
        {
          id: 1,
          name: "MySql",
        },
        {
          id: 2,
          name: "MongoDB",
        },
        {
          id: 3,
          name: "Php",
        },
        {
          id: 4,
          name: "Python",
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
                  {frontEnd.map(({ id, name }) => (
                    <div
                      key={id}
                      className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91] `}
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
                  {backEnd.map(({ id, name }) => (
                    <div
                      key={id}
                      className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91] `}
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
                  {dataBase.map(({ id, name }) => (
                    <div
                      key={id}
                      className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91] `}
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
                    <FaBloggerB className="text-"/>
                    <div className="flex flex-1 xl flex-col px-4 py-2">
                      <div className="flex text-xl font-bold">Blog Website</div>
                      <div className="flex text-xs">Php, Bootstrap, Ajax, JavaScript</div>
                    </div>
                    <IoIosArrowForward className="text-2xl"/>
                       {/* github visit icon */}
                  </div>
                 </a>
                 <a  target="_blank" href="#">
                  <div className="flex items-center gap-1 text-[#8b8a91] rounded-lg">
                    {/* icon */}
                    <FaBloggerB className="text-"/>
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
                    <FaBloggerB className="text-"/>
                    <div className="flex flex-1 xl flex-col px-4 py-2">
                      <div className="flex text-xl font-bold">Personal Portfoli</div>
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