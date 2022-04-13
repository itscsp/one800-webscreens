import React, { useState } from 'react'
import StepNav from '../Components/login/StepNav';
import UserMail from '../Components/login/UserMail';
import UserMobileNumber from '../Components/login/UserMobileNumber';
import UserProfile from '../Components/login/UserProfile';
import UserUserName from '../Components/login/UserUserName';

const WelcomeScreen = () => {
  const labelArray = [ 'Step 1', 'Step 2', 'Step 3', 'Step 4' ]
  const [currentStep, updateCurrentStep] = useState(0);


  const updateStep = (arg) => {
    if(arg === 'stepback'){

      updateCurrentStep(currentStep-1)
    }

    if(arg === 'stepnext'){

      updateCurrentStep(currentStep+1)
    }
  }
  let componentDidMount = (arg) => {
    if(arg === true){
      document.body.classList.add("bg-grey-300");
    }else{
      document.body.classList.remove("bg-grey-300");
    }
  }

  if(window.location.pathname === '/register'){
    componentDidMount(true)
  }else{
    componentDidMount(false)
  }

  return (
    <div className='container m-auto '>

        <div className='pt-[82px] h-100%  grid grid-cols-12 px-12'>

          <div className="steps col-span-7 ">
            <div className='py-[62px]'>
              <StepNav labelArray={labelArray} currentStep={currentStep}></StepNav>
            </div>
            {currentStep === 0 && <UserMobileNumber updateCurrentStep={updateStep} />}
            {currentStep === 1 && <UserMail updateCurrentStep={updateStep} />}
            {currentStep === 2 && <UserUserName updateCurrentStep={updateStep}  />}
            {currentStep === 3 && <UserProfile updateCurrentStep={updateStep} />}

          </div>


          <div className="bg col-span-5 ">
            <img src="assets/loginImg/login-bg.svg" alt="" />
            <div className="flex gap-5 mt-[10%] mb-5">
              <img className='cursor-pointer' src="assets/loginImg/appleButton.svg" alt="" />
              <img className='cursor-pointer' src="assets/loginImg/googleButton.svg" alt="" />
            </div>
            <p className='text-center text-green-900'>Download the App for a better experience</p>
          </div>

        </div>

    </div>
  )
}

export default WelcomeScreen