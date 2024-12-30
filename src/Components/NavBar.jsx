import React from 'react'

const NavBar = () => {
  return (
    <nav className='pt-[10px] px-[2rem] bg-[#03132a] h-[4rem] flex items-start]
     justify-between text-white border-b-2 border-slate-300'>
        <div >
          <img className='h-[3rem] w-[3rem] bg-white rounded-[50%] ' src="my1144.png" alt="error" />
        </div>
        <ul className='flex gap-[2rem] pt-[0.6rem] text-[1.1rem] font-[600]'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Page</a></li>
        </ul>
        <button
        className='bg-[#fca311] mb-[12px] px-3  text-black rounded-[12px] text-[1.1rem] font-[700]'>Contact</button>
    </nav>
  )
}

export default NavBar