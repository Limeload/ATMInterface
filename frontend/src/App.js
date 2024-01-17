import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import BankUsers from './components/BankUsers';
import ATMLogin from "./components/ATMLogin";
import ATMRegister from "./components/ATMRegister";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Welcome />
                  </Route>
                  <Route path="/login">
                      {/*{(!currentUser) ? <LoginForm onLogin={setCurrentUser}/> : null}*/}
                      <ATMLogin />
                  </Route>
                  <Route exact path='/register'>
                      <ATMRegister />
                  </Route>
                  <Route path="/dashboard">
                      {/*<Profile currentUser={currentUser} onLogout={onLogout}/>*/}
                      <Dashboard />
                  </Route>
              </Switch>
          </Router>

      </div>
  );
}

export default App;
