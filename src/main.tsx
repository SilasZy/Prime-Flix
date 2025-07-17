import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'flowbite';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavbarA } from './pages/Layouts/NavbarA';
import { Carrousel } from './pages/Layouts/Carrousel';
import { Cards } from './pages/Layouts/Cards';
import { FooterMob } from './pages/Layouts/FooterMob';
import { SeriesCarrousel } from './pages/Layouts/Series';

import { CardSerie } from './pages/Layouts/CardSerie';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     

      <Routes>


        <Route

          path="/"
        
          element={
            <>
            <NavbarA/>
              <Carrousel />
              <Cards/>
              <FooterMob/>
            </>
          }
        />
     
        <Route
          path="/series"
          element={
            <>
              <NavbarA />
              <SeriesCarrousel />
              <CardSerie />
              <FooterMob />
            </>
          }
        />

      
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
