import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'flowbite';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavbarA } from './pages/NavbarA';
import { Carrousel } from './pages/Carrousel';
import { Cards } from './pages/Cards';
import { Products } from './pages/Products';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     

      <Routes>
        {/* Página inicial (com Carrousel e Cards) */}
        <Route

          path="/"
          element={
            <>
            <NavbarA/>
              <Carrousel />
              <Cards />
            </>
          }
        />

        {/* Rota para TesteApi */}
        <Route path="/verInformacoes" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
