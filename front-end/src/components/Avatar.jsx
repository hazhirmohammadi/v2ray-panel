import {avatar_2} from "../../public/assets/images/index.js";
import {Link} from "react-router-dom";
import {search, union} from "../../public/assets/icons/index.js";

const Avatar = () => {
   return (
       <div>
          <div className=" flex flex-col  ">
             {/*avatar bar*/}
             <div className={`flex flex-row justify-between items-center rounded-lg p-1 `}>
                <div className="flex flex-row items-center ">
                   <div className="rounded-full size-[40px]   bg-cover bg-center relative z-20">
                      <img className="w-full h-full  rounded-full" src={avatar_2} alt=""/>
                   </div>
                   <div className="flex flex-col">
                      <span className="ml-2 font-bold text-xs text-[#202020] font-[poppin-extrsLight]  ">God Morning</span>
                      <span className="ml-2 font-bold text-sm text-white  font-[poppin-meidum] ">Hazhir</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
   );
};

export default Avatar;