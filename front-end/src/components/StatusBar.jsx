import React, {useEffect, useState} from 'react';
import Modal from "../common/Modal.jsx";
import {users} from "../constants.js";
import useModalStore from "../Store.js";
import axios from "axios";

const StatusBar = () => {
   const {openModal, fetchView , modalType} = useModalStore();

   // const [status, setStatus] = useState();
   //
   // useEffect(() => {
   //    const postData = async () => {
   //       try {
   //          console.log(9)
   //          const response = await axios.get('http://176.9.248.19:302/api/status');
   //          console.log(`res STATUS :${response}`)
   //          setStatus(response)
   //          console.log(10)
   //          return response
   //       } catch (error) {
   //          console.log(11)
   //          console.error(error);
   //       }
   //    };
   //    postData().then(r => {
   //       console.log(12)
   //       console.log(r)
   //    }).catch(e=>{
   //       console.log(13)
   //       console.log(e)
   //    })
   // }, []);
   // console.log(`Status Server : ${status}`);
   return (
       <div className="  bg-slate-900 w-full rounded-lg flex flex-row p-2 h-full">

          <div className="flex flex-col items-center justify-start">
             <div className="flex flex-row items-center justify-start mb-4 ">
                <span className="text-sm ">Ram: </span>
                <span className="ml-2 text-yellow-400 bg-gray-950 p-1 rounded-lg text-sm">4%</span>
             </div>
             <div className="flex flex-row items-center justify-start mb-4">
                <span className=" text-sm">CPU:</span>
                <span className="ml-2 text-green-400 bg-gray-950 p-1 rounded-lg text-sm">15%</span>
             </div>
             <div className="flex flex-row items-center justify-start mb-1">
                <span className=" text-sm">G/F:</span>
                <span className="ml-2 text-green-400 bg-gray-950 p-1 rounded-lg text-xs">150/GB</span>
             </div>
          </div>

          <div className="items-center justify-center ml-2 flex flex-col w-full">
             {/*Online*/}
             <div className="flex flex-row items-center justify-between mb-1 w-full">
                <div className="flex flex-row items-center">
                   <span className=" text-sm">Online:</span>
                   <span className="ml-2 text-green-400 bg-gray-950 p-1 rounded-lg text-sm">48 👁</span>
                </div>
                <button onClick={() => {
                    openModal()
                    modalType("view")
                   fetchView('/get').then(r => {
                      console.log(`res View: ${r}`)
                   }).catch(e => {
                      console.log(`error View ${e}`)
                   })
                }} className="p-1 rounded-lg bg-green-700 ml-3">view
                </button>
             </div>
             {/*Depleted*/}
             <div className="flex flex-row items-center justify-between mb-1 w-full">
                <div className="flex flex-row items-center">
                   <span className=" text-sm">Depleted:</span>
                   <span className="ml-2 text-red-400 bg-gray-950 p-1 rounded-lg text-sm">14</span>
                </div>
                <button className="p-1 rounded-lg bg-red-700 ml-3">view</button>
             </div>
             {/*Disabled*/}
             <div className="flex flex-row items-center justify-between mb-1 w-full">
                <div className="flex flex-row items-center">
                   <span className=" text-sm">Disabled:</span>
                   <span className="ml-2 text-green-400 bg-gray-950 p-1 rounded-lg text-sm">9</span>
                </div>
                <button className="p-1 rounded-lg bg-gray-500 ml-3">view</button>
             </div>
          </div>

       </div>
   );
};

export default StatusBar;