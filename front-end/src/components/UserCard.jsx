import React from 'react';
import Progress from "../common/progress.jsx";

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
       <div className=" rounded-[20px] primary-box">
          <div className="text-xs flex ">
             <span className="mr-2 text-emerald-600 font-medium">Name:</span><span>{name}</span>
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

       </div>
   );
};

export default UserCard;