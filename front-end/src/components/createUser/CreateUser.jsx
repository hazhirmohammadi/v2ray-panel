import React from 'react';
import {Style} from "../../Style.js";
import {Link} from "react-router-dom";
import {back} from "../../../public/assets/icons/index.js";
import AddForm from "./AddForm.jsx";

const CreateUser = () => {
   return (
       <div className={`pt-4  ${Style.maximum}`}>
          <div className={`${Style.paddingX} w-full mb-5 flex flex-row justify-between items-center`}>
             <div>
                <span className="font-[poppin-meidum] text-xl">Create New User</span>
             </div>
             <div>
                <Link to="/" title="back to home">
                   <div className="bg-[#262626] rounded-full p-[10px] w-fit">
                      <img className="size-[15px]" src={back} alt="search"/>
                   </div>
                </Link>
             </div>
          </div>
          {/*User Config Time*/}
          <div className={`${Style.paddingX} text-xs font-[poppin-extrsLight] mb-5`}>
             <span>Select Time</span>
          </div>
          <div className=" container-x w-full gap-x-2 mb-5 pb-6">
             <div
                 className="ml-2 bg-[#2FE48D] p-[10px]  rounded-[20px] text-center font-[poppin-meidum] text-sm shadow-emerald-500 shadow-lg">
                30
                <br/>
                days
             </div>
             <div className="ml-2 bg-[#313131] p-[10px]  rounded-[20px] text-center font-[poppin-meidum] text-sm ">
                60
                <br/>
                days
             </div>
             <div className="ml-2 bg-[#313131] p-[10px]  rounded-[20px] text-center font-[poppin-meidum] text-sm ">
                90
                <br/>
                days
             </div>
             <div className="ml-2 bg-[#313131] p-[10px]  rounded-[20px] text-center font-[poppin-meidum] text-sm ">
                120
                <br/>
                days
             </div>
             <div className="ml-2 bg-[#313131] p-[10px]  rounded-[20px] text-center font-[poppin-meidum] text-sm ">
                45
                <br/>
                days
             </div>
             <div className="ml-2 bg-[#313131] p-[10px]  rounded-[20px] text-center font-[poppin-meidum] text-sm ">
                50
                <br/>
                days
             </div>
          </div>
          {/*Inputs*/}
          <div className={`${Style.paddingX}`}>
             <AddForm/>
          </div>
       </div>
   );
};

export default CreateUser;