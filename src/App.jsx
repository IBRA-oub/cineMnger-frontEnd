import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/layouts';
import Home from './pages/Home';
import './App.css'
import PageNotFound from './pages/PageNotFound';
import AllSessionFilm from './pages/AllSessionFilm';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import ClientReservation from './pages/ClientReservation';
import ClientTickets from './pages/ClientTickets';
import Reservation from './pages/Reservation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/all-session-film'  element={<AllSessionFilm />}></Route>
            <Route path='/register'  element={<Register />}></Route>
            <Route path='/login'  element={<Login />}></Route>
            <Route path='/forget-password'  element={<ForgetPassword />}></Route>
            <Route path='/reset-password'  element={<ResetPassword />}></Route>
            <Route path='/client-reservation'  element={<ClientReservation />}></Route>
            <Route path='/client-tickets'  element={<ClientTickets />}></Route>
            <Route path='/reservation'  element={<Reservation />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
