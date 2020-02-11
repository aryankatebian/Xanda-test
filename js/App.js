import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/layout/NavBar';
import '../sass/layout.scss';
import logo from '../assets/logo.png';
import Landing from './Components/pages/Landing';
import CheckOut from './Components/pages/CheckOut';

// Redux
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <NavBar />
          <img src={logo} className='logo' alt='Logo'></img>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/checkout' component={CheckOut} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
