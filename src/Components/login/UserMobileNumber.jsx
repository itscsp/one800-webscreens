import React, { useState } from "react";
import * as FcIcons from "react-icons/fc";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserMobileNumber = (props) => {

  const loginValid = Yup.object().shape({
    mobileNumber: Yup.string()
      .min(10, 'Mobile number should be 10 numbers')
      .max(10, 'Mobile number should be 10 numbers')
      .required('Enter Mobile number'),
  });


  return (
    <Formik
    initialValues={{
      mobileNumber: '',
    }}
    validationSchema={loginValid}
    onSubmit={values => {
      props.updateCurrentStep('stepnext');
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <div className="w-9/12 mx-auto">
        <label className="">
          <p className="text-lg text-black mb-1">Mobile number</p>
          <Field
            type="number"
            name="mobileNumber"
            placeholder="Enter Mobile number"
            className="w-full h-[45px] px-4 text- rounded-[15px] border-2 border-green-400"
          />
          {/* {formik.errors ? */}
            <p className="text-right text-[#E25C5C] mt-1">

            {errors.mobileNumber && touched.mobileNumber ? ( errors.mobileNumber
              ) : null }
            </p>
        </label>
        <div className="flex mt-[50px] justify-center gap-4">
          <button className="flex items-center gap-1 border-2 border-green-900 py-[15px] px-[45px] rounded-[15px] w-full">
            <FcIcons.FcGoogle />
            Continue with Google
          </button>

          <button
            type="submit"
            value="Verify with Mobile number"
            className="text-white bg-green-900 py-[15px] px-[50px] rounded-[15px] w-full">Verify with Mobile number</button>
        </div>
        </div>
      </Form>
    )}
    </Formik>
  );
};

export default UserMobileNumber;
