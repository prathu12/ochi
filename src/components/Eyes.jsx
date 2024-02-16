import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="absolute w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="relative mt-[25vh] left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 flex gap-10">
          <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className=" w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10"
              >
                <div className="w-6 h-6  rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className=" w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10"
              >
                <div className="w-6 h-6  rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
