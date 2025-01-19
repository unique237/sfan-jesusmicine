import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [visible, setVisible] = useState(false);

  return (
    <nav className='flex items-center justify-between py-5 font-medium z-10'>
        
        <NavLink to='/'>
            <img src={assets.sfan_logo} className='w-36' alt="" />
            </NavLink>

        <ul className='hidden sm:flex gap-5 text-md text-gray-700'>
            <NavLink to='/jésusmicine' className='flex flex-col items-center gap-1'>
                <p>
                   JESUSMICINE 
                </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/programmes' className='flex flex-col items-center gap-1'>
                <p>
                   PROGRAMMES HEBDOMADAIRES
                </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/actuatés' className='flex flex-col items-center gap-1'>
                <p>
                   ACTUALITES ET EVENEMENTS
                </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/médiathèque' className='flex flex-col items-center gap-1'>
                <p>
                   MEDIATHEQUE 
                </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/églises' className='flex flex-col items-center gap-1'>
                <p>
                   EGLISES SFAN 
                </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>
                   A PROPOS 
                </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>
                   CONTACT 
                </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/** side bar menu for smaller screens **/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() =>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer bg-blue-600'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p className='text-white'>Retour</p>
                </div>
                <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/'>SFAN</NavLink>
                <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/jesusmicine'>JESUSMICINE</NavLink>
                <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/programmes'>PROGRAMMES HEBDOMADAIRES</NavLink>
                <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/actuatés'>ACTUALITES ET EVENEMENTS</NavLink>
                <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/médiathèque'>MEDIATHEQUE</NavLink>
                <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/églises'>EGLISES SFAN</NavLink>
                <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/about'>A PROPOS</NavLink>
                <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar