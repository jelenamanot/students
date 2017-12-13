import React from 'react';

import Students from './Students/Students';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <Students />
            </div>
        );
    }
}

export default App;