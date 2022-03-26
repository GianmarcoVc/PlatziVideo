import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import FormSession from '../containers/FormSession';
import Player from '../containers/Player';
import NotFound from '../containers/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<FormSession isLogin />} />
          <Route path='register' element={<FormSession isRegister />} />
        </Route>
        <Route path='/player/:id' element={<Player />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
