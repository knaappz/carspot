import React from 'react'

export const SalesContainer = () => {
  return (
    <section className='p-36 flex flex-col gap-10  h-screen'>
        <div className='uppercase font-bold text-7xl font-babas text-heading-txt'>
          <h1>sprzedajemy samochody</h1>
          <h1>z europy</h1>
        </div>
        
        <div className='font-normal'>
          <p className=''>Kup komfortowy pojazd, aby każda podróż</p> 
          <p>była wyjątkowym przeżyciem.</p>
        </div>

        <div className='flex gap-8'>
          <button className='h-12 pl-3 pr-3 bg-button-bg rounded-xl text-white font-bold text-base'>
            Zobacz zdjęcia
          </button>
          
          <button className='h-12 pl-3 pr-3 bg-transparent border-2 border-button-bg rounded-xl text-button-bg font-bold text-base'>
            Zadzwoń do nas
          </button>
        </div>

        <img className='absolute top-96 right-0 w-2/3  z-10' src="assets/black-cars.png" alt="" />
        <img className='absolute -top-3 w-2/5 right-44 z-1' src="assets/Union.png" alt="prr" />
      </section>
  )
}
