
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}


export default App;
