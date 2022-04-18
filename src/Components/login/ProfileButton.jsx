import React, { useState } from "react";

const ProfileButton = ({ item, index }) => {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => setActive(true)}
      key={index}
      className={`gap-1 border border-green-900 hover:bg-green-900  py-[15px] px-[25px] rounded-[15px]  text-center ${
        active ? "text-white" : "text-green-900"} hover:text-white ${
        active ? "bg-green-900" : null
      } `}
    >
      {item}
    </button>
  );
};

export default ProfileButton;
