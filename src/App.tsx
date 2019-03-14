import * as React from "react";
import thunk from 'redux-thunk';
import * as ReactDOM from "react-dom";
import reducers from './reducers';
import {Provider} from "react-redux";
import IndexContainer  from "./containers/IndexContainer";
import {applyMiddleware, createStore, compose} from "redux";
import * as logger from 'redux-logger';

import {Route, Switch} from "react-router";


const store = createStore(reducers, compose(
    applyMiddleware(thunk, logger()),
    // applyMiddleware(thunk),
    window["devToolsExtension"] ? window["devToolsExtension"]() : f => f
));


ReactDOM.render(
    <Provider store={store}>
        <IndexContainer/>
    </Provider>
    ,
    document.getElementById('app')
)