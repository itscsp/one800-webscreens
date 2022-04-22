import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";

export const Player = () => {
    const [follow, setFollow] = useState(false);

    let thumnailcontainer ={
      height: "450px",
      background: `url("/assets/videoPlayer/videoimg.png")`,
      "background-size":"cover",
      "background-position":"center"
    }

  return (
    <div className="rounded-[20px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.2)]">
      <div className="title-container px-7 pt-7 pb-4">
        <h1 className="text-lg lg:text-2xl ">
          Five centuries, but also the leap into electronic electronic
          electronicnic electronic electronic into electronic electronic{" "}
        </h1>
      </div>
      <div className="thumnail-container" style={thumnailcontainer}>
      </div>
      <div className="maker-info-container">
        <div className="grid grid-cols-12 justify-between items-center px-7 pt-7 pb-4 gap-y-6 grid-reverse">
          <div className="user-info col-span-12 lg:col-span-5">
            <div className="user flex flex-col xl:flex-row justify-start items-start md:items-center gap-2.5">
              <img
                className="w-[82px] h-[82px]  border-2 border-white rounded-full"
                src="/assets/videoPlayer/userImg.png"
                alt=""
              />
              <div className="flex flex-col items-start md:items-center xl:items-start">
                    <h3>Random_Fix_it_koramangala</h3>
                    <button onClick={() => {setFollow(!follow)}} className={` px-[30px] py-2 text-xl  rounded-[13px] border-2 ${follow ? "bg-grey-300 text-green-900" : "bg-green-900 text-white" }`}>
                        {follow ? "Following" : "Follow"}
                    </button>
              </div>
            </div>
          </div>
          <div className="video-info col-span-12 lg:col-span-7 justify-self-center lg:justify-self-end">
            <ul className="flex gap-6 flex-wrap">
                <li className="text-center">
                    <img width="30px" className="m-auto" src="/assets/videoPlayer/ThumbsUp.svg" alt="" />
                    <span className="text-green-900"> 2.5K</span>
                </li>
                <li className="text-center">
                    <img width="30px" className="m-auto" src="/assets/videoPlayer/ThumbsDown.svg" alt="" />
                    <span className="text-green-900">Dislike</span>
                </li>
                <li className="text-center">
                    <img width="30px" className="m-auto" src="/assets/videoPlayer/Rupee.svg" alt="" />
                    <span className="text-green-900">Tip</span>
                </li>
                <li className="text-center">
                    <img width="30px" className="m-auto" src="/assets/videoPlayer/Share.svg" alt="" />
                    <span className="text-green-900">Share</span>
                </li>
                <li className="text-center">
                    <img width="30px" className="m-auto" src="/assets/videoPlayer/Bookmark.svg" alt="" />
                    <span className="text-green-900">Save</span>
                </li>
                <li className="flex flex-col gap-y-1">
                    <span className="block text-[#797979]"><AiFillEye className="inline" size={30} /> 1593</span>
                    <span>Dec 5, 2021</span>
                </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
