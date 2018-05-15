import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import StartPage from '../pages/startpage';
import TeamPage from '../pages/teampage';
import JoinPage from '../pages/joinpage';
import NotFound from '../pages/notfoundpage';

import Header from '../header/header';
import NavBar from '../navbar/navbar';

import './App.scss';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="pagecontainer">
          <div>
            <Header />
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/join" component={JoinPage} />
            <Route path="/events/:id?" component={StartPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
