import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landingpage from './pages/landingpage';
// import { stringly2_backend } from 'declarations/stringly2_backend';

function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
