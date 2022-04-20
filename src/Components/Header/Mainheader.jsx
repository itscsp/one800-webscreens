import React, { useState } from 'react'
import Slider from 'react-slick'


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
    title : "WashingMachine",
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
    slidesToScroll: 6,
    infinite: false,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 12.5,


        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 11.5,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow:3.5,
          slidesToScroll: 3
        }
      },


    ]
  }

  return (
    <div className='bg-green-400 pt-5 pb-4  lg:pt-10 lg:pb-8'>
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