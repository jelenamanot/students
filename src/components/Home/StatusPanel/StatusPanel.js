import React from 'react';
import PropTypes from 'prop-types';

import { presentColor, lateColor, absentColor } from '../../../utils/constants';

import './statusPanel.scss';

const StatusPanel = (props) => {

    let allStudents = props.students;
    let allMarks = allStudents.map(student => student.attendanceMark);

    let presentCount = 0;
    let lateCount = 0;
    let absentCount = 0;
    let unmarkedCount = 0;

    allMarks.forEach(mark => {
        if(mark.present) {
            presentCount++;
        }
        else if(mark.late) {
            lateCount++;
        }
        else if(mark.absent) {
            absentCount++;
        }
        else {
            unmarkedCount++;
        }
    });

    return(
        <div className="StatusPanel basicCard row text-center">
            <div className="panelPart col-lg-3">
                <p className="miniHeading" style={{color: presentColor}}>Present</p>
                <p className="panelNumber" style={{borderColor: presentColor}}>{ presentCount }</p>
            </div>
            <div className="panelPart col-lg-3">
                <p className="miniHeading" style={{color: lateColor}}>Late</p>
                <p className="panelNumber" style={{borderColor: lateColor}}>{ lateCount }</p>
            </div>
            <div className="panelPart col-lg-3">
                <p className="miniHeading" style={{color: absentColor}}>Absent</p>
                <p className="panelNumber" style={{borderColor: absentColor}}>{ absentCount }</p>
            </div>
            <div className="panelPart col-lg-3">
                <p className="miniHeading">Unmarked</p>
                <p className="panelNumber">{ unmarkedCount }</p>
            </div>
            <hr className="col-md-8" />
            <div className="col-md-6 offset-md-3">
                <p className="text-center">Total: { allMarks.length }</p>
            </div>
        </div>
    );
};

StatusPanel.propTypes = {
    students: PropTypes.array
};

export default StatusPanel;