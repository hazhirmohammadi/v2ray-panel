import './App.css'
import {Style} from "./Style.js";
import {Header} from "./components";
import React, {useState} from "react";
import Modal from "./components/Modal.jsx";
import useModalStore from "./Store.js";
import {UserCard} from "./components/index.js";
import {userCard} from "./constants.js";

function App() {
   const {isOpen, openModal, closeModal} = useModalStore();


   return (
       <>
          <main className={`${Style.paddingX} ${Style.maximum} pt-4 h-screen`}>

             <div className="flex flex-col">
                <Header/>
             </div>
             {/*Modal*/}
             <div>
                <div>
                   <button onClick={openModal}>Open Modal</button>
                   <Modal isOpen={isOpen} onClose={closeModal}>
                      <h2>Modal Content</h2>
                      <p>This is the content of the modal.</p>
                   </Modal>
                </div>
             </div>
             <div className="grid grid-cols-2  gap-2 ">
                {userCard.map((card,index)=>(
                    <UserCard
                        key={index}
                        name={card.name}
                        status={card.status}
                        time={card.time}
                    />
                    ))}
             </div>
          </main>
       </>
   )
}

export default App;
