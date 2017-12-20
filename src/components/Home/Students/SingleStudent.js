import React from 'react';
import PropTypes from 'prop-types';

import { FaFemale, FaMale } from 'react-icons/fa';

import { femaleColor, maleColor } from '../../../utils/constants';

import StudentOptions from '../StudentOptions/StudentOptions';

import './students.scss';

const SingleStudent = (props) => {

    const { firstName, lastName, attendanceMark, image, gender, id } = props.student;

    return(
        <div className="SingleStudent col-lg-3">
            <div className="basicCard col-md-10 offset-md-1 text-center">
                <img className="studentImg" src={image} />
                <p className="studentName">{ firstName + ' ' + lastName }</p>
                <div className="studentGender">
                    {
                        gender === 'female' ?
                            <FaFemale color={femaleColor} size={20} />  :
                            <FaMale color={maleColor} size={20} />
                    }
                </div>
                <StudentOptions
                    attendanceMark={attendanceMark}
                    onStudentStatusUpdate={props.onStudentStatusUpdate}
                    id={id}
                />
            </div>
        </div>
    );
};

SingleStudent.propTypes = {
    student: PropTypes.object,
    onStudentStatusUpdate: PropTypes.func
};

export default SingleStudent;