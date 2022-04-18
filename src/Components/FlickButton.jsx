import React, { useState } from "react";

const FlickButton = ({item, index}) => {
    const [active, setActive] = useState(false)

  return (

    <div className="mr-2" key={index}>
      <button
      onClick={() => setActive(true)}
        className={`bg-green-900 p-2.5 text-white rounded-[9px] border-2 hover:border-green-900 hover:bg-white hover:text-green-900 ${active ? 'text-green-900 bg-white' : null}`}
      >
        {item}
      </button>
    </div>
  );
};

export default FlickButton;
