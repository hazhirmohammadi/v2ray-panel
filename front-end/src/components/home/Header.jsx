"use strict"
import {useState} from 'react';
import {Avatar, StatusBar} from "../index.js"
import useModalStore from "../../stores/Store.js";
import {Style} from "../../Style.js";
import {Link} from "react-router-dom";
import {search, union} from "../../../public/assets/icons/index.js";

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
                <Link to="/search">
                   <div className="bg-[#262626] rounded-[15px] p-[10px]">
                      <img className="size-[20px]" src={search} alt="search"/>
                   </div>
                </Link>
                <Link to="/alerts">
                   <div className="bg-[#262626] rounded-[15px] p-[10px]">
                      <img className="size-[20px]" src={union} alt="union"/>
                   </div>
                </Link>
             </div>
          </div>

          {/*Status Bar*/}
          <div className=" flex flex-col justify-end mb-5 ">
             <div className={`w-full ${Style.paddingX}`}>
                <div className={' py-1 px-2  rounded-full  w-fit'}>
                   <span className="text-sm">Status </span>
                </div>
             </div>
             <div className="grid grid-cols-12 mt-[5px]">
                <div className="z-20 flex flex-col items-center justify-center col-span-2 pl-[2px] w-full h-full">
                   <div className="grid grid-rows-2  pr-1 w-full h-full gap-y-2">

                      <div className="row-span-1 bg-[#262626] rounded-[15px] p-[4px] flex justify-center items-center">
                         <Link to="/create_user">
                            <div className="relative text-xs">
                               Add
                            </div>
                         </Link>
                      </div>

                      <div className="row-span-1 bg-[#262626] rounded-[15px] p-[4px] flex justify-center items-center">
                         <Link to="">
                            <div className="text-xs">
                               <span className="text-red-500">Del</span>
                            </div>
                         </Link>
                      </div>
                   </div>
                </div>

                <div className="z-10 col-span-10">
                   <StatusBar/>
                </div>
             </div>
          </div>
       </div>
   );
};

export default Header;