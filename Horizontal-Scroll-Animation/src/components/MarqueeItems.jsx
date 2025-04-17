import React from 'react'
import { motion } from "framer-motion";

const MarqueeItems = ({techIcons}) => {
  return (
    <div className="flex py-12 fadeGradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0"
          whileHover={{}}
        >
          {techIcons.map((icons, index) => {
            return <img className="h-12 px-10" src={icons} key={index} />;
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0"
        >
          {techIcons.map((icons, index) => {
            return <img className="h-12 px-10" src={icons} key={index} />;
          })}
        </motion.div>
      </div>
  )
}

export default MarqueeItems