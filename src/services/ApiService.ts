import { VacationPackage } from '../pages/Home';

const serverUrl = 'http://localhost:3000/';
const vacationsUrl = `${serverUrl}vacations/`;

export async function getVacations(): Promise<Array<VacationPackage>> {
    const res = await fetch(`${vacationsUrl}`);
    return res.json();
}

export async function getVacationById(_id: string): Promise<VacationPackage> {
    const res = await fetch(`${vacationsUrl}${_id}`);
    return res.json();
}

export async function addVacations(
    vacation: VacationPackage
): Promise<VacationPackage> {
    const res = await fetch(`${vacationsUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vacation),
    });
    return res.json();
}

export async function deleteVacation(_id: string): Promise<VacationPackage> {
    const res = await fetch(`${vacationsUrl}${_id}`, {
        method: 'DELETE',
    });
    return res.json();
}

export async function editVacation(
    _id: string,
    vaction: VacationPackage
): Promise<VacationPackage> {
    const res = await fetch(`${vacationsUrl}${_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vaction),
    });
    return res.json();
}
