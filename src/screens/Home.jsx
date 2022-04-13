import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import VideoPlayer from '../Components/VideoPlayer'

const Home = () => {
  const sliderSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,


        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
  }
  return (

    <div className="container m-auto pl-12 overflow-hidden homeSlider">
      <Slider {...sliderSettings}>
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
      </Slider>

    </div>

  )
}

export default Home