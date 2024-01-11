import create from "zustand";
import axios from "axios";

const userStore = create((set) => ({
   usersConfig: null,

   getUser: async () => {
      try {
         console.log(10)

         const response = await axios.post('http://176.9.248.19:300/users', {
            users:[]
         });
         console.log(11)
         const jsonResponse=JSON.stringify(response.data.users.list)
         console.log(jsonResponse)

         console.log(12)

         set({usersConfig: jsonResponse});
         console.log(13)
      } catch (error) {
         console.log(error);
      }
   },
}));
export default userStore;