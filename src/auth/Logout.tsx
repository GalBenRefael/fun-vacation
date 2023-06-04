import { useNavigate } from 'react-router-dom';
import { rmeoveToken } from './TokenManager';

function Logout() {
    const naviagte = useNavigate();

    function handleClick() {
        rmeoveToken();
        localStorage.removeItem('admin');
        naviagte('/login');
    }
    return (
        <button
            className='btn btn-link nav-link'
            onClick={handleClick}
        >
            Log Out
        </button>
    );
}

export default Logout;
