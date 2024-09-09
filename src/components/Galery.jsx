import React from 'react'

export const Galery = () => {
  return (
    <section id='galery' className='h-screen pl-24 pt-32'>

      <section className='flex flex-col gap-8'>

        <div className="flex flex-col gap-2">
          <h3 className='text-button-bg'>Prezentacja firmy</h3>
          <h1 className='uppercase font-babas text-5xl text-heading-txt'>zobacz naszą galerię zdjęć</h1>
        </div>

        <div className="flex gap-10">
          <p className='text-button-bg underline'>Samochody osobowe</p>
          <p>Samochody dostawcze</p>
        </div>
      </section>

      {/* Slider */}
      <section className='flex gap-32 pt-16 overflow-hidden'>
        <img className='' src="assets/red-car.jfif" alt="" />
        <img src="assets/black2.jfif" alt="" />
        <img src="assets/audi.jfif" alt="" />
      </section>

      <div className='flex text-6xl justify-center text-gray-200'><span className='pr-3.5 text-button-bg'>.</span>. . . .</div>

    </section>
  )
}
