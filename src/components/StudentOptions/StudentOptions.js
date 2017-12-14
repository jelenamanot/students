import React from 'react';
import PropTypes from 'prop-types';
import { MdDone, MdAccessTime, MdClear } from 'react-icons/md';

import '../Students/students.scss';

import './studentOptions.scss';

const StudentOptions = (props) => {

    const presentMark = props.attendanceMark.present;
    const lateMark = props.attendanceMark.late;
    const absentMark = props.attendanceMark.absent;

    let presentColor;
    let lateColor;
    let absentColor;

    if(presentMark === true) {
        presentColor = '#01a191';
    }
    if(lateMark === true) {
        lateColor = '#1080bc';
    }
    if(absentMark === true) {
        absentColor = '#bc2c2c';
    }

    const setAttendance = (id, status) => {
        const newState = {
            'present': false,
            'late': false,
            'absent': false
        };

        /*
            Check if attendance button has already been clicked,
            if not, set the clicked status to true
        */

        if (!props.attendanceMark[status]) {
            newState[status] = true;
        }

        props.onStudentStatusUpdate(id, newState);
    };

    return (
        <div className="StudentOptions">
            <div className="row">
                {/* present */}
                <div className="col-lg-4" onClick={setAttendance.bind(this, props.id, 'present')}>
                    <MdDone size={20} className="optionSign present" color={presentColor} />
                </div>
                {/* late */}
                <div className="col-lg-4" onClick={setAttendance.bind(this, props.id, 'late')}>
                    <MdAccessTime size={20} className="optionSign late" color={lateColor} />
                </div>
                {/* absent */}
                <div className="col-lg-4" onClick={setAttendance.bind(this, props.id, 'absent')}>
                    <MdClear size={20} className="optionSign absent" color={absentColor} />
                </div>
            </div>
        </div>
    );
};

StudentOptions.propTypes = {
    attendanceMark: PropTypes.object,
    onStudentStatusUpdate: PropTypes.func,
    id: PropTypes.number
};

export default StudentOptions;