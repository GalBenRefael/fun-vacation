import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/Order';
import Vacations from './pages/vacations/Vacations';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import Edit from './pages/vacations/Edit';
import SignUp from './auth/SignUp';

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
                <Route
                    path='edit/:id'
                    element={<Edit />}
                />
                <Route
                    path='signup'
                    element={<SignUp />}
                />
            </Routes>
        </>
    );
}

export default App;
