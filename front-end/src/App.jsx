import './App.css';
import {Style} from "./Style.js";
import {Header} from "./components";
import React, {useState} from "react";
import Modal from "./components/Modal.jsx";
import useModalStore from "./Store.js";
import {Login, UserCard} from "./components/index.js";
import {userCard} from "./constants.js";
import useLoginStore from "./LoginStore.js";

function App() {
   const {isOpen, openModal, closeModal, dataView} = useModalStore();

   const {isLoggedIn} = useLoginStore();

   console.log(`is Login:${isLoggedIn}`)



   return (
       <>
          {isLoggedIn ? <main className={`${Style.paddingX} ${Style.maximum} pt-4 h-screen`}>
                 <div className="flex flex-col">
                    <Header/>
                 </div>
                 {/*Modal*/}
                 <div>
                    <div>
                       <button onClick={openModal}>Open Modal</button>
                       <Modal isOpen={isOpen} onClose={closeModal}>
                          <ul className="flex flex-col justify-center py-2 px-4 overflow-y-scroll">
                             {userCard.map((item, index) => (
                                    <li className="text-black border-b-[1px] border-b-gray-400 " key={index}>{item.name}</li>
                             ))}
                          </ul>
                       </Modal>
                    </div>
                 </div>
                 <div className="grid grid-cols-2  gap-2 ">
                    {userCard.map((card, index) => (
                        <UserCard
                            key={index}
                            name={card.name}
                            status={card.status}
                            time={card.time}
                        />
                    ))}
                 </div>
              </main>
              :
              <div className={`${Style.paddingX} ${Style.maximum} pt-4 h-screen`}>
                 <Login/>
              </div>
          }
       </>
   )
}

export default App;
