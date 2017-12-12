import React from 'react';

import SingleStudent from './SingleStudent';

class Students extends React.Component {
    render() {
        console.log(this.props.students)

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

export default Students;