import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Topic from './components/topic';

import Main from './components/Main';

var routes = (<Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="topics/:id" component={Topic} />
        </Route>
    </Router>);

export default routes;
