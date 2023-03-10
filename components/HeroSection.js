import React from 'react'
import HerofirstSection from './hero_sub_sections/HerofirstSection'
import HeroSliderSection from './hero_sub_sections/HeroSliderSection'
import HeroLastSection from './hero_sub_sections/HeroLastSection'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-10'>
        <HerofirstSection/>
        <HeroSliderSection/>
        <HeroLastSection/>
    </div>
  )
}

export default HeroSection