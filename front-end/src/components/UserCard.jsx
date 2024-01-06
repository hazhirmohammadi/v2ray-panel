import React from 'react';

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
          <div className=" rounded-lg bg-slate-900    p-2  shadow shadow-slate-700">
             <div className="text-xs flex ">
                <span className="mr-2 text-emerald-600 font-medium">Name:</span><span>{name}</span>
             </div>
             <div className=" text-xs">
                <span className="mr-2 text-yellow-500 font-medium">Time:</span><span>{time}Day</span>
             </div>
             <div className="text-xs">
                <span className="mr-2 text-blue-600 font-medium">Status:</span>
                <span className={`${sta}`}>{status}</span>
             </div>
             <div className="flex flex-row bg-gray-800 py-2 px-[3px] rounded-lg">
                <button className="w-full mr-2 primary-btn text-black bg-yellow-400">Edit</button>
                <button className="w-full primary-btn  bg-red-500">Delete</button>

             </div>
          </div>
   );
};

export default UserCard;