import { ChangeEvent, useEffect, useState } from 'react';
import Title from '../components/Title';
import { log } from 'console';
import { getVacations } from '../services/ApiService';
import NoDataMessage from '../components/NoDataMessage';
import { formatDate, formatPrice } from '../services/Formatter';

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

    const [origData, setOrigData] = useState<Array<VacationPackage>>([]);

    useEffect(() => {
        getVacations().then((json) => {
            setVacations(json);
            setOrigData(json);
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
        const result = [...origData].filter((vacation) =>
            vacation.location.toLowerCase().includes(term)
        );

        setVacations(result);
    }

    function isDataEmpty(): boolean {
        return origData.length === 0;
    }

    return (
        <>
            <Title
                mainText='Our Offers'
                subText='our packages for this month'
            />

            <div className='d-flex px-4 w-50 my-5 bg-light'>
                <input
                    type='text'
                    placeholder='Search'
                    className='form-control me-4'
                    value={search}
                    onChange={handleSearch}
                    disabled={isDataEmpty()}
                />

                <select
                    className='form-select'
                    value={sort}
                    onChange={handleSort}
                    disabled={isDataEmpty()}
                >
                    <option value={SortDirection.asc}>Location A-Z</option>
                    <option value={SortDirection.desc}>Location Z-A</option>
                </select>
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
                            <td>{formatPrice(vacations.price)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isDataEmpty() && <NoDataMessage />}
        </>
    );
}

export default Home;
