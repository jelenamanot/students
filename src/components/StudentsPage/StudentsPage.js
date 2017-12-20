import React from 'react';
import { Route, Link } from 'react-router-dom';

import studentService from '../../services/studentService';

import StudentTab from './StudentTab';

import './studentsPage.scss';

class StudentsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        studentService.getAllData()
            .then(response => {
                let students = response.data;
                this.setState({
                    students
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <div className="StudentsPage container">
                <div className="row text-center">
                    {
                        this.state.students.map(student => (
                            <Link
                                className="col-md-2"
                                to={`${this.props.match.path}/${student.id}`}
                                key={student.id}
                            >
                                <img src={student.image} className="studentImg" />
                            </Link>
                        ))
                    }
                </div>
                <Route path={`${this.props.match.path}/:userId`} component={StudentTab} />
            </div>
        );
    }
}

export default StudentsPage;