import React, { useRef } from "react";

const NavItems = ({ children, setPosition }) => {
  const ref = useRef(null);
  return (
    <>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;

          const rectData = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width: rectData.width,
            opacity: 1,
          });
        }}
        className="z-10 relative block text-lg font-semibold px-7 py-3 rounded-full mix-blend-difference text-white"
      >
        {children}
      </li>
    </>
  );
};

export default NavItems;
