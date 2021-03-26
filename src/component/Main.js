import React from 'react';
import Header from './header/Header.js';
import Home from './home/Home.js';
import Body from './vocabGenerator/Body.js';
import VocabForm from './vocabForm/VocabForm.js';

import { Route, Redirect, Switch } from 'react-router-dom';

const Main = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Random Vocab" component={Body} />
                    <Route path="/Input Vocab" component={VocabForm} />
                    <Redirect to="/Home" />
                </Switch>

            </div>
        </div>
    )
}

export default Main;