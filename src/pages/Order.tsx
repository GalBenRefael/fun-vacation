import { FormEvent, useEffect, useState } from 'react';
import FormLayout from '../components/FormLayout';
import Title from '../components/Title';
import { VacationPackage } from './Home';
import { addOrder, getVacations } from '../services/ApiService';
import { useNavigate } from 'react-router-dom';

export interface Order {
    _id?: string;
    vacation: string;
    name: string;
    email?: string;
    terms: boolean;
}

function Order() {
    const [vacations, setVacations] = useState<Array<VacationPackage>>([]);
    const [vacation, setVacation] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getVacations().then((json) => {
            setVacations(json);
        });
    }, []);

    function validate(): boolean {
        if (!vacation) {
            setErrors('Where do you want to go? Please select a package');
            return false;
        }
        if (!name) {
            setErrors('Name is required');
            return false;
        }
        if (!terms) {
            setErrors('Please accept the terms');
            return false;
        }
        setErrors('');
        return true;
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!validate()) return;

        await addOrder({
            vacation,
            name,
            email,
            terms,
        });

        navigate('/checkout');
    }

    return (
        <>
            <Title
                mainText='Order Now'
                subText='Quickly order a new vacation'
            />

            <FormLayout>
                <form onSubmit={handleSubmit}>
                    <div className='row g-3'>
                        <div className='col-12'>
                            <label className='form-label'>
                                Vacation Package
                            </label>
                            <select
                                className='form-select'
                                value={vacation}
                                onChange={(e) => setVacation(e.target.value)}
                            >
                                <option value=''>Please Select...</option>

                                {vacations.map((pkg) => (
                                    <option
                                        key={pkg._id}
                                        value={pkg._id}
                                    >
                                        {pkg.location}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Name</label>
                            <input
                                className='form-control'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Email</label>
                            <input
                                placeholder='me@mail.com'
                                className='form-control'
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className='form-check mt-4'>
                            <input
                                className='form-check'
                                type='checkbox'
                                checked={terms}
                                onChange={() => setTerms(!terms)}
                            ></input>
                            <label className='form-check-label'>
                                I agree to terms...
                            </label>
                        </div>
                        {errors && <div className='text-danger'>{errors}</div>}
                        <button
                            className='w-100 btn btn-primary btn-lg mt-4'
                            type='submit'
                        >
                            Continue to checkout
                        </button>
                    </div>
                </form>
            </FormLayout>
        </>
    );
}

export default Order;
