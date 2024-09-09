import React from 'react';
import { Header } from './components/Header';
import { SalesContainer } from './components/SalesContainer';
import { Galery } from './components/Galery';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <section className='h-screen '>
      {/* header */}
      <Header/>

      {/* sales-container */}
      <SalesContainer/>

      {/* Galeria */}
      <Galery/>
    
      {/* Footer */}
      <Footer/>
    </section>
  )
}

export default App;

