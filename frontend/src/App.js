//import logo from './logo.svg';
import './App.css';
import BankUsers from './components/BankUsers';
function App() {
  return (
    <div className="container-fluid">
        <nav>
            <div className="nav-wrapper center-align">
                <a href="/" className="align-content-center"> Users </a>
            </div>
        </nav>
        <div className="row">
            <BankUsers />
        </div>
    </div>
  );
}

export default App;
