import Image from 'next/image'
import React from 'react'
import {Data} from '../../data'
import PageSlider from '../PageSlider'
import Slider from "react-slick";

const HeroSliderSection = () =>{
  return (
    <div className=' p-10 sm:pt-4 pt-96 '>
     <div className='flex justify-between items-center'>
        <span className='sm:text-3xl text-sm text-md tracking-widest'>OUR CATEGORIES</span>
        <div className='flex items-center gap-12'>
            <button ><Image src={'/assets/logos/leftArrow.svg'} width={15} height={15} /></button>
            <button><Image src={'/assets/logos/rightArrow.svg'} width={15} height={15}/></button>
        </div>
     </div>
     <div>
          <PageSlider  data={Data}/>
     </div>
     <div className='flex justify-center items-center flex-col mt-10 gap-10'>
        <span className='sm:text-4xl text-xl text-center font-medium tracking-widest'>ONE PLATFORM FOR ALL PREMIUM LISTINGS</span>
        <span className='sm:text-3xl text-lg text-center tracking-widest'>UNLIMITED POTENTIAL</span>
     </div>
    </div>
  )
}

export default HeroSliderSection