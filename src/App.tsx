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
import Login from './auth/Login';
import RouteGuard from './auth/RouteGuard';
import UserManager from './pages/UserManager';
import AdminGuard from './auth/AdminGuard';
import Checkout from './pages/Checkout';

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
                    element={
                        <RouteGuard>
                            <Vacations />
                        </RouteGuard>
                    }
                />
                <Route
                    path='edit/:id'
                    element={
                        <RouteGuard>
                            <Edit />
                        </RouteGuard>
                    }
                />
                <Route
                    path='users'
                    element={
                        <AdminGuard>
                            <UserManager />
                        </AdminGuard>
                    }
                />
                <Route
                    path='checkout'
                    element={<Checkout />}
                />

                <Route
                    path='signup'
                    element={<SignUp />}
                />
                <Route
                    path='login'
                    element={<Login />}
                />
            </Routes>
        </>
    );
}

export default App;
