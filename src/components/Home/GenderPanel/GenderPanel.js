import React from 'react';
import PropTypes from 'prop-types';
import { FaFemale, FaMale } from 'react-icons/fa';

import { femaleColor, maleColor } from '../../../utils/constants';

import './genderPanel.scss';

const GenderPanel = (props) => {

    let femaleStudents = 0;
    let maleStudents = 0;

    props.students.forEach(student => {
        if(student.gender === 'female') {
            femaleStudents++;
        }
        else {
            maleStudents++;
        }
    });

    return(
        <div className="GenderPanel basicCard">
            <p className="miniHeading">Gender</p>
            <div className="panelPart">
                <FaFemale size={30} color={femaleColor} />
                <span className="genderSpan">{ femaleStudents }</span>
            </div>
            <div className="panelPart">
                <FaMale size={30} color={maleColor} />
                <span className="genderSpan">{ maleStudents }</span>
            </div>
        </div>
    );
};

GenderPanel.propTypes = {
    students: PropTypes.array
};

export default GenderPanel;