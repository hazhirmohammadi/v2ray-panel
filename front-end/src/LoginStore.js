import create from "zustand";
import axios from "axios";
import {devtools} from "zustand/middleware";

const useLoginStore = create(devtools((set) => ({
   isLoggedIn: false,
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
         // console.log(`JSON 44 :${loginJson}`)

         try {
            //*API request using axios
            const res = await axios.post(`http://176.9.248.19:302/login`, loginJson, {
               headers: {
                  'Content-Type': 'application/json',
               },
            })

                .then((res) => {
                   const JsonRes = JSON.stringify(res)
                   console.log(`axios res 🥳: ${JsonRes}`);
                   // Handle the response and update the login state accordingly
                   if (res.data.success === true) {
                      set({isLoggedIn: true});
                   } else {
                      set({isLoggedIn: false});
                   }
                }).catch((err) => {
                   const JsonRes = JSON.stringify(res)
                   console.log(`axios err 🙂: ${JsonRes}`);
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

