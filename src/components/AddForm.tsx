import { useState } from 'react';

interface Props {
    onAdd: Function;
}

function AddForm({ onAdd }: Props) {
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState(1);
    const [error, setError] = useState('');

    function validate(): boolean {
        if (!date) {
            setError('Date is required');
            return false;
        }
        if (!location) {
            setError('Location is required');
            return false;
        }
        if (price <= 0) {
            setError('No free vacations');
            return false;
        }

        setError('');
        return true;
    }

    function handleClick() {
        if (!validate()) {
            return;
        }
        onAdd({
            date,
            location,
            price,
        });
    }

    return (
        <div className='bg-light d-flex p-4 align-items-center'>
            <input
                className='form-control me-3'
                type='date'
                placeholder='Date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                className='form-control me-3'
                type='text'
                placeholder='Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                className='form-control mx-3'
                type='number'
                placeholder='Price'
                value={price}
                onChange={(e) => setPrice(e.target.valueAsNumber)}
            />
            <button
                className='btn btn-info'
                onClick={handleClick}
            >
                Add
            </button>

            <div className='text-danger'>{error}</div>
        </div>
    );
}

export default AddForm;
