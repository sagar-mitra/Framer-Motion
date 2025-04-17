import React from "react";
import techIcons from "../techIcons";
import MarqueeItems from "./MarqueeItems";

const Marquee = () => {
  
  return (
    <div className=" w-[80%]  overflow-x-hidden">
      <MarqueeItems techIcons={techIcons} />
    </div>
  );
};

export default Marquee;
