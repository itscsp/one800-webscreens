import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
// import {arrowRight} from "/assets/icons/arrowRight.svg"
// import {arrowLeft} from "/assets/icons/arrowLeft.svg"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import FlickButton from '../FlickButton'

  let flickData = [ "Product Repair","Product Repair","Product Repair","Product Repair","Product Repair","Product Repair","Product Repair","Product Repair","Product Repair","Product Repair","Product Repair","Product Repair","Product Repair", ]

const Subheader = () => {
  const [flipActive, setFlipActive] = useState({Fixactive:true,Flickactive:false})

  const sliderSettings = {
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 6,
    infinite: false,
    nextArrow:<IoIosArrowForward size={28} color='#000' className='p-2.5 bg-green-100'/>,
    prevArrow:<IoIosArrowBack size={28} color='#000' />,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 8,


        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7.7,
          slidesToScroll: 6,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow:2.5,
          slidesToScroll: 3
        }
      },
    ]
  }


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
    <div className='md:container m-auto grid grid-cols-12 items-center px-4 md:px-12 py-4 subheader'>
      <div className="hidden md:block col-span-2">
        <div className='bg-green-100 rounded-[10px] inline-block p-[5px]'>
          <div onClick={() => flipHandler('flip')} className={`text-2xl inline-block px-[20px] py-[10px] ${flipActive.Fixactive ? 'bg-green-900 text-white' : 'text-black' } rounded-[10px] leading-6  font-semibold`}>
            Fix
          </div>
          <div onClick={() => flipHandler('flick')}  className={` text-2xl inline-block px-[20px] py-[10px] ${flipActive.Flickactive ? 'bg-green-900 text-white' : 'text-black' } rounded-[10px] leading-6  font-semibold`}>
            Flick
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10">
      {flipActive.Fixactive && <p className='text-green-900 text-right text-[20px]'>Applefix koramangala just answered Ram_kumar94’s question   <Link to="/" > <span className='underline underline-offset-4'> Ask your question</span></Link ></p> }

      {flipActive.Flickactive &&
        <Slider {...sliderSettings}>
          {flickData.map((item,index) => {
            return (
              <FlickButton item={item} index={index} />
            )
          })}
        </Slider>
      }

      </div>
    </div>
  )
}

export default Subheader