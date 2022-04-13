import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const UserUserName = (props) => {
  let submitHandler = (arg) => {
    props.updateCurrentStep(arg);
  };

  const loginValid = Yup.object().shape({
    userName: Yup.string()
      .min(3, "Enter Username Correct")
      .max(50, "Enter Username Correct")
      .required("Enter Mobile number"),

  });

  return (
    <Formik
      initialValues={{
        userName: " ",
      }}
      validationSchema={loginValid}
      onSubmit={(values) => {
        console.log(values);
        props.updateCurrentStep("stepnext");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="w-9/12 mx-auto">
            <label className="">
              <p className="text-lg text-black mb-1">Choose Username</p>
              <Field
                type="text"
                name="userName"
                placeholder="User Name"
                className="w-full h-[45px] px-4 text- rounded-[15px] border-2 border-green-400"
              />
              <p className="text-right text-[#E25C5C] mt-1">
              {errors.userName && touched.userName ? ( errors.userName) : null }
              </p>
            </label>

            <div className="avathars w-1/2 mx-auto">
              <p className="text-lg text-black mb-1 text-center mb-[20px]">
                Choose Your Avathar
              </p>
              <div className="grid grid-cols-3 gap-5 justfiy-center items-center">
                <img width="65px" src="assets/loginImg/avathar6.svg" alt="" />
                <img width="65px" src="assets/loginImg/avathar5.svg" alt="" />
                <img width="65px" src="assets/loginImg/avathar4.svg" alt="" />
                <img width="65px" src="assets/loginImg/avathar3.svg" alt="" />
                <img width="65px" src="assets/loginImg/avathar2.svg" alt="" />
                <img width="65px" src="assets/loginImg/avathar1.svg" alt="" />
              </div>
            </div>

            <div className="flex mt-[50px] justify-center gap-4">
              <button
                onClick={() => {
                  submitHandler("stepback");
                }}
                className="w-full gap-1 border-2 border-green-900 py-[15px] px-[45px] rounded-[15px] w-45 text-center"
              >
                Back
              </button>

              <button
                type="submit"
                className="w-full gap-1 border-2 border-green-900 bg-green-900 py-[15px] px-[45px] rounded-[15px]  text-center text-white"
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserUserName;
