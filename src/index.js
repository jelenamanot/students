import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import MainLayout from './components/MainLayout';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import './css/main.scss';

ReactDOM.render(
    <HashRouter>
        <MainLayout />
    </HashRouter>,
    document.getElementById('root')
);