import React from "react";
import { AiFillEye } from "react-icons/ai";



const VideoGrid = ({ item, height }) => {

  let thumnailcontainer ={
    height: height,
    background:"url("+(item.videoThumnail)+")",
    "background-size":"cover",
    "background-position":"center"
  }

  return (
    <div>

      <div style={thumnailcontainer} className="rounded-t-[20px]">

      </div>
      <div
        className={`shortDesc md:flex justify-between p-[15px] ${
          item.type === "Fix" ? "bg-blue-900" : "bg-purple-900"
        } rounded-b-[20px]`}
      >
        <div className="user">
          <img
            width="30px"
            height="30px"
            className="border-2 border-white rounded-full inline-block mr-2"
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
      <p>{item.description}</p>
    </div>
  );
};

export default VideoGrid;
