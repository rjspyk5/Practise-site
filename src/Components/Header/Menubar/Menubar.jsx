import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


export const Menubar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <>
    <div>
    <div className='text-white flex justify-between md:mx-10  py-2 px-4 bg-gray-600 md:rounded-[5px]' >
        
<div><h1>Logo</h1></div>


<div className={`${toggle? "transition-all ":"hidden"} flex flex-col  mt-[43px] pb-[30px] md:pb-0 md:block md:m-0 text-center w-96  duration-700 ease-linear`}>
    
<NavLink to="/"className="no-underlie mx-2 block md:inline-block hover:bg-[gray]">Home</NavLink>
<NavLink to="/services" className="no-underlie  mx-2  block md:inline-block hover:bg-[gray]">Services</NavLink>
<NavLink to="/contact" className="no-underlie mx-2 block md:inline-block hover:bg-[gray]">Contact</NavLink>
<NavLink to="/about" className="no-underlie mx-2 block md:inline-block hover:bg-[gray]">About</NavLink>
</div>

<div className='md:hidden'>
    {toggle? <button onClick={()=> settoggle((prev)=>!prev)} ><AiOutlineClose /></button> : <button  onClick={()=> settoggle((prev)=>!prev)} ><AiOutlineMenu  /> </button> }


</div>

    </div>
    </div>
    </>
  )
}
