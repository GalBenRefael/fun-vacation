import { log } from 'console';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editVacation, getVacationById } from '../../services/ApiService';
import { formatDate } from '../../services/Formatter';
import { toast } from 'react-toastify';

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState(1);

    useEffect(() => {
        if (!id) return;
        getVacationById(id).then((json) => {
            const date = new Date(json.date);
            setDate(date.toLocaleDateString('en-CA'));
            setLocation(json.location);
            setPrice(json.price);
        });
    }, [id]);

    function validate(): boolean {
        if (!date) {
            toast.error('date is required.');
            return false;
        }
        if (!location && location.length < 3) {
            toast.error('Location is required.');
            return false;
        }
        if (price <= 0) {
            toast.error('No free vacations.');
            return false;
        }

        return true;
    }
    function handleClick() {
        if (!validate()) {
            return;
        }
        if (!id) return;
        editVacation(id, {
            date,
            location,
            price,
        }).then((json) => {
            // return to the vacations page...
            navigate('/vacations');
        });
    }

    return (
        <>
            <div className='m-4 d-flex justify-content-center'>
                <div className='col-sm-12 col-md-6'>
                    <div className='mb-3'>
                        <label
                            className='form-label'
                            htmlFor='date'
                        >
                            Date
                        </label>
                        <input
                            type='date'
                            className='form-control me-3'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            id='date'
                        />
                    </div>
                    <div className='mb-3'>
                        <label
                            className='form-label'
                            htmlFor='location'
                        >
                            Location
                        </label>
                        <input
                            type='text'
                            className='form-control me-3'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            id='location'
                        />
                    </div>
                    <div className='mb-3'>
                        <label
                            className='form-label'
                            htmlFor='price'
                        >
                            Price
                        </label>
                        <input
                            type='number'
                            className='form-control me-3'
                            value={price}
                            onChange={(e) => setPrice(+e.target.value)}
                            id='price'
                        />
                    </div>

                    <div className='mb-3'>
                        <button
                            className='btn btn-info me-3'
                            onClick={handleClick}
                        >
                            Update
                        </button>
                        <Link
                            to='/vacations'
                            className='btn btn-secondary'
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit;
