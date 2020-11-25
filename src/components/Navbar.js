import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const NavBar = () => {

    const location = useLocation().pathname;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            
            <div className="container justify-content-start position-relative">
                <div className="navbar-brand">GitHub Search</div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" href="/">Home page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" href="/about">About page</NavLink>
                    </li>

                    {
                        location !== '/' && <li className="nav-item position-absolute " style={{
                            right: '15px'
                        }}>
                            <Link to="/" className="btn btn-success mb-2">Main page</Link>
                        </li>
                    }
                </ul>
            </div>
            
        </nav>
    )
}

export default NavBar;