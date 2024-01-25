import React from 'react';

const Error = () => {
   return (
       <div className="flex flex-row items-center ">
          <div>
             <div className="w-[20px] h-[20px] rounded-full border border-red-500 ">
                <div className="relative w-full h-full rounded-full flex justify-center items-center">
                   <div className="-rotate-45 w-[1px] h-[12px] bg-red-600"></div>
                   <div className=" rotate-45 w-[1px] h-[12px] bg-red-6001 "></div>
                </div>
             </div>
          </div>
          <div className="font-[poppin-extrsLight] text-sm ml-2 text-red-500">
             Error
          </div>
       </div>
   );
};

export default Error;