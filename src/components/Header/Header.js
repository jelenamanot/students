import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPersonOutline } from 'react-icons/md';

import './header.scss';

const Header = () => {
    return(
        <div className="Header col-md-6 offset-md-3 text-center">
            <div className="row">
                <div className="col-md-4">
                    <MdPersonOutline size={50} />
                    <h3>students</h3>
                </div>
                <div className="navigationDiv col-md-8">
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/students">All Students</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;