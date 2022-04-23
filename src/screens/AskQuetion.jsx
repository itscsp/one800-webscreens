import React from 'react'
import QuestionForm from '../Components/questions/QuestionForm'

const AskQuetion = () => {
  return (
    <div className='container m-auto bg-white'>

    <div className='pt-[82px] h-[100vh]  grid gap-5 md:gap-1 grid-cols-12 justify-center'>

      <div className="steps col-span-12 xl:col-span-7 ">
        <div className=" w-11/12 lg:w-10/12 xl:w-9/12 mx-auto">
            <QuestionForm />
        </div>
      </div>


      <div className="bg col-span-12  xl:col-span-5 justify-self-center">
        <img width="400px" src="assets/ask question/ask.svg" alt="" />
        <div className="flex flex-col mx-10 md:mx-0 md:flex-row gap-5 mt-[30%] mb-5">
          <img className='cursor-pointer' src="assets/loginImg/appleButton.svg" alt="" />
          <img className='cursor-pointer' src="assets/loginImg/googleButton.svg" alt="" />
        </div>
        <p className='text-center text-green-900'>Download the App for a better experience</p>
      </div>

    </div>

</div>
  )
}

export default AskQuetion