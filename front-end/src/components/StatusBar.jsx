import useModalStore from "../Store.js";
const StatusBar = ({status}) => {

   const {openModal, fetchView, modalType} = useModalStore();


   return (
       <div className="container-x  bg-transparent w-full rounded-lg flex flex-row p-2 h-full">
          <div className="primary-box flex flex-col justify-start rounded-[25px] min-w-[160px]">
             <span className="text-sm font-[poppin-meidum] whitespace-nowrap ">server status</span>
             <div className="flex flex-col justify-start">
                <div className="flex flex-row py-[5px] items-center text-xs gap-x-1">
                   <span>CPU:</span><span className="text-green-400"> 15%</span>
                </div>
                <div className="flex flex-row py-[5px] items-center text-xs gap-x-1">
                   <span>RAM:</span><span className="text-yellow-400"> 37%</span>
                </div>
                <div className="flex flex-row pt-[5px] items-center text-xs gap-x-1">
                   <span>G/F:</span><span className="text-green-400"> 15GB</span>
                </div>
             </div>
          </div>
          <div className="primary-box flex flex-col justify-start rounded-[25px] min-w-[160px]">
             <div className="flex flex-row justify-between items-center">
                <span className="text-sm font-[poppin-meidum] whitespace-nowrap ">User status</span>
                <span
                    className="text-[10px] whitespace-nowrap ml-3 underline text-green-600 cursor-pointer">see All</span>
             </div>
             <div className="flex flex-col justify-start">
                <div className="flex flex-row py-[5px] items-center text-xs gap-x-1">
                   <span>Online:</span><span className="text-green-400"> 39</span>
                </div>
                <div className="flex flex-row py-[5px] items-center text-xs gap-x-1">
                   <span>Depleted:</span><span className="text-red-500"> 17</span>
                </div>
                <div className="flex flex-row pt-[5px] items-center text-xs gap-x-1">
                   <span>Disabled:</span><span className="text-gray-300"> 15</span>
                </div>
             </div>
          </div>
          <div className="primary-box flex flex-col justify-start rounded-[25px] min-w-[160px]">
             <div className="flex flex-row justify-between items-center">
                <span className="text-sm font-[poppin-meidum] whitespace-nowrap ">Admin</span>
             </div>
             <div className="flex flex-col justify-start">
                <div className="flex flex-row py-[5px] items-center text-xs gap-x-1">
                   <span>Admin:</span><span className="text-green-400">hazhir</span>
                </div>
                <div className="flex flex-row py-[5px] items-center text-xs gap-x-1">
                   <span>Charge:</span><span className="text-red-500"> 17</span>
                </div>
                <div className="flex flex-row pt-[5px] items-center text-xs gap-x-1">
                   <span>price:</span><span className="text-gray-300"> 15 <span className="bg-blue-500 rounded px-1">T</span></span>
                </div>
             </div>
          </div>

       </div>
   );
};

export default StatusBar;