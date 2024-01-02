import create from 'zustand';
import axios from 'axios';
const useModalStore = create((set) => ({
   dataView: [],
   isOpen: false,
   openModal: () => set({isOpen: true}),
   closeModal: () => set({isOpen: false}),
   fetchView: async (api) => {
      try {
         const response = await axios.get(api);
         const data = response.data;

         set({ data });
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   },
}));





export default useModalStore;