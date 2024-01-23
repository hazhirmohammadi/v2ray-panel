import React from 'react';
import {Link} from "react-router-dom";
import {Style} from "../Style.js";
import {Avatar} from "./index.js";
import {back, search} from "../../public/assets/icons/index.js";
import {Field} from "formik";

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
                 className="bg-[#202020] text-[#A4A4A4]  placeholder:text-xs rounded-full shadow appearance-none border-none  w-full py-2 px-3   focus:outline-none focus:shadow-outline"
                 type="text"
                 id="username"
                 name="username"
                 placeholder="search user by name / id"
             />
             <Link to="/">
                <div className="flex items-center justify-center bg-[#2FE48D] rounded-full p-[10px] w-[45px] h-[45px]">
                   <img className="size-[25px]" src={search} alt="search"/>
                </div>
             </Link>
          </div>
          {/*FILTER SEARCH*/}
          <div className="container-x w-full gap-x-2">
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
          <div className={`${Style.paddingX}`}>

          </div>

       </div>
   );
};

export default Search;