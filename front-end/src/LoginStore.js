import create from "zustand";
import axios from "axios";
import {devtools} from "zustand/middleware";
import log from "eslint-plugin-react/lib/util/log.js";
import {tuple} from "yup";

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
         //http://176.9.248.19:302/login?username=your_username&password=your_password
         // state 09146042182 bgm
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
                   const hh = JSON.stringify(res)

                   console.log(`axios res 🥳: ${res} ${hh}`);
                   if (res.data.success === true) {
                      console.log(88)
                      set({isLoggedIn: true});
                   } else {
                      console.log(99)
                      set({isLoggedIn: false});
                   }
                }).catch((err) => {
                   const hh = JSON.stringify(res)
                   console.log(`axios err 🙂:${err} ${hh}`);
                })

            console.log(55)
            // Handle the response and update the login state accordingly

            console.log(44)
         } catch (error) {
            const hh = JSON.stringify(error)
            console.log(`API Login Catch ⛑: ${error}`);
         }


         console.log(1111)
      } catch (error) {
         console.error('Error logging in:', error);
      }
   },
   logout: () => {
      // Perform logout logic here, e.g., clear session, reset state
      set({isLoggedIn: false});
      set({initialValues: {username: '', password: ''}});
   },
})));

export default useLoginStore;


// const useLoginStore = create((set) => ({
//    loginData: [],
//    initialValues: {
//       username: '',
//       password: '',
//    },
//    login: false,
//    isLogin: () => set({login: true}),
//    handleSubmit: (value) => {
//      try {
//
//         set(value)
//      }catch (e) {
//         console.log(e)
//      }
//    }
// }));
// export default useLoginStore;