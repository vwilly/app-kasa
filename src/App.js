import React from 'react';
import './styles/App.css';
import Home from './pages/home';
import Accomodation from './pages/accomodation/index';
import About from './pages/about/Index';
import Error from './pages/notFound/index';
import {  Routes, Route } from 'react-router-dom'
import datas from "./data/data";

 

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home datas={datas} />} />
                <Route path="/Accomodation/:id" element={<Accomodation datas={datas} />} />
                <Route path="/About" element={<About />} />
				<Route path="/*" element={<Error />} />
            </Routes>
        </>
    );
}

