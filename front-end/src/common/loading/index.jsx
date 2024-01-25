import Padding from "./Padding.jsx";
import Error from "./Error.jsx";
import Success from "./Success.jsx";
import {useEffect, useState} from "react";

const Loading = ({status}) => {
   const [display, setDisplay] = useState(true)
   if (status === "success" || status === "error") {
      setInterval(() => {
         setDisplay(false)
      }, [4000])
   } else {
      console.log("End")
   }
   return (
       <div className={`w-full ${display ? "flex" : "hidden"}  justify-center absolute pt-4`}>
          {status === "padding" ?
              <div
                  className="loading-animate border border-blue-900 min-w-[100px] px-3 py-2 rounded-full absolute z-50  bg-[#262626] shadow-2xl shadow-blue-400">
                 <Padding/>
              </div>
              :
              status === "error" ?
                  <div
                      className="loading-animate min-w-[100px] px-3 py-2 rounded-full absolute z-50  bg-[#262626] shadow-2xl shadow-red-500">
                     <Error/>
                  </div>
                  :
                  status === "success" ?
                      <div
                          className="loading-animate min-w-[100px] px-3 py-2 rounded-full absolute z-50  bg-[#262626] shadow-2xl shadow-green-500">
                         <Success/>
                      </div>
                      : null
          }
       </div>
   )

};

export default Loading;