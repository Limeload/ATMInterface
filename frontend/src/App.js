import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ATMLogin from "./components/ATMLogin";
import ATMRegister from "./components/ATMRegister";
import Welcome from "./components/Welcome";
import FetchUser from "./components/FetchUser";
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
                        <FetchUser />
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
