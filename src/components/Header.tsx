import { NavLink, Navigate } from 'react-router-dom';

function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <NavLink
                    to='/'
                    className='navbar-brand'
                >
                    <i className='bi bi-airplane-engines-fill me-2'></i>
                    Fun Vacation
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink
                                to='/order'
                                className='nav-link'
                            >
                                Order Now
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/vacations'
                                className='nav-link'
                            >
                                Vacations
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <ul className='navbar-nav flex-row'>
                    <li className='nav-item me-3'>
                        <NavLink
                            to='/signup'
                            className='nav-link'
                        >
                            Sign Up
                        </NavLink>
                    </li>
                    <li className='nav-item me-3'>
                        <NavLink
                            to='/'
                            className='nav-link'
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
