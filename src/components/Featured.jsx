import { motion } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full relative py-10 rounded-tr-3xl rounded-tl-3xl">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-6xl font-["Neue Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-20">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="cardcontainer relative w-1/2 h-[70vh] "
          >
            <h1 className="absolute -translate-x-1/2 left-full -translate-y-1/2 top-1/2 text-5xl bg-[#CDEA68]">
              <h1 className="absolute -translate-x-1/2 right-full -translate-y-1/2 top-1/2 flex text-5xl overflow-hidden text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={hover ? { y: "0" } : { y: "100%" }}
                transition={{
                  ease: [0.22, 1, 0.36, 1].easeInOut,
                  delay: index * 0.06,
                }}
              >
                {item}
              </motion.span>
            ))}
              </h1>
            </h1>
           
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="cardcontainer relative w-1/2 h-[70vh] "
          >
            <h1 className="absolute translate-x-1/2 right-full -translate-y-1/2 top-1/2 text-5xl bg-[#CDEA68]">
              <h1 className="absolute translate-x-1/2 left-full -translate-y-1/2 top-1/2 flex text-5xl overflow-hidden text-[#CDEA68]"> 
              {"VISE".split("").map((item, index) => (
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={hover ? { y: "0" } : { y: "100%" }}
                transition={{
                  ease: [0.22, 1, 0.36, 1].easeInOut,
                  delay: index * 0.06,
                }}
              >
                {item}
              </motion.span>
            ))}
              </h1>
            </h1>
          
            <div className="w-full h-full rounded-xl  overflow-hidden">
              <img
                className="w-full h-full"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
