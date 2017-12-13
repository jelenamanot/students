import React from 'react';
import PropTypes from 'prop-types';

import SingleStudent from './SingleStudent';

class Students extends React.Component {
    render() {
        const students = this.props.students;
        return(
            <div className="Students row">
                {
                    students.map(student => <SingleStudent
                        key={student.id}
                        firstName={student.firstName}
                        lastName={student.lastName}
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