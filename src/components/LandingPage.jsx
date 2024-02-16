import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1 rounded-tr-3xl rounede-tl-3xl">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1],
                      repeat: Infinity,
                    duration: 1 }}
                    className="mr-[1vw]  rounded-md h-[5vw] top-[1vw] relative"
                  >
                    <img className="" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>
                )}
                <h1 className="uppercase pt-[vw] text-[7.5vw] leading-[5.5vw] tracking-tighter font-['Founders_Grotesk'] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm capitalize ">
            Start the project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 flex items-center justify-center rounded-full ">
            <FaArrowUpRightFromSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
