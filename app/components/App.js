import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Popular from './Popular';
import Battle from './Battle';
import Home from './Home';
import Results from './Results';

export default function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/popular' component={Popular} />
          <Route exact path='/battle' component={Battle} />
          <Route exact path='/battle/results' component={Results} />
          <Route render={function () {
            return <p>404: Not Found</p>
          }} />
        </Switch>
      </div>
    </Router>
  )
}