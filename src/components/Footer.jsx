import React from 'react'

export const Footer = () => {
  return (
    <section id='faq' className='h-auto bg-footer-bg flex items-center justify-center  flex-col text-white'>

      <section className='flex w-4/5 justify-between p-20'>
        <div className='flex flex-col gap-3.5 w-1/2'>
          <h3 className='uppercase font-babas text-3xl'>Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h3>
          <h4 className='text-sm'>Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</h4>
          <button><img src="assets/arrowbutton.png" alt="" /></button>
        </div>

        <div className='flex flex-col gap-3.5 w-1/2'>
          <h3 className='uppercase font-babas text-3xl'>Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h3>
          <h4 className='text-sm'>Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</h4>
          <button><img src="assets/arrowbutton.png" alt="" /></button>
        </div>  
      </section>

      <section className='flex flex-row justify-around w-full p-10 items-center h-10 border-t-2'>
        <p>Cars Spot</p>
        <p className='underline'>Polityka prywatności</p>
      </section>

    </section>
  )
}
