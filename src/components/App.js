import React from 'react';

import studentService  from '../services/studentService'

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
       console.log(this.state.students)
       return(
         <div>
            <p>Students</p>
         </div>
      );
   }
}

export default App;