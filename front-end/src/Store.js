import create from 'zustand';
import axios from 'axios';
const useModalStore = create((set) => ({
   dataView: [],
   data: [],
   isOpen: false,
   openModal: () => set({isOpen: true}),
   closeModal: () => set({isOpen: false}),

   viewOnline: async () => set({
      isOpen: true
   }),
   viewDepleted: async () => set({
      isOpen: true

   }),
   viewDisabled: async () => set({

      isOpen: true
   }),
   fetchData: async () => {
      try {
         const response = await axios.get('//');
         const data = response.data;

         set({ data });
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   },
}));





export default useModalStore;