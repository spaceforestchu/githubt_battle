var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
//Switch will only render on specific route
var Switch = ReactRouter.Switch;
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            //need exact path to match other wise anything comes after will get rendered
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
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



======
//React router pass 3 props params, path and url

</div>
{
  playerOneImage && playerTwoImage &&
  <Link className='button' to={{
      pathname: match.url + '/results',
      search: `?playerOneName=` + playerOneName + `&playerTwoName=` + playerTwoName
    }}>
    Battle
  </Link>
}
</div>
