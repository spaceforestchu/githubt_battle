"use strict";

var React = require('react');
import Popular from './Popular';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
//Switch will only render on specific route
var Switch = ReactRouter.Switch;
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={function() {
                return <p>Not Found</p>
              }}/>
          </Switch>
        </div>
      </Router>

    )
  }
 }

export default App;
