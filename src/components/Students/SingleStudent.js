import React from 'react';
import PropTypes from 'prop-types';

import StudentOptions from '../StudentOptions/StudentOptions';

import './students.scss';

let temporaryImg = 'http://www.freeiconspng.com/uploads/no-image-icon-13.png';

const SingleStudent = (props) => {

    const { firstName, lastName } = props;

    return(
        <div className="SingleStudent col-md-3">
            <div className="wrapStudent col-md-10 offset-md-1 text-center">
                <img className="img-responsive" src={temporaryImg} />
                <p>{ firstName + ' ' + lastName }</p>
                <StudentOptions />
            </div>
        </div>
    );
};

SingleStudent.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
};

export default SingleStudent;