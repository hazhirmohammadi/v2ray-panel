import create from 'zustand';
import axios from 'axios';
import {devtools} from "zustand/middleware";

const useModalStore = create(devtools((set) => ({
   dataView: [],
   isOpen: false,
   modalComponent: "",
   openModal: () => set({isOpen: true}),
   closeModal: () => set({isOpen: false}),
   modalType: (type) => set({modalComponent: type}),
   fetchView: async (api) => {
      try {
         const response = await axios.get(api);
         const data = response.data;

         set({data});
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   },
})));


export default useModalStore;
