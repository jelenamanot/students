import React from 'react';

import { presentColor, lateColor, absentColor } from '../../utils/constants';

import './statusPanel.scss';

const StatusPanel = (props) => {
    console.log(props.students);

    let allStudents = props.students;
    let allMarks = allStudents.map(student => student.attendanceMark);
    console.log(allMarks);

    let presentMarks = allMarks.filter(mark => mark.present);
    let lateMarks = allMarks.filter(mark => mark.late);
    let absentMarks = allMarks.filter(mark => mark.absent);
    let unmarked = allMarks.length - lateMarks.length - absentMarks.length - presentMarks.length;

    return(
        <div className="StatusPanel basicCard row text-center">
            <div className="panelPart col-lg-3">
                <p className="miniHeading" style={{color: presentColor}}>Present</p>
                <p className="panelNumber" style={{borderColor: presentColor}}>{ presentMarks.length }</p>
            </div>
            <div className="panelPart col-lg-3">
                <p className="miniHeading" style={{color: lateColor}}>Late</p>
                <p className="panelNumber" style={{borderColor: lateColor}}>{ lateMarks.length }</p>
            </div>
            <div className="panelPart col-lg-3">
                <p className="miniHeading" style={{color: absentColor}}>Absent</p>
                <p className="panelNumber" style={{borderColor: absentColor}}>{ absentMarks.length }</p>
            </div>
            <div className="panelPart col-lg-3">
                <p className="miniHeading">Unmarked</p>
                <p className="panelNumber">{ unmarked }</p>
            </div>
            <hr className="col-md-8" />
            <div className="col-md-6 offset-md-3">
                <p className="text-center">Total: { allMarks.length }</p>
            </div>
        </div>
    );
};

export default StatusPanel;