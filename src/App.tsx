import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/Order';
import Vacations from './pages/Vacations';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <Header />
            <ToastContainer />

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
