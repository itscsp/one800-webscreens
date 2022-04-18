import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserMail = (props) => {

  let submitHandler = ( arg) => {

    props.updateCurrentStep(arg);
}

const loginValid = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Enter Mobile number')
    .max(50, 'Enter Mobile number')
    .required('Enter Mobile number'),
  emailId: Yup.string().email('Enter Valid Email').required('Enter Valid Email'),
});

  return (
    <Formik
      initialValues={{
        fullName: '',
        emailId: '',
      }}

      validationSchema={loginValid}

      onSubmit={(values) => {
        console.log(values);
        props.updateCurrentStep('stepnext');
      }}

    >
      {({ errors, touched }) => (
      <Form>


        <label className="">
          <p className="text-lg text-black mb-1">Name</p>
          <Field
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            className="w-full h-[45px] px-4 text- rounded-[15px] border-2 border-green-400"
          />
          <p className="text-right text-[#E25C5C] mt-1">
          {errors.fullName && touched.fullName ? ( errors.fullName) : null }
          </p>
        </label>
        <label className="mt-[20px]">
          <p className="text-lg text-black mb-1">Email ID</p>
          <Field
            type="email"
            name="emailId"
            placeholder="Enter Email ID"
            className="w-full h-[45px] px-4 text- rounded-[15px] border-2 border-green-400"
          />
          <p className="text-right text-[#E25C5C] mt-1">

          {errors.emailId && touched.emailId ? ( errors.emailId) : null }
          </p>
        </label>

        <div className="flex mt-[50px] justify-center gap-4">

                <button  onClick={ () => {submitHandler('stepback')}}  className='w-full gap-1 border-2 border-green-900 py-[15px] px-[45px] rounded-[15px] w-45 text-center'>
                Back
                </button>



                <button type="submit" className='w-full gap-1 border-2 border-green-900 bg-green-900 py-[15px] px-[45px] rounded-[15px]  text-center text-white'>
                    Next
                </button>
        </div>


    </Form>
      )}
    </Formik>
  );
};

export default UserMail;
