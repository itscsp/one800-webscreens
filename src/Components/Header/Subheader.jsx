import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Subheader = () => {
  const [flipActive, setFlipActive] = useState({Fixactive:true,Flickactive:false})


  const flipHandler = (arg) => {
    console.log(flipActive.Fixactive, flipActive.Flickactive)
    if(arg == 'flip'){
      setFlipActive({Fixactive:true,Flickactive:false})
    }

    if(arg == 'flick'){
      setFlipActive({Fixactive:false,Flickactive:true})
    }
  }

  return (
    <div className='grid grid-cols-12 items-center px-12 py-4'>
      <div className="col-span-2">
        <div className='bg-green-100 rounded-[10px] inline-block p-[5px]'>
          <div onClick={() => flipHandler('flip')} className={`text-2xl inline-block px-[20px] py-[10px] ${flipActive.Fixactive ? 'bg-green-900 text-white' : 'text-black' } rounded-[10px] leading-6  font-semibold`}>
            Fix
          </div>
          <div onClick={() => flipHandler('flick')}  className={` text-2xl inline-block px-[20px] py-[10px] ${flipActive.Flickactive ? 'bg-green-900 text-white' : 'text-black' } rounded-[10px] leading-6  font-semibold`}>
            Flick
          </div>
        </div>
      </div>
      <div className="col-span-10">
        <p className='text-green-900 text-right text-[20px]'>Applefix koramangala just answered Ram_kumar94’s question   <Link to="/" > <span className='underline underline-offset-4'> Ask your question</span></Link ></p>
      </div>
    </div>
  )
}

export default Subheader