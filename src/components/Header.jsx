import React from 'react'

export const Header = () => {
  return (
    <section className='flex justify-around items-center w-full'>

        <div className='flex items-center' >
          <img className='w-10' src="assets/logo.png" alt="logo" />
          <p className='text-button-bg  font-bold text-2xl'>Cars<span className='text-black'>Spot</span></p>
        </div>

        <div className='flex items-center z-10'>
          <a href="#galery">
            <p className='p-6'>Galeria zdjęć</p>
          </a>

          <a href="#faq">
            <p>FaQ</p>
          </a>
        </div>
      
        <button className='h-12 pl-3 pr-3 bg-button-bg rounded-xl text-white font-bold text-base z-10'>Zadzwoń do nas</button>
    
      </section>
  )
}
