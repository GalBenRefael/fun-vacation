import { VacationPackage } from '../pages/Home';

const serverUrl = 'http://localhost:3000/';

export async function getVacations(): Promise<Array<VacationPackage>> {
    const res = await fetch(`${serverUrl}vacations`);
    return res.json();
}
