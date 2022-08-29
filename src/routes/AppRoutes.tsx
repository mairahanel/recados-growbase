import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Cadastro } from '../pages/cadastro/Cadastro';
import { Home } from '../pages/home/Home';

const AppRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;
  