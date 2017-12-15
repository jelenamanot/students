import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App';
import StudentPage from './components/Students/StudentPage';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import './css/main.scss';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/student/:id" component={StudentPage}/>
            <Redirect to="/"/>
        </Switch>

    </HashRouter>, document.getElementById('root')
);