import React from 'react';
import studentService from '../../services/studentService';

class StudentPage extends React.Component {

    constructor(params) {
        super();
        this.state = {
            student: {}
        };
    }

    componentDidMount() {
        studentService.getAllData()
            .then(response => {
                const student = response.data.find(student => student.id == this.props.match.params.id);
                if(student) {
                    this.setState({ student });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        const { firstName } = this.state.student;
        return(
            <div className="StudentPage">
                <p>Student name: { firstName }</p>
            </div>
        );
    }
}

export default StudentPage;