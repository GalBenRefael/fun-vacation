import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/Order';
import Vacations from './pages/Vacations';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='order'
                    element={<Order />}
                />
                <Route
                    path='vacations'
                    element={<Vacations />}
                />
            </Routes>
        </>
    );
}

export default App;
