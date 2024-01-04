import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import useLoginStore from "../LoginStore.js";

const validationSchema = Yup.object().shape({
   username: Yup.string().required('Username is required'),
   password: Yup.string().required('Password is required'),
});

const Login = () => {
   const {initialValues, setAdminData, login} = useLoginStore();

   return (
       <div className="flex justify-center flex-col pt-24">

          <div className="self-center">
             <div className=" bg-slate-900 text-blue-600 p-2 rounded-lg mb-6  font-bold ">
                Login Admin
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
             <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                   </label>
                   <Field
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                       type="text"
                       id="username"
                       name="username"
                   />
                   <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
                </div>

                <div className="mb-4">
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                   </label>
                   <Field
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                       type="password"
                       id="password"
                       name="password"
                   />
                   <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic"/>
                </div>

                <div className="flex items-center justify-between">
                   <button
                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                       type="submit"
                   >
                      Sign In
                   </button>
                </div>
             </Form>
          </Formik>
       </div>
   );
};

export default Login;
