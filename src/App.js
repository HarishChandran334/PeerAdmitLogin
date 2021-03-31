import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import X from './components/pages/X';
import Y from './components/pages/Y';
import Z from './components/pages/Z';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch >
          <Route path='/' exact component={Home} />
          <Route path='/X' exact component={X} />
          <Route path='/Y' exact component={Y} />
          <Route path='/Z' exact component={Z} />
          <Route path='/sign-up' exact component={SignUp}/>
       </Switch>
    </Router>
    </>
  );
}

export default App;
