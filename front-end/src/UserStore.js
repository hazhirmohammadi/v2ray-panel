import create from "zustand";
import axios from "axios";

const userStore = create((set) => ({
   usersConfig: [],
   getUser: async () => {
      try {
         console.log(10)

         const response = await axios.get('http://176.9.248.19:300/users');
         console.log(response.data.users.list)
         console.log(11)

         console.log(12)

          set({usersConfig:response.data.users.list });
         console.log(13)
      } catch (error) {
         console.log(error);
      }
   },
}));
export default userStore;