import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// Routes
import Affiliates from './routes/Affiliates';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Affiliates} />
    </Switch>>
  </Router>
);

export default App;
