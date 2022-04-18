import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import VideoGrid from '../Components/VideoGrid'
import VideoSlickGrid from '../Components/VideoSlickGrid'

const Home = () => {
  const sliderSettings = {
    arrows: true,
    slidesToShow: 3.01,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 2.9,


        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2.9,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.9,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  }
  return (
<div className=' bg-grey-300'>
<div className="container m-auto pl-4 lg:pl-12 overflow-hidden homeSlider pt-[60px]">
      <div className="flex justify-between items-center pr-10 pb-[25px]">
        <h1 className='text-2xl'>Featured Fixes</h1>
        <button className='text-green-900 font-bold text-[1.1rem]'>
          see more
        </button>
      </div>

      <Slider {...sliderSettings}>
          <VideoSlickGrid   />
          <VideoSlickGrid   />
          <VideoSlickGrid   />
          <VideoSlickGrid   />
          <VideoSlickGrid   />
      </Slider>

    </div>
    <div className="container m-auto pl-4 lg:pl-12 overflow-hidden homeSlider bg-grey-300 pt-[60px]">
      <div className="flex justify-between items-center pr-10 pb-[25px]">
        <h1 className='text-2xl'>Trending Fixes</h1>
        <button className='text-green-900 font-bold text-[1.1rem]'>
          see more
        </button>
      </div>
      <Slider {...sliderSettings}>
          <VideoSlickGrid   />
          <VideoSlickGrid   />
          <VideoSlickGrid    />
          <VideoSlickGrid   />
          <VideoSlickGrid   />
      </Slider>

    </div>

    <div className="container m-auto px-4 xl:px-12 overflow-hidden homeSlider bg-grey-300 pt-[60px]">
      <div className="flex justify-between items-center  pb-[25px]">
        <h1 className='text-2xl'>Recommended Videos</h1>
        <button className='text-green-900 font-bold text-[1.1rem]'>
          see more
        </button>
      </div>
      <div className="grid gap-[15px] lg:gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <VideoGrid   />
          <VideoGrid    />
          <VideoGrid    />
          <VideoGrid    />
          <VideoGrid    />

          <VideoGrid   />
          <VideoGrid    />
          <VideoGrid    />
          <VideoGrid    />
          <VideoGrid    />

          <VideoGrid   />
          <VideoGrid    />
          <VideoGrid    />
          <VideoGrid    />
          <VideoGrid    />
      </div>
    </div>
</div>



  )
}

export default Home