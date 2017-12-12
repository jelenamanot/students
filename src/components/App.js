import React from 'react';

import studentService  from '../services/studentService';

import Students from './Students/Students'

class App extends React.Component {
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
       return(
         <div className="container-fluid">
            <Students students={this.state.students} />
         </div>
      );
   }
}

export default App;