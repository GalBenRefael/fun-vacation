import { User } from '../auth/SignUp';
import { getToken } from '../auth/TokenManager';
import { VacationPackage } from '../pages/Home';
import { Order } from '../pages/Order';

const serverUrl = 'http://localhost:3000/';
const vacationsUrl = `${serverUrl}vacations/`;
const usersUrl = `${serverUrl}users/`;

export async function getVacations(): Promise<Array<VacationPackage>> {
    const res = await fetch(`${vacationsUrl}`);
    return res.json();
}

export async function getVacationById(_id: string): Promise<VacationPackage> {
    const res = await fetch(`${vacationsUrl}${_id}`, {
        method: 'GET',
        headers: {
            'x-auth-token': getToken(),
        },
    });
    return res.json();
}

export async function addVacations(
    vacation: VacationPackage
): Promise<VacationPackage> {
    const res = await fetch(`${vacationsUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getToken(),
        },
        body: JSON.stringify(vacation),
    });
    return res.json();
}

export async function deleteVacation(_id: string): Promise<VacationPackage> {
    const res = await fetch(`${vacationsUrl}${_id}`, {
        method: 'DELETE',
        headers: {
            'x-auth-token': getToken(),
        },
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
            'x-auth-token': getToken(),
        },
        body: JSON.stringify(vaction),
    });
    return res.json();
}

export async function signup(user: User): Promise<User> {
    const res = await fetch(`${usersUrl}signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return res.json();
}
export async function login(user: User): Promise<User> {
    const res = await fetch(`${usersUrl}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return res.json();
}

export async function addOrder(order: Order): Promise<Order> {
    const res = await fetch(`${serverUrl}orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return res.json();
}
