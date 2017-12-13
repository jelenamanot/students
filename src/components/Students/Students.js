import React from 'react';
import PropTypes from 'prop-types';

import SingleStudent from './SingleStudent';
import studentService from '../../services/studentService';

class Students extends React.Component {

    constructor() {
        super();
        this.state = {
            students: []
        };
    }

    componentWillMount() {
        studentService.getAllData()
            .then(response => {
                this.setState({ students: response.data.results });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const students = this.state.students;
        return(
            <div className="Students row">
                {
                    students.map(student => <SingleStudent
                        key={student.id}
                        student={student}
                    />)
                }
            </div>
        );
    }
}

Students.propTypes = {
    students: PropTypes.array
};

export default Students;