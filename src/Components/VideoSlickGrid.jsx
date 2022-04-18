import React from "react";
import { AiFillEye } from "react-icons/ai";

const VideoSlickGrid = () => {
  return (

      <div className='mr-[15px] lg:mr-[30px]'>
        <img src="/assets/videoImage/vedioImg1.png" alt="" />
        <div className="shortDesc  md:flex justify-between p-[15px] bg-blue-900 rounded-b-[20px]">
          <div className="user flex justify-start md:w-1/2 gap-2.5">
            <img
              className="border-2 border-white rounded-full"
              src="/assets/videoImage/videouser1.png"
              alt=""
            />
            <span className="text-white">Ram kumar something</span>
          </div>
          <div className="duration flex justify-end md:w-1/2 gap-2.5">
            <span className="text-right text-white">5 min ago</span>
            <span className="flex justify-end items-center  text-white">
              <AiFillEye color="#fff" /> 1657
            </span>
          </div>
        </div>
        <p>
          Half dim Backlight (got black spot at the bottom of the screen)Half
          dim Backlight (got black spot at the bottom of.
        </p>
      </div>

  );
};

export default VideoSlickGrid;
