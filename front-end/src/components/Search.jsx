import React from 'react';
import {Link} from "react-router-dom";
import {Style} from "../../public/styles/Style.js";
import {Avatar} from "./index.js";
import {back, search} from "../../public/assets/icons/index.js";
import {Field} from "formik";
import Progress from "../common/progress.jsx";

const Search = () => {
   return (
       <div className={`${Style.maximum} pt-4`}>
          {/*AVATAR*/}
          <div className={`flex justify-between mb-5 items-center ${Style.paddingX}`}>
             <Avatar/>
             <div className="bg-[#262626] rounded-full p-[10px]">
                <Link to="/" title="back to home">
                   <img className="size-[15px]" src={back} alt="search"/>
                </Link>
             </div>
          </div>
          {/*LABEL PAGE*/}
          <div className={`mb-5 ${Style.paddingX}`}>
             <span>Search</span>
          </div>
          {/*INPUT SEARCH*/}
          <div className={` flex flex-row gap-x-[10px]  ${Style.paddingX} mb-5`}>
             <input
                 className="bg-[#202020] text-[#A4A4A4] text-sm placeholder:text-xs rounded-full shadow appearance-none border-none  w-full py-2 px-3   focus:outline-none focus:shadow-outline"
                 type="text"
                 id="username"
                 name="username"
                 placeholder="search user by name / id"
             />
             <Link to="#">
                <div className="flex items-center justify-center bg-[#2FE48D] rounded-full p-[10px] w-[45px] h-[45px]">
                   <img className="size-[25px]" src={search} alt="search"/>
                </div>
             </Link>
          </div>
          {/*FILTER SEARCH*/}
          <div className="container-x w-full gap-x-2 mb-5">
             <div
                 className="ml-3 text-xs flex text-center whitespace-nowrap px-[25px] py-[15px] rounded-full border border-[#313131]">All
             </div>
             <div
                 className=" text-xs flex text-center whitespace-nowrap px-[25px] py-[15px] rounded-full border border-[#313131]">iran
                cell
             </div>
             <div
                 className="text-xs flex text-center whitespace-nowrap px-[25px] py-[15px] rounded-full border border-[#313131]">Hamrah
             </div>
             <div
                 className="text-xs flex text-center whitespace-nowrap px-[25px] py-[15px] rounded-full border border-[#313131]">30
                day
             </div>
             <div
                 className="text-xs flex text-center whitespace-nowrap px-[25px] py-[15px] rounded-full border border-[#313131]">wifi
             </div>
             <div
                 className="text-xs flex text-center whitespace-nowrap px-[25px] py-[15px] rounded-full border border-[#313131]">60
                day
             </div>
          </div>
          {/*RESOLVE SEARCH*/}
          <div className={`mb-5 ${Style.paddingX}`}>
             <span className="text-sm font-[poppin-extrsLight]">Resolved</span>
          </div>
          <div className={`${Style.paddingX}`}>
             <div className=" rounded-[25px] primary-box flex flex-row justify-between relative">
                <div className="w-full mr-7">
                   <div className="text-xs flex  flex-row justify-between">
                      <div className="flex  flex-row">
                         <span className="mr-2 font-[poppin-bold]">simple</span><span></span>
                      </div>
                   </div>

                   <div className="text-xs">
                      <span className="mr-2 text-blue-600 font-medium">Status:</span>
                      <span className={``}>on</span>
                   </div>
                   <div className=" text-xs">
                      <Progress
                          time={12}
                          max={30}
                      />
                   </div>
                   <div className="flex flex-row items-center justify-between ">
                      <div className=" mr-2">
                         <span className="text-xs">dfgevrtvwigewe744erfger</span>
                      </div>
                      <div className="relative cursor-pointer">
                         <div
                             className="absolute top-1 left-1 w-[15px] h-[15px] rounded border-gray-50 border bg-gray-400"></div>
                         <div className=" w-[15px] h-[15px] rounded border-gray-50 border"></div>
                      </div>
                   </div>
                </div>

                <div className="relative">
                   <button className=" flex flex-col gap-y-[3px] cursor-pointer w-[15px]">
                      <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
                      <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
                      <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
                   </button>
                </div>
             </div>
          </div>
       </div>
   );
};

export default Search;