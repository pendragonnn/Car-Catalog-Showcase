'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => { }

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-36 sm:px-16 px-6'>
        <h1 className='2xl:text-[64px] sm:text-[50px] text-[36px] font-extrabold'>
          Find, Book, or rent a car — quickly and easily!
        </h1>

        <p className='text-[27px] text-gray-500 font-light mt-5'>Streamline your car rental experience with our effortless booking process</p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-orange-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen relative overflow-hidden'>
        <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
          <Image src="/hero.png" alt='hero' fill className='object-contain' />
        </div>

        <div className="absolute inset-0 -top-24 xl:-right-1/4 right-0 bg-cover bg-no-repeat -z-10 bg-[url('/hero-bg.png')]"></div>

      </div>

    </div>
  )
}

export default Hero