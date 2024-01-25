"use client"
import '../public/styles/App.css';
import {Style} from "./Style.js";
import {Header} from "./components";
import Modal from "./common/Modal.jsx";
import useModalStore from "./stores/Store.js";
import {AddForm, Login, UserCard} from "./components/index.js";
import {userCard} from "./utils/constants.js";
import useLoginStore from "./stores/LoginStore.js";
import 'react-toastify/dist/ReactToastify.css';
import {useMemo} from "react";
import userStore from "./stores/UserStore.js";
import Loading from "./common/loading/index.jsx";


function App() {
   const {isOpen, openModal, closeModal, modalComponent} = useModalStore();
   const {isLoggedIn} = useLoginStore();
   const {getUser} = userStore();
   const {usersConfig} = userStore();
   const userMemo = useMemo(() => {
      return userCard.map((card, index) => (
          <UserCard
              key={index}
              name={card.name}
              status={card.status}
              time={card.time}
          />
      ))
   }, [userCard]);
//error success

   return (
       <>
          {isLoggedIn ? <main className={` ${Style.maximum} pt-4 relative  h-screen `}>
                 {/*Header*/}
                 <div className="flex flex-col ">
                    <Loading
                        status="error"
                    />
                    <Header/>
                 </div>
                 {/*Modal*/}
                 <div className={`${Style.paddingX}`}>
                    <div>
                       <Modal isOpen={isOpen} onClose={closeModal}>
                          {
                             modalComponent === "view" ? <Header/> :
                                 modalComponent === "addForm" ? <AddForm/> : ""
                          }
                       </Modal>
                    </div>
                 </div>
                 {/*Map users*/}
                 <div className={`${Style.paddingX} flex flex-col gap-2 `}>
                    {userMemo}
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
