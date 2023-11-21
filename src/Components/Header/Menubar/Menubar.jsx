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


<div className={`${toggle? "":"hidden"} flex flex-col  mt-[43px] pb-[30px] md:pb-0 md:block md:m-0 text-center w-96 `}>
    
<NavLink to="/"className="no-underlie  mx-2 hover:bg-sky-700 hover: block md:inline-block">Home</NavLink>
<NavLink to="/services" className="no-underlie  mx-2  block md:inline-block">Services</NavLink>
<NavLink to="/contact" className="no-underlie mx-2 block md:inline-block">Contact</NavLink>
<NavLink to="/about" className="no-underlie mx-2 block md:inline-block ">About</NavLink>
</div>

<div className='md:hidden'>
    {toggle? <button onClick={()=> settoggle((prev)=>!prev)} ><AiOutlineClose /></button> : <button  onClick={()=> settoggle((prev)=>!prev)} ><AiOutlineMenu  /> </button> }


</div>

    </div>
    </div>
    </>
  )
}
