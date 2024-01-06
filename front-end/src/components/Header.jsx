import React from 'react';
import {StatusBar} from "./index.js"
import {avatar, avatar_2} from "../assets/images"
import useModalStore from "../Store.js";

const Header = () => {
   const{ openModal , modalType}=useModalStore();
   return (
       <div className="   ">
          {/*Avatar */}
          <div className=" flex flex-col  ">
             {/*avatar bar*/}
             <div className="flex flex-row items-center bg-slate-900 rounded-lg p-2 ">
                <div className="rounded-full size-[40px]  border-2 bg-cover bg-center relative z-20">
                   <img  className="w-full h-full  rounded-full" src={avatar_2} alt=""/>
                </div>
                <span className="ml-2 font-bold text-sm text-white p-1 rounded-lg bg-gray-950">Hazhir ✅</span>
             </div>
             {/*Search Bar*/}

          </div>

          {/*Status Bar*/}
          <div className=" flex justify-end mt-1">
             <StatusBar/>
          </div>

          <div className="bg-slate-900 p-3  flex flex-row justify-between relative mt-1 rounded-lg ">
             <input className=" mr-[2px] rounded-lg text-white bg-slate-500 p-1 text-xs"  type="text" />
             <button className="p-2 w-full rounded-lg bg-green-700 mr-[2px] text-xs">search</button>
             <button onClick={()=>{
                openModal()
                modalType("addForm")
             }} className="p-2 w-full rounded-lg bg-green-700  text-xs ">Add </button>
          </div>
       </div>
   );
};

export default Header;