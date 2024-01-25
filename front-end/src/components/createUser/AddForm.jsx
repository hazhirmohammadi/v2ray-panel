import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from "yup";
import React, {useEffect, useState} from "react";
import {userCard} from "../../utils/constants.js";
import axios from "axios";
import Progress from "../../common/progress.jsx";


//!  validation inputs form with Yup
const validationSchema = Yup.object().shape({
   name: Yup.string().required('Username is required'),
   limit: Yup.number().required('required Enter Number '),
   flow: Yup.number().required('required Enter Number '),
   time: Yup.number().required('required Enter Number '),
});
const addForm = () => {
   // ? State inbounds ⤵
   const [progress, setProgress] = useState(0);
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
            inb: [""]
         }
      });


      if (res.status === 200) {
      } else {
      }
      console.log(res)
   };

   // ? filter inbounds ⤵
   const filterInBounds = (item) => {
      setOptionBounds((prevOptionBounds) =>
          prevOptionBounds.filter((list) => list !== item)
      );
   }

   useEffect(() => {
      console.log(progress);
   }, [setProgress]);
   const addUser = async () => {
   }

   switch (initialValues) {
      case initialValues.name:
         console.log(11)
         setProgress(20)
         break
      case initialValues.time:
         setProgress(20);
         break
      case initialValues.flow:
         setProgress(20);
         break
      case initialValues.limit:
         setProgress(20)
         break
      case initialValues.id:
         setProgress(20)
         break
   }

   return (
       <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form>
             <div className="mb-2 mt-2 ">
                <label htmlFor="name" className="text-xs font-[poppin-extrsLight] mb-5 ">
                   Username
                </label>
                <Field
                    type="text"
                    id="name"
                    name="name"
                    className="add-field"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic"/>
             </div>
             <div className="mb-4">
                <label htmlFor="limit" className="text-xs font-[poppin-extrsLight] mb-5">
                   limit IP
                </label>
                <Field
                    type="number"
                    id="limit"
                    name="limit"
                    className="add-field"
                />
                <ErrorMessage name="limit" component="div" className="text-red-500 text-xs italic"/>
             </div>
             <div className="mb-4">
                <label htmlFor="flow  " className="text-xs font-[poppin-extrsLight] mb-5">
                   Flow
                </label>
                <Field
                    type="number"
                    id="flow"
                    name="flow"
                    className="add-field"
                />
                <ErrorMessage name="flow" component="div" className="text-red-500 text-xs italic"/>
             </div>

             <div className="mb-4">
                <label htmlFor="time" className="text-xs font-[poppin-extrsLight] mb-5">
                   time
                </label>
                <Field
                    type="number"
                    id="time"
                    name="time"
                    className="add-field"
                />
                <ErrorMessage name="time" component="div" className="text-red-500 text-xs italic"/>
             </div>
             <div className=" flex flex-col justify-start my-2 ">
                <label htmlFor="inBound" className="text-xs font-[poppin-extrsLight] mb-5">
                   inBound
                </label>
                <Field
                    onChange={(e) => {
                       console.log(e.target.value)
                       const newItem = e.target.value;

                       setOptionBounds((prevOptionBounds) => [...prevOptionBounds, newItem]);
                    }}
                    className="add-field "
                    id="inBound"
                    name="inBound"
                    as="select"
                >
                   {userCard.map((item, index) => (
                       <option
                           className=""
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
             <div className="mb-5">
                <div className="mt-2">
                 <span className="text-xs font-[poppin-extrsLight] mb-5">
                    Progress
                 </span>
                </div>
                <Progress
                    time={0}
                    max={100}
                />
             </div>
             <button onClick={addUser} type="submit"
                     className="my-4  bg-[#0AC9BD] rounded-[15px] py-3 px-5 w-full text-center">
                Add User
             </button>

          </Form>
       </Formik>
   );
};

export default addForm;
