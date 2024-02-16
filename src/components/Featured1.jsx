import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Featured1 = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-full py-20 rounded-tr-3xl rounded-tl-3xl">
      <div className="w-full px-10 border-t-[1px] border-zinc-700 pb-20">
        <div className="px-20 ">
          <div className="cards w-full flex gap-10 mt-20">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="cardcontainer relative w-1/2 h-[70vh] "
            >
              <h1 className="absolute -translate-x-1/2 left-full -translate-y-1/2 top-1/2 text-5xl bg-[#CDEA68]">
                <h1 className="absolute -translate-x-1/2 right-full flex -translate-y-1/2 top-1/2 text-5xl overflow-hidden text-semibold text-[#CDEA68]">
                  {"TRAWA".split("").map((item, index) => (
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
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between font-['Neue Montreal'] tracking-tight">
                <button className="uppercase rounded-full border px-5 mt-5 py-2">
                  Brand identity
                </button>
                <button className="uppercase rounded-full border px-5 mt-5 py-2">
                  design research
                </button>
                <button className="uppercase rounded-full border px-5 mt-5 py-2">
                  investor deck
                </button>
              </div>
            </div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="cardcontainer relative w-1/2 h-[70vh] "
            >
              <h1 className="absolute translate-x-1/2 right-full -translate-y-1/2 top-1/2 text-5xl bg-[#CDEA68]">
                <h1 className="absolute translate-x-1/2 left-full -translate-y-1/2 top-1/2 flex text-5xl overflow-hidden text-[#CDEA68]">
                  {"PREMIUM BLEND".split("").map((item, index) => (
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
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between font-['Neue Montreal'] tracking-tight">
                <button className="border uppercase rounded-full mt-5 px-5 py-2">
                  branded template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <button className="uppercase border rounded-full mt-20 px-3 py-3 font-['Neue Montreal'] tracking-tight">
          view all case studies
        </button>
        <div className="w-10 h-10 rounded-full border-[1px] bg-zinc-700 mt-20 flex justify-center items-center">
          <button>
            <FaArrowUpRightFromSquare />
          </button>
        </div>
      </div>
      <div className="border-b-[1px] px-5 mt-20  pb-5 border-zinc-100">
        <h1 className="font-['Neue Montrea'l tracking-tight leading-none text-[5vw]">
          Client's reviews
        </h1>
      </div>

      <div className="w-full flex gap-10 items-center justify-end">
        <div className="w-1/2 flex  ">
          <button className="mt-[-290px] font-['Neue Montreal'] tracking-tight px-10">
            Karman Vantures
          </button>
          <button className="mt-[-290px] font-['Neue Montreal'] tracking-tight px-10">
            Services:
          </button>
        </div>
        <div className="">
          <h3 className="mt-5 font-['Neue Montreal'] tracking-tight text-xl">
            Prathamesh Pote
          </h3>
          <div className="mt-5 w-1/2">
            <img
              className="h-20 w-20 "
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
          </div>
          <div className="flex justify-end mt-10 items-center ">
            <p>
              They were transparent about the time and the stages of the
              project. <br />
              The end product is high quality, and I feel confident about how
              they <br /> were handholding the client through the process. I
              feel like I can introduce them to
              <br /> someone who needs to put a sales deck together from
              scratch, and they would be <br /> able to handhold the client
              experience from 0 to 100 very effectively from story to design.
              5/5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured1;
