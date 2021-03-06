import React from 'react';
import theme from './components/utils/Theme'
import {ThemeProvider} from '@material-ui/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Product from './components/products/Product'
import Alert from './components/layout/Alert';
import Home from './components/pages/Home/Home';
import DevTools from './components/pages/DevTools/DevTools';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import ProducthuntState from './context/producthunt/ProducthuntState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GithubState>
    <ProducthuntState>
      <AlertState>
        <Router>
          <div >
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/devtools' component={DevTools} />
                <Route exact path='/user/:login' component={User} />
                <Route exact path='/product/:id' component={Product} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
      </ProducthuntState>
    </GithubState>
    </ThemeProvider>
  );
};

export default App;
