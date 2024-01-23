const Progress = (time) => {
   //user time
   const width = time.time / time.max*  100
   console.log(width)
   let style = {
      width: `${width}%`
   }
   return (
       <div className={`rounded-2xl bg-[#313131] flex  w-[100%] my-2`}>
          <div style={style} className={`py-[2px] rounded-2xl bg-[#2FE48D] shadow-emerald-500  shadow-lg`}>
             <div className="py-[2px] rounded-2xl w-[15px] bg-white ml-auto mr-1 "></div>
          </div>
       </div>
   );
};

export default Progress;