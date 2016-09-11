import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';

import Api from './utils/api';

ReactDOM.render(routes, document.getElementById('react-body'));
