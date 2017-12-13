import React from 'react';
import { FaFemale, FaMale } from 'react-icons/fa';

import { femaleColor, maleColor } from "../../utils/constants";

import './genderPanel.scss';

const GenderPanel = (props) => {

    let students = props.students;
    let femaleStudents = students.filter(student => student.gender === 'female');
    let maleStudents = students.filter(student => student.gender === 'male');

    return(
        <div className="GenderPanel basicCard">
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

export default GenderPanel;