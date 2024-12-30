import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ImageSec = () => {
  return (
    <div className=" pt-[3rem] flex relative">
      <div className="h-[28rem] flex  relative w-[28rem] overflow-hidden bg-[#0e53ae] rounded-[50%]">
        <img
          className="mt-[-2.5rem]  absolute  rotate-3"
          src="my116.png"
          alt="Error"
        />
        <div className="h-[10rem]  w-full absolute bottom-0 bg-white flex items-start pt-[2rem] justify-center">
          <div className=" flex  bg-blue-300 px-4 rounded-lg py-1 w-fit  text-black text-[1.2rem] font-[600]">
            <p></p>
            <p>15+ Complete Projects</p>
          </div>
        </div>
      </div>
      <button
        className="h-[2.5rem] rounded-md flex items-center justify-center
       absolute  left-0 w-[2.8rem] bg-white hover:bg-transparent"
       onClick={() => (window.location.href = "https://www.facebook.com/profile.php?id=100070581900744")}
      >
        <FaFacebook className="text-black text-[2rem] hover:text-[#fca311]" />
      </button>
      <button
        className="h-[2.5rem] rounded-md flex items-center justify-center
       absolute top- right-0 w-[2.8rem] bg-white hover:bg-transparent"
       onClick={() => (window.location.href = "https://www.instagram.com/ran_jit_kc/")}
      >
       <FaInstagramSquare className="text-black text-[2rem] hover:text-[#fca311]"  />
      </button>
      <button
        className="h-[2.5rem] rounded-md flex items-center justify-center
       absolute bottom-0  left-0 w-[2.8rem] bg-white hover:bg-transparent"
       onClick={() => (window.location.href = "https://github.com/ranjitkc7")}
      >
        <FaGithub className="text-black text-[2rem] hover:text-[#fca311]"/>
      </button>
      <button
        className="h-[2.5rem] rounded-md flex items-center justify-center
       absolute bottom-0 right-0 w-[2.8rem] bg-white hover:bg-transparent"
       onClick={() => (window.location.href = "https://www.linkedin.com/in/ranjit-k-c-7209362b4/")}
      >
       <FaLinkedin className="text-black text-[2rem] hover:text-[#fca311]" />
      </button>
    </div>
  );
};

export default ImageSec;
