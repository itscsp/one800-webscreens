import React, { useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MainIcons from './MainIcons'






const data = [
  {
    title : "Mobile",
    icon: "assets/icons/mobile.svg",
  },
  {
    title : "Computer",
    icon: "assets/icons/Laptop.svg",
  },
  {
    title : "TV",
    icon: "assets/icons/Retro TV.svg",
  },
  {
    title : "AC",
    icon: "assets/icons/Air Conditioner.svg",
  },
  {
    title : "Refrigerator",
    icon: "assets/icons/Fridge.svg",
  },
  {
    title : "Washing Machine",
    icon: "/assets/icons/Washing Machine.svg",
  },
  {
    title : "Gaming",
    icon: "assets/icons/Game Controller.svg",
  },
  {
    title : "Camera",
    icon: "assets/icons/SLR Back Side.svg",
  },
  {
    title : "Audio",
    icon: "assets/icons/Headphones.svg",
  },
  {
    title : "Kitchen",
    icon: "assets/icons/Blender.svg",
  },
  {
    title : "Wearable",
    icon: "assets/icons/Apple Watch.svg",
  },
  {
    title : "Smart Home",
    icon: "assets/icons/Smart Home Connection.svg",
  },
  {
    title : "Printer",
    icon: "assets/icons/Print.svg",
  },
  {
    title : "Mobile",
    icon: "assets/icons/mobile.svg",
  },
  {
    title : "Mobile",
    icon: "assets/icons/mobile.svg",
  },
  {
    title : "Mobile",
    icon: "assets/icons/mobile.svg",
  },
  {
    title : "Mobile",
    icon: "assets/icons/mobile.svg",
  },
  {
    title : "Mobile",
    icon: "assets/icons/mobile.svg",
  },
  {
    title : "Mobile",
    icon: "/assets/icons/mobile.svg",
  },
  {
    title : "Mobile",
    icon: "assets/icons/mobile.svg",
  },
  {
    title : "Mobile",
    icon: "assets/icons/mobile.svg",
  },


]

const Mainheader = () => {


  const sliderSettings = {
    arrows: false,
    slidesToShow: 12,
    slidesToScroll: 6,
    infinite: false,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 12,


        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='bg-green-400 pt-[40px] pb-[35px]'>
      <Slider {...sliderSettings}>
      {

        data.map( (item,index) => {
          return(
            <div key={index} className='focus:outline-none' >
              <MainIcons item={item} />
            </div>
          )
        })
      }
      </Slider>
    </div>
  )
}

export default Mainheader