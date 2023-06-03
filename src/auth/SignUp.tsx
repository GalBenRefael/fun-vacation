import { useState } from 'react';
import FormLayout from '../components/FormLayout';
import Title from '../components/Title';
import { toast } from 'react-toastify';
import { signup } from '../services/ApiService';

export interface User {
    _id?: string;
    name?: string;
    email: string;
    password?: string;
}

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validate(): boolean {
        if (!name || name.length < 2) {
            toast.error('Name is required.');
            return false;
        }
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

        signup({
            name,
            email,
            password,
        }).then((user) => {
            console.log(user);
        });
    }
    return (
        <>
            <Title
                mainText='SIgn Up'
                subText='Register to the application'
            />
            <FormLayout>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        type='text'
                        className='form-control me-3'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                        Sign Up
                    </button>
                </div>
            </FormLayout>
        </>
    );
}

export default SignUp;
