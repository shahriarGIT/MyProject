import React from 'react';
import Header from './header/Header.js';
import Home from './home/Home.js';
import Body from './vocabGenerator/Body.js';

import { Route, Redirect } from 'react-router-dom';

const Main = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <Route path="/Home" component={Home} />
                <Route path="/Random Vocab" component={Body} />
                <Redirect to="/Home" />
            </div>
        </div>
    )
}

export default Main;