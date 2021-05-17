import React from 'react'
import { Route, Router, Switch } from "react-router-dom";
import Topbar from "./component/topbar";
import history from './history';
import Switcher from "./pages/switcher";
function App() {
  return (
    <div className="App">
     
     <Router history={history}>
        <Switch >
          {/* <Route path='/notFound' component={ErrorPage} />
          <Route path='/login' component={login} /> */}
          <Route path='/' component={Switcher} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
