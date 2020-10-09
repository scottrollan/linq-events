import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Register from './components/pages/Register';
import Agenda from './components/pages/Agenda';
import Presenters from './components/pages/Presenters';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/Register" exact component={Register}></Route>
          <Route path="/Agenda" exact component={Agenda}></Route>
          <Route path="/Presenters" exact component={Presenters}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
