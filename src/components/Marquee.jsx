import { motion } from "framer-motion";
import React from "react";


const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[15vw] leading-none font-["Founders_Grotesk"] mb-25 mt-25 uppercase pt-10 mr-10'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[15vw] leading-none font-["Founders_Grotesk"] mb-25 mt-25 uppercase pt-10 '
        >
           we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
