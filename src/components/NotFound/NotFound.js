import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => {
    return(
        <div className="NotFound container">
            <div className="basicCard text-center">
                <h2>Nothing found</h2>
                <button className="btn btn-success">
                    <Link to="/">
                        Go Home
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;