import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPersonOutline } from 'react-icons/md';

import './header.scss';

const Header = () => {
    return(
        <div className="Header col-md-6 offset-md-3 text-center">
            <MdPersonOutline size={50} />
            <h3>students</h3>
            <div className="row">
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/students">All Students</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;