import React from 'react';
import {Style} from "../../public/styles/Style.js";
import Progress from "../common/progress.jsx";
import {Link} from "react-router-dom";
import {back} from "../../public/assets/icons/index.js";

const Alert = () => {
   return (
       <div className={`${Style.paddingX} ${Style.maximum} pt-4`}>
          <div className="w-full mb-5">
             <Link to="/" title="back to home">
             <div className="bg-[#262626] rounded-full p-[10px] w-fit">
                   <img className="size-[15px]" src={back} alt="search"/>
             </div>
             </Link>
          </div>
          <div>
             <div className="mb-5">
                <span className="">Alerts</span>
             </div>
             {/*ALERT CARD*/}
          </div>
          <div className=" flex flex-col gap-y-3">
             <div className=" rounded-[25px] primary-box flex flex-col justify-between">
                <div className="flex flex-row items-center justify-between">
                   <div className="text-xs flex  flex-row justify-between">
                      <div className="flex  flex-row">
                         <span className="mr-2 font-[poppin-bold]">simple</span><span></span>
                      </div>
                   </div>
                   <div className=" text-sm">
                      <div className="size-[50px] bg-[#2FE48D] rounded-[20px] flex justify-center items-center p-[10px]">
                         OK
                      </div>
                   </div>
                </div>
                <div className="text-xs ">
                   Time: 23:45
                </div>
             </div>
             <div className=" rounded-[25px] primary-box flex flex-col justify-between">
                <div className="flex flex-row items-center justify-between">
                   <div className="text-xs flex  flex-row justify-between">
                      <div className="flex  flex-row">
                         <span className="mr-2 font-[poppin-bold]">simple 2</span><span></span>
                      </div>
                   </div>
                   <div className=" text-sm">
                      <div className=" bg-red-400 rounded-[20px] flex justify-center items-center p-[10px]">
                         REJECT
                      </div>
                   </div>
                </div>
                <div className="text-xs ">
                   Time: 23:45
                </div>
             </div>
             <div className=" rounded-[25px] primary-box flex flex-col justify-between">
                <div className="flex flex-row items-center justify-between">
                   <div className="text-xs flex  flex-row justify-between">
                      <div className="flex  flex-row">
                         <span className="mr-2 font-[poppin-bold]">test</span><span></span>
                      </div>
                   </div>
                   <div className=" text-sm">
                      <div className=" bg-yellow-500 rounded-[20px] flex justify-center items-center p-[10px]">
                        WARNING
                      </div>
                   </div>
                </div>
                <div className="text-xs ">
                   Time: 23:45
                </div>
             </div>
          </div>
       </div>
   );
};

export default Alert;