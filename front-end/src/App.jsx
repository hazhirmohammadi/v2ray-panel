"use client"
import './App.css';
import {Style} from "./Style.js";
import {Header} from "./components";
import Modal from "./common/Modal.jsx";
import useModalStore from "./Store.js";
import {AddForm, Login, UserCard} from "./components/index.js";
import {userCard} from "./constants.js";
import useLoginStore from "./LoginStore.js";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useMemo, useState} from "react";
import userStore from "./UserStore.js";


function App() {
   const {isOpen, openModal, closeModal, modalComponent} = useModalStore();
   const {isLoggedIn} = useLoginStore();
   const {getUser} = userStore();
   const {usersConfig} = userStore();
   // console.log(`${usersConfig.user.name}`)
   const userss = useMemo(() => {
      return  usersConfig
   }, [getUser]);

   return (
       <>
          {isLoggedIn ? <main className={`${Style.paddingX} ${Style.maximum} pt-4  relative  h-screen`}>
                 <ToastContainer
                     style={{
                        borderRadius: "15% ",
                        paddingLeft: "55px",
                        paddingTop: "20px",
                        marginLeft: "auto",
                        marginRight: "auto"
                     }}
                 />

                 <div className="flex flex-col">
                    <Header/>
                 </div>
                 <button onClick={getUser}>gett</button>
                 {/*Modal*/}
                 <div>
                    <div>
                       <button onClick={openModal}>Open Modal</button>
                       <Modal isOpen={isOpen} onClose={closeModal}>
                          {
                             modalComponent === "view" ? <Header/> :
                                 modalComponent === "addForm" ? <AddForm/> : ""
                          }
                       </Modal>
                    </div>
                 </div>
                 <div className="grid grid-cols-2  gap-2 ">
                    {usersConfig.map((card, index) => (
                        <UserCard
                            key={index}
                            name={card.user.name}
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
