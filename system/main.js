/**
 * Created by qmh on 2016/8/25.
 */

import React from 'react';
import ReactDom from 'react-dom';
import {Main} from 'common';
import {Router,hashHistory} from 'react-router';
import '../scss/main.scss';

// import dev modules
import Hello from './hello/hello';
import World from './world/world';

// create routes
const routes=[{path:'main',component:Main,
    childRoutes:[
        {name:'world',path:'world',component:World}
    ]},
    {path: '/',component: World},
    {path: 'hello',component: Hello}
];

ReactDom.render(<Router routes={routes} history={hashHistory}></Router>,document.getElementById("app"));
