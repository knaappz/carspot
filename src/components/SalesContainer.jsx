import React from 'react'

export const SalesContainer = () => {
  return (
    <section className='2xl:p-36 xl:p-36 p-12 flex flex-col gap-10 h-screen'>
        <div className='uppercase font-bold sm:text-7xl text-5xl font-babas text-heading-txt z-10'>
          <h1>sprzedajemy samochody</h1>
          <h1>z europy</h1>
        </div>
        
        <div className='font-normal z-1 font-roboto text-base'>
          <p className=''>Kup komfortowy pojazd, aby każda podróż</p> 
          <p>była wyjątkowym przeżyciem.</p>
        </div>

        <div className='flex gap-8 z-10 flex-wrap'>
          <button className='h-12 pl-3 pr-3 bg-button-bg rounded-xl text-white font-bold text-base'>
            Zobacz zdjęcia
          </button>
          
          <button className='h-12 pl-3 pr-3 bg-transparent border-2 border-button-bg rounded-xl text-button-bg font-bold text-base'>
            Zadzwoń do nas
          </button>
        </div>

        <img className='absolute md:top-96 top-3/4 right-0 w-4/5 lg md:w-2/3 z-10' src="assets/black-cars.png" alt="" />
        <img className='absolute -top-3 w-0 2xl:w-2/5 xl:w-2/5 lg:right-28 lg:w-1/2 md:w-3/5 sm:w-0 right-12 z-1' src="assets/Union.png" alt="prr" />
      </section>
  )
}
