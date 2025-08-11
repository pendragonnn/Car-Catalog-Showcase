'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-36 sm:px-16 px-6'>
        <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
          Find, Book, or rent a car — quickly and easily!
        </h1>

        <p className='text-[27px] text-gray-500 font-light mt-5'>Streamline your car rental experience with our effortless booking process</p>

        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-orange-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className='xl:flex[1.5] flex justify-end items-end xl:h-full h-[590px] z-0'>
        <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
          <Image src="/hero.png" alt='hero' fill className='object-contain' />
          <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden bg-[url('/hero-bg.png')]"></div>

        </div>

      </div>
    </div>
  )
}

export default Hero