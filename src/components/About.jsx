import React from "react";
// import '../Assets/beging.jpg'

const About = () => {
  return (
    <div className="w-full  rounded-tr-3xl rounded-tl-3xl  bg-[#D2DE32]">
      <h1 className='text-[#000] text-[10vh]  py-10 px-10 leading-none font-["Founders_Grotesk"] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="border  border-zinc-500">
        <div className="w-full text-[#000] mt-5">
          <h3>What you can expect :</h3>
          <div className="w-1/2 flex  gap-10 px-20 py-20 text-[3vh]">
            <p>
              {" "}
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.We believe the mix of
              strategy and design (with a bit of coffee) is what makes your
              message clear, convincing, and captivating.
            </p>
          </div>
          <div className="w-full border-t-[1px] flex gap-5 pt-10 mt-20 border-zinc-500 ">
            <div className="w-1/2">
            <h1 className="text-3xl mt-10">Our Approach :</h1>
            <button className="flex uppercase gap-10 items-center mt-10 rounded-3xl bg-zinc-900 text-white px-3 py-3">Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
            </button>
          </div>
            <div className="w-1/2 h-[70vh]  mt-10 rounded-3xl mr-40">
              <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="city" />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
