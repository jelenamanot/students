import React from 'react';
import { MdPersonOutline } from 'react-icons/md';

import './header.scss';

const Header = () => {
    return(
        <div className="Header col-md-6 offset-md-3 text-center">
            <MdPersonOutline size={50} />
            <h3>students</h3>
        </div>
    );
}

export default Header;