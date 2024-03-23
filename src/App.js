// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Product/Home";

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route path="/home">
          {isLoggedIn ? <Home /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
