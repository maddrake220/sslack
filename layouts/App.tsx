import Signup from '@pages/Signup';
import Login from '@pages/Login';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
    </Switch>
  );
};
export default App;
