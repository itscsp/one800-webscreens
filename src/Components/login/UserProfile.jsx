import React from 'react'

const UserProfile = (props) => {


  let choise = ['Product Repair','Product Repair','fngfn Repair', 'fnfnfgnng','Product Repair','Product Repair','Product Repair', 'Product Repair','Product Repair','Product ','Product ', ' Repair']

  let submitHandler = (arg) => {
    props.updateCurrentStep(arg);
  };

  return (
    <div className='w-9/12 mx-auto'>
      <div className="singleAvathar flex flex-col items-center justify-center">
        <img className='text-center' width='60px' src="/assets/loginImg/avathar6.svg" alt="" />
        <p className="font-semibold">Name Something</p>
        <p className="text-grey-200">Username</p>
        <p className="text-grey-200">9874563210</p>
      </div>
      <div className="mt-[30px] flex flex-wrap gap-3  justify-center">
        {choise.map((item, index) => {
          return (<button key={index} className="gap-1 border border-green-900 hover:bg-green-900  py-[15px] px-[25px] rounded-[15px]  text-center text-green-900 hover:text-white">{item}</button>)
        })}
      </div>

      <div className="flex mt-[50px] justify-center gap-4 pb-10">
        <button
          onClick={() => {
            submitHandler("stepback");
          }}
          className="w-full gap-1 border-2 border-green-900 py-[15px] px-[45px] rounded-[15px] w-45 text-center"
        >
          Back
        </button>

        <button
          onClick={() => {
            submitHandler("stepnext");
          }}
          className="w-full gap-1 border-2 border-green-900 bg-green-900 py-[15px] px-[45px] rounded-[15px]  text-center text-white"
        >
          Take me to One800
        </button>
      </div>

    </div>
  )
}

export default UserProfile