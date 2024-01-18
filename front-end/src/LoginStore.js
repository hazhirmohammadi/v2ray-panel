import create from "zustand";
import axios from "axios";
import {devtools} from "zustand/middleware";
import Toast from "./utils/Toast.js";
import {toast} from "react-toastify";

const useLoginStore = create(devtools((set) => ({
   isLoggedIn: true,
   initialValues: {
      username: "",
      password: "",
   },
   setAdminData: (value) =>
       set((state) => {
          return ({
             initialValues: {
                username: value.username,
                password: value.password
             },
          });
       }),
   login: async () => {
      try {

         const loginData = useLoginStore.getState().initialValues;
         const loginJson = JSON.stringify(loginData)

         try {
            //*API request using axios
             await axios.post(`http://176.9.248.19:300/login`, loginJson, {
               headers: {
                  'Content-Type': 'application/json',
               },
            }).then((res) => {
               const JsonRes = JSON.stringify(res)
               console.log(`axios res 🥳: ${JsonRes}`);
               // Handle the response and update the login state accordingly
               if (res.data.success === true) {

                  set({isLoggedIn: true});
               } else {
                  set({isLoggedIn: false});
               }
            }).catch((err) => {
               console.log(`axios err 🙂: ${err}`);
            })
         } catch (error) {
            const hh = JSON.stringify(error)
            console.log(`API Login Catch ⛑: ${error}`);
         }
      } catch (error) {
         console.error('Error logging in:', error);
      }
   },
   logout: () => {
      //? Perform logout logic here, e.g., clear session, reset state
      set({isLoggedIn: false});
      set({initialValues: {username: '', password: ''}});
   },
})));

export default useLoginStore;

