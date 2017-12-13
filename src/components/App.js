import React from 'react';

import Students from './Students/Students';
import Header from './Header/Header';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <Header />
                <Students />
            </div>
        );
    }
}

export default App;