import React from 'react'

function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
   <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Welcome to my Porfolio</h1>
   <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Hello my name is Rayane Sahraoui, 
   currently in training at epitech in Marseille I'm looking for a one year internship in September 2022, Here is my CV to take in several knowledge of my background, I also invite you to scrutinize my past projects that 
   I have completed during my training which is at the bottom of the page !</p>
    <a href="src/data/CV_Rayane_Sahraoui.pdf" download className='inline-block px-8 py-3 border border-transparent
     text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
     md:text-md'>My Resume</a>
   </div>
    </div>
  )
}

export default HeroSection