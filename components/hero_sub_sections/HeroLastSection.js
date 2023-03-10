import Image from 'next/image'
import React from 'react'

const HeroLastSection = () => {
  return (
    <div className='h-screen p-10  flex items-center sm:justify-between justify-evenly flex-col mt-10 lg:flex-row'>
     <div className='flex flex-col gap-4 lg:text-justify text-center tracking-[3px]'>
      <Image src={'assets/logos/ZIMOB.svg'} width={400} height={400} />
      <span className='sm:text-3xl text-xl'>ONE SOURCE</span>
      <span className='sm:text-5xl text-2xl'>ENTRY TICKETS</span>
      <span className='font-light'>FOR ALL PREMIUM LISTINGS</span>
     </div>
     <div>
      <Image src={'assets/Images/House.svg'} width={900} height={700} />
      <span className='flex justify-center mt-7 tracking-widest sm:text-xl text-center text-md'>LET YOUR DREAMS FIND YOU</span>
     </div>
    </div>
  )
}

export default HeroLastSection