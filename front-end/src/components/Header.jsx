"use strict"
import React, {useEffect, useState} from 'react';
import {StatusBar} from "./index.js"
import {avatar, avatar_2} from "../../public/assets/images"
import useModalStore from "../Store.js";
import axios from "axios";
import {search, union} from "../../public/assets/icons/index.js";

const Header = () => {
   const {openModal, modalType} = useModalStore();

   const [status, setStatus] = useState();
   // const fetchData = async () => {
   //    try {
   //       const response = await axios.get('http://176.9.248.19:300/api/status');
   //
   //       setStatus(response);
   //    } catch (error) {
   //       console.error(error);
   //    }
   // };
   // useEffect(() => {
   //    fetchData();
   // }, []);
   // console.log(status)


   return (
       <div className="   ">
          {/*Avatar */}
          <div className=" flex flex-col  ">
             {/*avatar bar*/}
             <div className="flex flex-row justify-between items-center rounded-lg p-1 ">
                <div className="flex flex-row items-center ">
                   <div className="rounded-full size-[40px]   bg-cover bg-center relative z-20">
                      <img className="w-full h-full  rounded-full" src={avatar_2} alt=""/>
                   </div>
                   <div className="flex flex-col">
                      <span className="ml-2 font-bold text-xs text-[#202020] font-[poppin-extrsLight]  ">God Morning</span>
                      <span className="ml-2 font-bold text-sm text-white  font-[poppin-meidum] ">Hazhir</span>
                   </div>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                   <div className="bg-[#262626] rounded-[15px] p-[10px]">
                      <img className="size-[20px]" src={search} alt="search"/>
                   </div>
                   <div className="bg-[#262626] rounded-[15px] p-[10px]">
                      <img className="size-[20px]" src={union} alt="union"/>
                   </div>
                </div>
             </div>
             {/*Search Bar*/}

          </div>

          {/*Status Bar*/}
          <div className=" flex flex-col justify-end mt-2">
             <div className='bg-[#262626] py-1 px-2  rounded-full  w-fit'>
                <span className="text-sm">Status </span>
             </div>
             <StatusBar />
          </div>

          {/*<div className="bg-slate-900 p-3  flex flex-row justify-between relative mt-1 rounded-lg ">*/}
          {/*   <input className=" mr-[2px] rounded-lg text-white bg-slate-500 p-1 text-xs" type="text"/>*/}
          {/*   <button className="p-2 w-full rounded-lg bg-green-700 mr-[2px] text-xs">search</button>*/}
          {/*   <button onClick={() => {*/}
          {/*      openModal()*/}
          {/*      modalType("addForm")*/}
          {/*   }} className="p-2 w-full rounded-lg bg-green-700  text-xs ">Add*/}
          {/*   </button>*/}
          {/*</div>*/}
       </div>
   );
};

export default Header;