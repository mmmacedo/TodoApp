import '../template/normalize.css'
import 'modules//bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/glyphicons/glyphicons';
import React from 'react';
import Routes from './routes';
import Menu from '../template/menu';
import '../template/customCSS.css';


export default props=> (
    <div className='container'>
        <Menu/>
        <Routes/>
    </div>
);