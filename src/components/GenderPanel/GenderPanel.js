import React from 'react';
import PropTypes from 'prop-types';
import { FaFemale, FaMale } from 'react-icons/fa';

import { femaleColor, maleColor } from '../../utils/constants';

import './genderPanel.scss';

const GenderPanel = (props) => {

    let students = props.students;
    let femaleStudents = students.filter(student => student.gender === 'female');
    let maleStudents = students.filter(student => student.gender === 'male');

    return(
        <div className="GenderPanel basicCard">
            <p className="miniHeading">Gender</p>
            <div className="panelPart">
                <FaFemale size={30} color={femaleColor} />
                <span className="genderSpan">{femaleStudents.length}</span>
            </div>
            <div className="panelPart">
                <FaMale size={30} color={maleColor} />
                <span className="genderSpan">{maleStudents.length}</span>
            </div>
        </div>
    );
};

GenderPanel.propTypes = {
    students: PropTypes.array
};

export default GenderPanel;