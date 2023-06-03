import { VacationPackage } from '../pages/Home';
const serverUrl = 'http://localhost:3000/';
export async function getVacations(): Promise<Array<VacationPackage>> {
    const res = await fetch(`${serverUrl}vacations`);
    return res.json();
}

export async function addVacations(
    vacation: VacationPackage
): Promise<VacationPackage> {
    const res = await fetch(`${serverUrl}vacations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vacation),
    });
    return res.json();
}
