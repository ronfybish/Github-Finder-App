import React from 'react';
import theme from './components/utils/Theme'
import {ThemeProvider} from '@material-ui/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GithubState>
      <AlertState>
        <Router>
          <div >
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
    </ThemeProvider>
  );
};

export default App;
