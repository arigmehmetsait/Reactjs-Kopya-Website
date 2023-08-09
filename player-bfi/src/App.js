import './App.css';
import React from 'react';
import NavbarComp from './components/NavbarComp';
import Footer from './pages/Footer';
import Routers from './components/Routers';

const App = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div style={{ padding: ' 0 50px 50px 50px' }}>

        <NavbarComp />
        <Routers />
        <Footer />

      </div>
    </div>
  );
}

export default App;
