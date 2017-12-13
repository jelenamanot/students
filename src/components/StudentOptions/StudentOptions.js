import React from 'react';
import { MdDone, MdAccessTime, MdClear } from 'react-icons/md';

import '../Students/students.scss';

import './studentOptions.scss';

const StudentOptions = () => {
    return (
        <div className="StudentOptions">
            <div className="row">
                {/* present */}
                <div className="col-md-4">
                    <MdDone size={20} className="optionSign present" />
                </div>
                {/* late */}
                <div className="col-md-4">
                    <MdAccessTime size={20} className="optionSign late" />
                </div>
                {/* absent */}
                <div className="col-md-4">
                    <MdClear size={20} className="optionSign absent" />
                </div>
            </div>
        </div>
    );
};

export default StudentOptions;