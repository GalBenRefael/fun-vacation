import { ChangeEvent, useEffect, useState } from 'react';
import Title from '../components/Title';
import { log } from 'console';
import { getVacations } from '../services/ApiService';

export interface VacationPackage {
    _id?: string;
    date: string;
    location: string;
    price: number;
}

enum SortDirection {
    asc = 'asc', // A-Z
    desc = 'desc', // Z-A
}

// const data: Array<VacationPakhage> = [
//     {
//         id: 'a1',
//         date: '01/01/23',
//         location: 'New York',
//         price: 1000,
//     },
//     {
//         id: 'a2',
//         date: '01/01/23',
//         location: 'London',
//         price: 500,
//     },
//     {
//         id: 'a3',
//         date: '01/01/23',
//         location: 'Ibiza',
//         price: 500,
//     },
// ];

function Home() {
    const [vacations, setVacations] = useState<Array<VacationPackage>>([]);
    const [sort, setSort] = useState(SortDirection.asc);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // fetch('http://localhost:3000/vacations')
        //     .then((res) => res.json())
        //     .then((json) => {
        //         setVacations(json);
        //     });

        getVacations().then((json) => {
            setVacations(json);
        });
    }, []);

    function handleSort(e: ChangeEvent<HTMLSelectElement>) {
        const direction = e.target.value as SortDirection;
        setSort(direction);

        let result = [...vacations];
        if (direction === SortDirection.desc) {
            result.sort((a, b) =>
                a.location > b.location ? -1 : a.location < b.location ? 1 : 0
            );
        } else {
            result.sort((a, b) =>
                a.location < b.location ? -1 : a.location > b.location ? 1 : 0
            );
        }

        setVacations(result);
    }

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearch(value);

        const term = value.toLowerCase();
        const result = [...vacations].filter((vacation) =>
            vacation.location.toLowerCase().includes(term)
        );

        setVacations(result);
    }

    function formatDate(value: string) {
        return new Date(value).toLocaleDateString();
    }

    return (
        <>
            <Title
                mainText='Our Offers'
                subText='our packages for this month'
            />
            <div className='container'>
                <div className='d-flex'>
                    <div>
                        <input
                            type='text'
                            placeholder='Search'
                            className='form-control me-4'
                            value={search}
                            onChange={handleSearch}
                            disabled={vacations.length === 0}
                        />
                    </div>
                    <div>
                        <select
                            className='form-select'
                            value={sort}
                            onChange={handleSort}
                            disabled={vacations.length === 0}
                        >
                            <option value={SortDirection.asc}>
                                Location A-Z
                            </option>
                            <option value={SortDirection.desc}>
                                Location Z-A
                            </option>
                        </select>
                    </div>
                </div>

                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vacations.map((vacations) => (
                            <tr key={vacations._id}>
                                <td>{formatDate(vacations.date)}</td>
                                <td>{vacations.location}</td>
                                <td>{vacations.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;
