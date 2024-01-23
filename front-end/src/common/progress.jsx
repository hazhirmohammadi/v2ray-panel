const Progress = (time) => {
   //user time
   const width = time.time / time.max*  100;
   const showWidth=Math.round(width);
   let style = {
      width: `${width}%`
   }
   return (
      <div className="flex flex-row items-center">
         <div className={`rounded-2xl bg-[#313131] flex  w-[100%] my-2`}>
            <div style={style} className={`py-[2px] rounded-2xl bg-[#2FE48D] shadow-emerald-500  shadow-lg`}>
               <div className="py-[2px] rounded-2xl w-[15px] bg-white ml-auto mr-1 "></div>
            </div>
         </div>
         <div className="ml-[1px]">
            {showWidth+"%"}
         </div>
      </div>
   );
};

export default Progress;