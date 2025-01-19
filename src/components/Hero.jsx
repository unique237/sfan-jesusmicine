import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/** left **/}
        <div className="w-full sm:w-2/5 flex items-center justify-center py-10 sm:py-0">
            <div className='text-[#C0392B]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base text-blue-500'>SANCTUATY FOR ALL NATIONS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                    LA JESUSMICINE
                </h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base text-blue-500'>Le Père King Joshua.</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/**right side */}
        <img className='w-full sm:w-3/5 h-[60vh]' src={assets.carousel_1} alt="" />
    </div>
  )
}

export default Hero