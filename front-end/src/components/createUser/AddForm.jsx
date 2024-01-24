import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from "yup";
import React, {useEffect, useState} from "react";
import {userCard} from "../../utils/constants.js";
import {array} from "yup";
import axios from "axios";
import toast from "../../utils/Toast.js";


//!  validation inputs form with Yup
const validationSchema = Yup.object().shape({
   name: Yup.string().required('Username is required'),
   limit: Yup.number().required('required Enter Number '),
   flow: Yup.number().required('required Enter Number '),
   time: Yup.number().required('required Enter Number '),
});
const addForm = () => {
   // ? State inbounds ⤵
   const [optionBounds, setOptionBounds] = useState([]);
   const [config, setConfig] = useState();

   useEffect(() => {
      console.log(optionBounds)
   }, [optionBounds]);

   // initialValues for form
   const initialValues = {
      name: '',
      limit: '',
      flow: '',
      time: '',
      id: ""
   };
   const handleSubmit = async (values) => {
      setConfig(values)
      console.log(values)
      const res = await axios.post("http://176.9.248.19:300/add", {
         name: values.name,
         limit: values.limit,
         flow: values.flow,
         time: values.time,
         id: {
            inb:[""]
         }
      });


      if (res.status===200){
      }else {
      }
      console.log(res)
   };

   // ? filter inbounds ⤵
   const filterInBounds = (item) => {
      setOptionBounds((prevOptionBounds) =>
          prevOptionBounds.filter((list) => list !== item)
      );
   }

   const addUser = async () => {

   }

   return (
       <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form>
             <div className="mb-2 mt-2 ">
                <label htmlFor="name" className="block text-xs font-medium text-white ">
                   Username
                </label>
                <Field
                    type="text"
                    id="name"
                    name="name"
                    className="border-none outline-none shadow-sm py-1 px-1 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic"/>
             </div>
             <div className="mb-4">
                <label htmlFor="limit" className="block text-xs font-medium text-white">
                   limit IP
                </label>
                <Field
                    type="number"
                    id="limit"
                    name="limit"
                    className="border-none outline-none  shadow-sm py-1 px-1 text-blue-600 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage name="limit" component="div" className="text-red-500 text-xs italic"/>
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
                <label htmlFor="time" className="block text-xs font-medium text-white">
                   time
                </label>
                <Field
                    type="number"
                    id="time"
                    name="time"
                    className="border-none outline-none  shadow-sm py-1 px-1 text-blue-600 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage name="time" component="div" className="text-red-500 text-xs italic"/>
             </div>
             <div className=" flex flex-col justify-start my-2 ">
                <label htmlFor="inBound" className="mb-1 text-xs font-medium text-white ">
                   inBound
                </label>
                <Field
                    onChange={(e) => {
                       console.log(e.target.value)
                       const newItem = e.target.value;

                       setOptionBounds((prevOptionBounds) => [...prevOptionBounds, newItem]);
                    }}
                    className="px-1 py-1 rounded-lg "
                    id="inBound"
                    name="inBound"
                    as="select"
                >
                   {userCard.map((item, index) => (
                       <option
                           key={index}
                           value={item.name}
                       >
                          {item.name}
                       </option
                       >
                   ))}
                </Field>

             </div>
             <div className="flex flex-wrap  max-w-[220px]">
                {optionBounds.map((item, index) => (

                    <button
                        className={`m-[1px] py-1 px-1 rounded-lg text-center border-[1px] border-gray-500`}

                        onClick={() => {
                           filterInBounds(item)
                           console.log(`s ${item}`)
                        }}
                        key={index}>
                       {item}
                       <span
                           className="ml-1 px-[4px] text-center text-red-400 border-red-400 border-[1px] text-xs rounded-full">x</span>
                    </button>
                ))}
             </div>
             <button onClick={addUser} type="submit" className="bg-indigo-500 text-white py-1 px-1 rounded-md">
                Submit
             </button>

          </Form>
       </Formik>
   );
};

export default addForm;
