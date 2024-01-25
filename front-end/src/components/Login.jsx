import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import useLoginStore from "../stores/LoginStore.js";
import Index from "../common/loading/index.jsx";

const validationSchema = Yup.object().shape({
   username: Yup.string().required('Username is required'),
   password: Yup.string().required('Password is required'),
});

const Login = () => {
   const { setAdminData, login} = useLoginStore();

   return (
       <div className="flex justify-center flex-col pt-24">

          <div className="self-center">
             <div className="text-white  text-[24px] font-[poppin-bold]  rounded-lg mb-[11px] ">
                Hello Admin <span className="text-[#2FE48D]">!</span>
             </div>
             <div>
                <p className="font-[poppin-extrsLight] text-sm text-center leading-[23.80px]">
                   Welcome Back Yo’ve<br/>
                   been missed
                </p>
             </div>
          </div>
          <Formik
              initialValues={{
                 username:"",
                 password:""
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                 setAdminData(values)
                 login()
              }}
          >
             <Form className="bg-transparent  rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                   </label>
                   <Field
                       className="bg-[#202020] text-[#A4A4A4] rounded-[15px] shadow appearance-none border-none  w-full py-2 px-3   focus:outline-none focus:shadow-outline"
                       type="text"
                       id="username"
                       name="username"
                   />
                   <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
                </div>

                <div className="mb-4">
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                   </label>
                   <Field
                       className="bg-[#202020] text-[#A4A4A4] rounded-[15px] shadow appearance-none border-none  w-full py-2 px-3   focus:outline-none focus:shadow-outline"
                       type="password"
                       id="password"
                       name="password"
                   />
                   <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic"/>
                </div>

                <div className="flex items-center justify-center">
                   <button
                       className="bg-[#0AC9BD] hover:bg-[#0AC7BD] rounded-[15px] text-sm  text-white w-full  py-3 px-5  focus:outline-none focus:shadow-outline"
                       type="submit"
                   >
                    {/*<Index/>*/}
                      Login
                   </button>
                </div>
             </Form>
          </Formik>
       </div>
   );
};

export default Login;
