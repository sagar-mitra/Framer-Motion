import React, { useState } from "react";
import NavItems from "./Components/NavItems";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    duration: 0,
  });
  return (
    <div className="flex justify-center items-center py-2 h-screen">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative bg-white border-2 border-s-black w-[50%] hidden md:flex px-3 py-2 rounded-full items-center justify-between lg:px-5 lg:py-3 cursor-pointer"
      >
        <NavItems setPosition={setPosition}>Home</NavItems>
        <NavItems setPosition={setPosition}>About</NavItems>
        <NavItems setPosition={setPosition}>Projects</NavItems>
        <NavItems setPosition={setPosition}>Education</NavItems>
        <NavItems setPosition={setPosition}>Contact</NavItems>
        <AnimatePresence>
          {position.opacity > 0 && (
            <motion.span
              key="highlight"
              animate={{ ...position }}
              initial={{ left: position.left }}
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.3 } }}
              className="absolute z-0 h-13 bg-black rounded-full"
              transition={{type: "spring", bounce: 0.4}}
            />
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Navbar;
