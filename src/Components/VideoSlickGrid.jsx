import React from "react";
import { AiFillEye } from "react-icons/ai";

const VideoSlickGrid = ({item}) => {
  return (

      <div className='mr-[15px] lg:mr-[30px]'>

        <img src={item.videoThumnail} alt="" />
        <div className={`shortDesc md:flex justify-between p-[15px] ${item.type === "Fix" ? "bg-blue-900" : "bg-purple-900"} rounded-b-[20px]`}>
          <div className="user flex justify-start lg:w-1/2 gap-2.5">
            <img
              className="border-2 border-white rounded-full"
              src={item.ownerimage}
              alt=""
            />
            <span className="text-white">{item.ownername}</span>
          </div>
          <div className="duration flex justify-end  lg:w-1/2 gap-2.5">
            <span className="text-right text-white">{item.duration} min ago</span>
            <span className="flex justify-end items-center  text-white">
              <AiFillEye color="#fff" /> {item.views}
            </span>
          </div>
        </div>
        <p>
          {item.description}
        </p>

      </div>

  );
};

export default VideoSlickGrid;
