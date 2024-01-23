import React from 'react';
import Progress from "../common/progress.jsx";
import {date} from "yup";

const UserCard = ({name, time, status}) => {


   // ? inspect User Status
   let sta = "";
   switch (status) {
      case  "on":
         sta = "text-green-400"
         break
      case  "off":
         sta = "text-red-500"
         break
      case  "dep":
         sta = "text-red-500"
         break
      case "des":
         sta = "text-white"
         break
      case "":
         console.log("empty")
         return
   }


   return (
       <div className=" rounded-[20px] primary-box flex flex-row justify-between ">
          <div className="w-full mr-7">
             <div className="text-xs flex  flex-row justify-between">
                <div className="flex  flex-row">
                   <span className="mr-2 font-[poppin-bold]">{name}</span><span></span>
                </div>
             </div>

             <div className="text-xs">
                <span className="mr-2 text-blue-600 font-medium">Status:</span>
                <span className={`${sta}`}>{status}</span>
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
                   <div className="absolute top-1 left-1 w-[15px] h-[15px] rounded border-gray-50 border bg-gray-400"></div>
                   <div className=" w-[15px] h-[15px] rounded border-gray-50 border"></div>
                </div>
             </div>
          </div>

          <div className=" flex flex-col gap-y-[3px] cursor-pointer">
             <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
             <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
             <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
          </div>

       </div>
   );
};

export default UserCard;