import React from 'react';
import './students.scss';

let temporaryImg = 'http://www.freeiconspng.com/uploads/no-image-icon-13.png';

const SingleStudent = (props) => {

    const { firstName, lastName } = props;

    return(
        <div className="SingleStudent col-md-3">
            <div className="wrapStudent col-md-10 offset-md-1 text-center">
                <img className="img-responsive" src={temporaryImg} />
                <p>{ firstName + ' ' + lastName }</p>
            </div>
        </div>
    );
};

export default SingleStudent;