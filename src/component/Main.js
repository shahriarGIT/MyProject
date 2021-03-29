import React from 'react';
import Header from './header/Header.js';
import Home from './home/Home.js';
import Body from './vocabGenerator/Body.js';
import VocabForm from './vocabForm/VocabForm.js';
import VocabTable from './vocabTable/VocabTable.js';

import { Route, Redirect, Switch } from 'react-router-dom';

const Main = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Start Learning" component={Body} />
                    <Route path="/Input Vocab" component={VocabForm} />
                    <Route path="/Vocab List" component={VocabTable} />
                    <Redirect to="/Home" />
                </Switch>

            </div>
        </div>
    )
}

export default Main;