import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FlickButton from "../FlickButton";
import { useDispatch } from "react-redux";
import { changeFlick } from "../../stores/actions/flick";
import { useSelector } from "react-redux";

let flickData = [
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
  "Product Repair",
];

const Subheader = () => {
  const dispatch = useDispatch();
  // const [flipActive, setFlipActive] = useState({
  //   Fixactive: true,
  //   Flickactive: false,
  // });

  const selector = useSelector((state) => {
    return {
      videoType: state.flickType.videoType,
    };
  });

  const sliderSettings = {
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 6,
    infinite: false,
    nextArrow: (
      <IoIosArrowForward
        size={28}
        color="#000"
        className="p-2.5 bg-green-100"
      />
    ),
    prevArrow: <IoIosArrowBack size={28} color="#000" />,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7.7,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const flipHandler = () => {

    if (selector.videoType != "fix") {
      dispatch(changeFlick("fix"))
    }

    if (selector.videoType != "flick") {
      dispatch(changeFlick("flick"))
    }
  };

  return (
    <div className="md:container m-auto grid grid-cols-12 items-center px-4 md:px-12 py-4 subheader">
      <div className="hidden md:block col-span-2">
        <div className="bg-green-100 rounded-[10px] inline-block p-[5px]">
          <div
            onClick={() => flipHandler("fix")}
            className={`text-2xl inline-block px-[20px] py-[10px] ${
              selector.videoType != "flick" ? "bg-green-900 text-white" : "text-black"
            } rounded-[10px] leading-6  font-semibold`}
          >
            Fix
          </div>
          <div
            onClick={() => flipHandler("flick")}
            className={` text-2xl inline-block px-[20px] py-[10px] ${
              selector.videoType == "flick" ? "bg-green-900 text-white" : "text-black"
            } rounded-[10px] leading-6  font-semibold`}
          >
            Flick
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10">
        {selector.videoType != "flick" && (
          <p className="text-green-900 text-right text-[20px]">
            Applefix koramangala just answered Ram_kumar94’s question{" "}
            <Link to="/">
              {" "}
              <span className="underline underline-offset-4">
                {" "}
                Ask your question
              </span>
            </Link>
          </p>
        )}

        {selector.videoType == "flick" && (
          <Slider {...sliderSettings}>
            {flickData.map((item, index) => {
              return <FlickButton item={item} index={index} />;
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Subheader;
