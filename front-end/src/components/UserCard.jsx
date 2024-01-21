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
          <div className=" rounded-[20px] primary-box">
             <div className="text-xs flex ">
                <span className="mr-2 text-emerald-600 font-medium">Name:</span><span>{name}</span>
             </div>

             <div className="text-xs">
                <span className="mr-2 text-blue-600 font-medium">Status:</span>
                <span className={`${sta}`}>{status}</span>
             </div>
             <div className=" text-xs">
                {/*<progress className="w-full "  value={time} max={100}>*/}
                {/*</progress>*/}
                <my-web-component></my-web-component>
             </div>

          </div>
   );
};

export default UserCard;