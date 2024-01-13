import {toast} from "react-toastify";
const Toast = ({massage:mas,type:type}) => {
   console.log(type)
   return toast.promise(`${mas}`, {
      position: "top-center",
      autoClose: 2000,
      type:`${type}`,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className:"w-[220px] rounded-lg mt-1 bg-gray-950 "

   });
};
export default Toast;



