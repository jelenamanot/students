import React from 'react';
import studentService from '../../services/studentService';

import { FaFemale, FaMale } from 'react-icons/fa';
import { femaleColor, maleColor } from '../../utils/constants';

import './studentsPage.scss';

class StudentTab extends React.Component {

    constructor() {
        super();
        this.state = {
            students: [],
            foundStudent: {
                firstName: '',
                lastName: '',
                gender: '',
                image: ''
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.userId !== this.props.match.params.userId) {
            const foundStudent = this.state.students.find(student => student.id == nextProps.match.params.userId);
            this.setState({
                foundStudent
            });
        }
    }

    componentDidMount() {
        studentService.getAllData()
            .then(response => {
                let students = response.data;
                if(students) {
                    this.setState({
                        students
                    });
                }
                const foundStudent = this.state.students.find(student => student.id == this.props.match.params.userId);
                this.setState({
                    foundStudent
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { firstName, lastName, gender, image } = this.state.foundStudent;
        return(
            <div className="StudentTab container">
                <div className="basicCard">
                    <div className="studentData text-center">
                        <img src={image} alt={firstName} />
                        <h1>{ firstName + ' ' + lastName }</h1>
                        <div>
                            {
                                gender === 'female' ?
                                    <FaFemale size={30} color={femaleColor} /> :
                                    <FaMale size={30} color={maleColor} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentTab;