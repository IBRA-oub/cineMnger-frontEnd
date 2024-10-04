import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from './routes/layouts';
import Home from './pages/Home';
import './App.css'
import PageNotFound from './pages/PageNotFound';
import AllSessionFilm from './pages/AllSessionFilm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Layout />}> */}
            <Route index element={<Home />}></Route>
            <Route path='/all-session-film'  element={<AllSessionFilm />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
