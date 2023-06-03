import { useState } from 'react';
import FormLayout from '../components/FormLayout';
import Title from '../components/Title';
import { toast } from 'react-toastify';
import { login } from '../services/ApiService';
import { useNavigate } from 'react-router-dom';
import { setToken } from './TokenManager';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function validate(): boolean {
        if (!email) {
            // also check that email is required with regex
            toast.error('Email is required.');
            return false;
        }
        if (!password || password.length < 6) {
            toast.error('Password must contain at least 6 characters');
            return false;
        }

        return true;
    }

    function handleClick() {
        if (!validate()) {
            return;
        }

        login({
            email,
            password,
        }).then((user) => {
            setToken(user.token);
            navigate('/vacations');
        });
    }
    return (
        <>
            <Title mainText='Login' />
            <FormLayout>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        className='form-control me-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        type='password'
                        className='form-control me-3'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <button
                        className='btn btn-info mb-3'
                        onClick={handleClick}
                    >
                        Login
                    </button>
                </div>
            </FormLayout>
        </>
    );
}

export default Login;
