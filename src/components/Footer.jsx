import React from 'react'

function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300
    rounded-t-lg'>
        <a href="#hero" className='block text-xl md:text-2xl
        font-semibold'>Rayane</a>
        <a href="mailto:rayane.sahraoui@epitech.eu" className='
        font-regylar text-sm md:text-md hover:text-indigo-500'>rayane.sahraoui@epitech.eu</a>
        <p className='text-xs font-regular mt-2 text-gray-500'>
            © Sahraoui Rayane {new Date().getFullYear()} All rights
            reserved
        </p>
    </div>
  )
}

export default Footer