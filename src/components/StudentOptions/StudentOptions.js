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

    return (
        <div className="StudentOptions">
            <div className="row">
                {/* present */}
                <div className="col-lg-4">
                    <MdDone size={20} className="optionSign present" color={presentColor} />
                </div>
                {/* late */}
                <div className="col-lg-4">
                    <MdAccessTime size={20} className="optionSign late" color={lateColor} />
                </div>
                {/* absent */}
                <div className="col-lg-4">
                    <MdClear size={20} className="optionSign absent" color={absentColor} />
                </div>
            </div>
        </div>
    );
};

StudentOptions.propTypes = {
    attendanceMark: PropTypes.object
};

export default StudentOptions;