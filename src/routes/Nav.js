import React from 'react';
import {Route ,Switch} from 'react-router-dom';
import '../App.css';
import About from '../Component/About';
import Home from '../Component/Home';
import Topic from '../Component/Topic';

function Nav() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/topic" component={Topic}/>
        </Switch>
    )
}

export default Nav;