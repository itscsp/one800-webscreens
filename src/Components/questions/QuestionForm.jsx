import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";



const QuestionForm = () => {
  const [dropActive, SetdropActive] = useState(false);
  const [dropActiveData, SetdropActiveData] = useState("category 1")

  const handleClick = (arg) => {
    SetdropActiveData(arg)
    SetdropActive(!dropActive)
  }

  const AskQuestion = Yup.object().shape({
    question_title: Yup.string()
      .min(10, "Your Title is too short")
      .max(90, "Your Title is too long")
      .required("Your Title is required"),
    question_description: Yup.string()
      .min(10, "Your description is too short")
      .max(500, "Your description is too long")
      .required("Your Title descriptione is required"),
  });

  return (
    <Formik
      initialValues={{
        question_title: "",
        question_description: "",
      }}
      validationSchema={AskQuestion}
    >
      {({ errors, touched }) => (
        <Form>

          <label className="">
            <p className="text-lg text-black mb-1">Choose Category</p>

            <div onClick={() => {SetdropActive(!dropActive)}} className="w-1/2 md:w-5/12 h-[45px] px-4  rounded-[10px] border-2 border-green-400 flex justify-between items-center">
              <span>
                {dropActiveData}
              </span>
              <img width={24} className={` ${dropActive && 'rotate-180'}`}  src="/assets/videoPlayer/ChevronDown.svg" alt="" />
            </div>

            {dropActive &&
              <div className="w-5/12 rounded-[10px] mt-2 shadow-[-2px_6px_15px_10px_#e8f4f27a]" >
                <ul className="text-center">
                  <li onClick={() => handleClick("Category 1")} className="px-4 py-3 hover:bg-green-400">Category 1</li>
                  <li onClick={ () => handleClick("Category 2")} className="px-4 py-3 hover:bg-green-400">Category 2</li>
                  <li onClick={ () => handleClick("Category 3")} className="px-4 py-3 hover:bg-green-400">Category 3</li>
                  <li onClick={ () => handleClick("Category 4")} className="px-4 py-3 hover:bg-green-400">Category 4</li>
                  <li onClick={ () => handleClick("Category 5")}  className="px-4 py-3 hover:bg-green-400">Category 5</li>
                </ul>
              </div>
            }


          </label>


          <label className="mt-[20px]">
            <p className="text-lg text-black mb-1 mt-[50px]">Question Title </p>
            <Field
              type="text"
              name="question_title"
              placeholder="Add your question title"
              className="w-full h-[45px] px-4 text- rounded-[10px] border-2 border-green-400"

            />

            <p className="text-right text-[#E25C5C] mt-1">
              {errors.question_title && touched.question_title
                ? errors.question_title
                : null}
            </p>
          </label>


          <label className="mt-[20px]">
            <p className="text-lg text-black mb-1 mt-[50px]">
              Question Description{" "}
            </p>
            <Field
              as="textarea"
              name="question_description"
              placeholder="Describe your question"
              className="w-full h-[200px] p-4 text- rounded-[10px] border-2 border-green-400"
            />
            <p className="text-right text-[#E25C5C] mt-1">
              {errors.question_description && touched.question_description
                ? errors.question_description
                : null}
            </p>
          </label>


          <div className="mt-[50px]">
            <input
              type="submit"
              className=" gap-1 border-2 border-green-900 bg-green-900 text-white py-[10px] px-[45px] rounded-[15px] w-45 text-center"
              value="Submit your question"
            />

          </div>


        </Form>
      )}
    </Formik>
  );
};

export default QuestionForm;
