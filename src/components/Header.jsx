import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hook do zamknięcia menu przy zmianie rozmiaru okna
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {  // Jeśli szerokość okna przekracza 768px (media query dla "md")
        setIsMenuOpen(false);          // Zamyka menu
      }
    };

    window.addEventListener('resize', handleResize);

    // Sprzątanie po odmontowaniu komponentu
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='flex justify-around items-center w-full p-4'>
      
      {/* Logo */}
      <div className='flex items-center z-10'>
        <img className='w-10' src="assets/logo.png" alt="logo" />
        <p className='text-button-bg font-bold text-2xl'>Cars<span className='text-black'>Spot</span></p>
      </div>

      {/* Menu na desktopie */}
      <div className='hidden md:flex flex-row items-center z-10'>
        <a href="#galery" className='text-center'>
          <p className='p-6'>Galeria zdjęć</p>
        </a>

        <a href="#faq" className='text-center'>
          <p>FaQ</p>
        </a>
      </div>

      {/* Przycisk "Zadzwoń do nas" na desktopie */}
      <button className='hidden md:flex items-center h-12 pl-3 pr-3 bg-button-bg rounded-xl text-white font-bold text-base z-10'>
        Zadzwoń do nas
      </button>
      
      {/* Przycisk hamburgera na telefonie */}
      <button className='md:hidden z-10' onClick={toggleMenu}>
        <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Menu rozwijane na telefonie */}
      {isMenuOpen && (
        <div className='absolute top-16 left-0 w-full bg-gray-200 flex flex-col items-center z-20 space-y-4 py-4'>
          <a href="#galery" className='w-full text-center p-4 border-b'>Galeria zdjęć</a>
          <a href="#faq" className='w-full text-center p-4 border-b'>FaQ</a>
          <button className='h-12 w-3/4 bg-button-bg rounded-xl text-white font-bold text-base'>
            Zadzwoń do nas
          </button>
        </div>
      )}
    </section>
  );
};
