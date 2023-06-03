import { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';
import Title from '../components/Title';
import { VacationPackage } from './Home';
import { json } from 'stream/consumers';
import { addVacations, getVacations } from '../services/ApiService';
import NoDataMessage from '../components/NoDataMessage';
import { formatDate, formatPrice } from '../services/Formatter';

function Vacations() {
    const [vacations, setVacations] = useState<Array<VacationPackage>>([]);

    useEffect(() => {
        getVacations().then((json) => {
            setVacations(json);
        });
    }, []);

    function onAdd(vacation: VacationPackage) {
        addVacations(vacation).then((json) => {
            setVacations([...vacations, json]);
        });
    }
    return (
        <>
            <Title
                mainText='Vacations'
                subText='manage vacations packages'
            />

            <AddForm onAdd={onAdd} />

            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {vacations.map((vacation) => (
                        <tr key={vacation._id}>
                            <td>{formatDate(vacation.date)}</td>
                            <td>{vacation.location}</td>
                            <td>{formatPrice(vacation.price)}</td>
                            <td>
                                <button className='btn tbn-default'>
                                    <i className='bi bi-pen' />
                                </button>
                                <button className='btn tbn-default ms-2'>
                                    <i className='bi bi-trash' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {vacations.length === 0 && <NoDataMessage />}
        </>
    );
}

export default Vacations;
