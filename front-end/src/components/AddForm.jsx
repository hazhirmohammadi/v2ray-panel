import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {userCard} from "../constants.js";

const validationSchema = Yup.object().shape({
   username: Yup.string().required('Username is required'),
   limitIp: Yup.number().required('required Enter Number '),
   flow: Yup.number().required('required Enter Number '),
   date: Yup.number().required('required Enter Number '),
});
const addForm = () => {
   const [optionBounds,setOptionBounds]=useState([]);
   const [inBounds, setInBounds] = useState([]);
   useEffect(() => {
   }, [optionBounds]);
   const initialValues = {
      username: '',
      limitIp: '',
      flow: '',
      date: '',
      inBounds:[]
   };
   const handleSubmit = (values) => {
      // Handle form submission
      console.log(values);
   };

   const filterInBounds=(item)=>{
      setOptionBounds((prevOptionBounds) =>
          prevOptionBounds.filter((list) => list !== item)
      );
   }

   return (
       <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form>
             <div className="mb-2 mt-2 ">
                <label htmlFor="username" className="block text-xs font-medium text-white ">
                   Username
                </label>
                <Field
                    type="text"
                    id="username"
                    name="username"
                    className="border-none outline-none shadow-sm py-1 px-1 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
             </div>
             <div className="mb-4">
                <label htmlFor="limitIp" className="block text-xs font-medium text-white">
                   limit IP
                </label>
                <Field
                    type="number"
                    id="limitIp"
                    name="limitIp"
                    className="border-none outline-none  shadow-sm py-1 px-1 text-blue-600 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage name="limitIp" component="div" className="text-red-500 text-xs italic"/>
             </div>
             <div className="mb-4">
                <label htmlFor="flow  " className="block text-xs font-medium text-white">
                   Flow
                </label>
                <Field
                    type="number"
                    id="flow"
                    name="flow"
                    className="border-none outline-none  shadow-sm py-1 px-1 text-blue-600 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage name="flow" component="div" className="text-red-500 text-xs italic"/>
             </div>

             <div className="mb-4">
                <label htmlFor="date" className="block text-xs font-medium text-white">
                   Date
                </label>
                <Field
                    type="number"
                    id="date"
                    name="date"
                    className="border-none outline-none  shadow-sm py-1 px-1 text-blue-600 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage name="date" component="div" className="text-red-500 text-xs italic"/>
             </div>
             <div className=" flex flex-col justify-start my-2 ">
                <label htmlFor="inBound" className="mb-1 text-xs font-medium text-white ">
                   inBound
                </label>
                <Field
                    onChange={(e)=>{
                       const newItem = e.target.values;
                       setOptionBounds((prevOptionBounds) => [...prevOptionBounds, newItem]);
                    }}
                    className="px-1 py-1 rounded-lg "
                    id="inBound"
                    name="inBound"
                    as="select"
                >
                   {userCard.map((item, index) => (
                       <option
                           onClick={()=>{
                              const newItem = item.name;
                              setOptionBounds((prevOptionBounds) => [...prevOptionBounds, newItem]);
                           }}
                           key={index}
                           value={item.id}
                       >
                          {item.name}
                       </option>
                   ))}
                </Field>

             </div>
             <div>
                {optionBounds.map((item)=>(
                    <button
                        onClick={()=>{
                           filterInBounds(item)
                        }}
                        key={item}>{item}</button>
                ))}
             </div>
             <button type="submit" className="bg-indigo-500 text-white py-1 px-1 rounded-md">
                Submit
             </button>
          </Form>
       </Formik>
   );
};

export default addForm;
