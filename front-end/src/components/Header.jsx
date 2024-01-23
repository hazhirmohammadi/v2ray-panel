"use strict"
import { useState} from 'react';
import {Avatar, StatusBar} from "./index.js"
import useModalStore from "../Store.js";
import {Style} from "../Style.js";
import {Link} from "react-router-dom";
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
          <div className={`flex justify-between items-center ${Style.paddingX} mb-5`}>
             <Avatar/>
             <div className="flex flex-row items-center gap-x-2">
                <div className="bg-[#262626] rounded-[15px] p-[10px]">
                   <Link to="/search">
                      <img className="size-[20px]" src={search} alt="search"/>
                   </Link>
                </div>
                <div className="bg-[#262626] rounded-[15px] p-[10px]">
                  <Link to="/alerts">
                     <img className="size-[20px]" src={union} alt="union"/>
                  </Link>
                </div>
             </div>
          </div>

          {/*Status Bar*/}
          <div className=" flex flex-col justify-end mb-5 ">
            <div className={`w-full ${Style.paddingX}`}>
               <div className={'bg-[#262626] py-1 px-2  rounded-full  w-fit'}>
                  <span className="text-sm">Status </span>
               </div>
            </div>
             <StatusBar />
          </div>
       </div>
   );
};

export default Header;