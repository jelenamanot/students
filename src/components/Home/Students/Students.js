import React from 'react';
import PropTypes from 'prop-types';
import studentService from '../../../services/studentService';

import SingleStudent from './SingleStudent';
import GenderPanel from '../GenderPanel/GenderPanel';
import StatusPanel from '../StatusPanel/StatusPanel';

class Students extends React.Component {

    constructor() {
        super();
        this.state = {
            students: []
        };
        this.onStudentStatusUpdate = this.onStudentStatusUpdate.bind(this);
    }

    componentDidMount() {
        studentService.getAllData()
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    onStudentStatusUpdate(studentId, attendanceMark) {
        const students = this.state.students.map(student => {
            if(student.id === studentId) {
                return Object.assign(student, {
                    attendanceMark
                });
            }
            return student;
        });

        this.setState({ students });
    }

    render() {
        const students = this.state.students;
        return(
            <div className="Students">
                <div className="panels row">
                    <div className="col-lg-2 offset-lg-2">
                        <GenderPanel students={students} />
                    </div>
                    <div className="col-lg-6">
                        <StatusPanel students={students} />
                    </div>
                </div>
                <div className="row">{students.map(student =>
                    <SingleStudent
                        key={student.id}
                        student={student}
                        onStudentStatusUpdate={this.onStudentStatusUpdate}
                    />)}
                </div>
            </div>
        );
    }
}

Students.propTypes = {
    students: PropTypes.array
};

export default Students;