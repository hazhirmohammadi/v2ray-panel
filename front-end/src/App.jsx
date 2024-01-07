import './App.css';
import {Style} from "./Style.js";
import {Header} from "./components";
import Modal from "./common/Modal.jsx";
import useModalStore from "./Store.js";
import {AddForm, Login, UserCard} from "./components/index.js";
import {userCard} from "./constants.js";
import useLoginStore from "./LoginStore.js";

function App() {
   const {isOpen, openModal, closeModal, dataView, modalComponent} = useModalStore();
   const {isLoggedIn} = useLoginStore();


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
                          {
                             modalComponent === "view" ? <Header/> :
                                 modalComponent === "addForm" ? <AddForm/> : ""
                          }
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
