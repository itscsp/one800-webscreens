import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export const Comment = () => {
  return (
    <div className="py-12">
      <div className="flex items-center gap-2">
        <img src="/assets/videoPlayer/Comments.svg" alt="" />
        <p className="text-xl font-semibold text-green-900">Comments 21</p>
      </div>
      <div className="flex items-center mt-6 gap-x-2">
        <img className="w-[42px]" src="assets/loginImg/avathar6.svg" alt="" />
        <form action="" className="w-full">
          <input
            className="w-full h-[70px] px-4 text- rounded-[15px] border-2 border-green-400"
            type="text"
          />
        </form>
      </div>
      <div className="flex gap-3 justify-start">
        <img
          className="w-[42px]"
          src="assets/loginImg/avathar6.svg"
          alt=""
        />

        <div className="mt-4 gap-x-2 flex">
          <div>
            <p className="inline">Bala_65y</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates enim ad, placeat ipsum laudantium assumenda at
              voluptatibus praesentium iusto provident?
            </p>
            <span>2 months ago</span>
          </div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};
