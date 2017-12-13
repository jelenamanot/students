import React from 'react';

import './genderPanel.scss';

const GenderPanel = (props) => {

    let students = props.students;
    let femaleStudents = students.filter(student => student.gender === 'female');
    let maleStudents = students.filter(student => student.gender === 'male');

    return(
        <div className="GenderPanel basicCard">
            <div className="panelPart">Female: {femaleStudents.length}</div>
            <div className="panelPart">Male: {maleStudents.length}</div>
        </div>
    );
};

export default GenderPanel;