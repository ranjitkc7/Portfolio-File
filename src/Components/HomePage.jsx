import React from "react";
import ImageSec from "./ImageSec";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex gap-[6rem] text-[white] bg-[#14213d] h-[100vh]">
      <section className="flex flex-col pt-[8rem] pl-[4rem]">
        <p className="font-[550] text-[1.1rem] ">
          "Bringing ideas to life through code and design."
        </p>
        <h1 className="font-[700] text-[3rem] text-[#fca311]">Hello,</h1>
        <h1 className="font-[800] text-[3.1rem] mt-[-20px]">
          I Am Ranjit K.C.
        </h1>
        <p className="font-[600] text-[2rem] text-slate-100">
          Frontend Developer
        </p>
        <p className="font-[550] text-[1.1rem] mt-[-4px]">
          "Where creativity meets functionality—welcome to my portfolio!"
        </p>
        <button className="bg-[#fca311] w-fit flex  gap-4  items-center mb-[12px] mt-[1rem] px-3  text-black rounded-[9px] text-[1.1rem] font-[700]">
          Hire ME
          <div className="bg-white px-2 py-2 m-1 rounded-[50%]">
          <FaArrowRight />
          </div>
        </button>
      </section>
      <section>
        <ImageSec />
      </section>
    </div>
  );
};

export default HomePage;
