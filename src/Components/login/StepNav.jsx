import React from 'react'
import Step from './Step'

const StepNav = (props) => {
  return (
    <>
    <div className='flex justify-center'>
        {props.labelArray.map((item, index) => <Step currentStep={props.currentStep} key={index} id={index} />)}

    </div>
    <p className='text-center mt-[10px] text-green-900'>Enter Mobile Number</p>
    </>
  )
}

export default StepNav