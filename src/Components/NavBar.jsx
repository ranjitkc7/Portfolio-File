import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react";
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav
      className="pt-[10px] px-[0.8rem] md:px-[2rem] bg-[#03132a] h-[3rem] md:h-[4rem] flex items-start]
     justify-between text-white border-b-2 border-slate-300"
    >
      <div>
        <img
          className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] bg-white rounded-[50%] "
          src="my1144.png"
          alt="error"
        />
      </div>
      <ul className="hidden md:flex gap-[2rem] pt-[0.6rem] text-[1.1rem] font-[600]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Page</a>
        </li>
      </ul>
      <button className="bg-[#fca311] hidden md:flex  items-center justify-center
      mb-[12px] px-3  text-black rounded-[12px] text-[1.1rem] font-[700]">
        Contact
      </button>
      <button className="flex md:hidden mt-1"
       onClick={() => setNavbar(!navbar)}>
        <RxHamburgerMenu className="text-[1.5rem] " />
      </button>
    </nav>
    <div>
    {navbar && (
     <div className="flex relative ">
        <div className="h-[35rem] flex absolute right-0  w-[20rem] z-20 bg-black text-white">
        <ul className="flex flex-col pt-[0.6rem] pl-[1rem] text-[1.1rem] font-[600]">
          <li >
            <a  href="#">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
        </ul>
      </div>
     </div>
    )}
  </div>
    </div>
  );
};

export default NavBar;
