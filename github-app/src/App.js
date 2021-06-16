import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-dark" style={{backgroundColor: "#2d2d34", padding:"30px"}}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand"><b>Github Repositories</b></Link>
          </div>
        </nav>
      <div>     
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <footer
      style={{textAlign: "right",
      padding: "30px",
      backgroundColor: "#2d2d34",
      color: "white",
      marginTop: "15vh"}}
      >
        <b> by: ciniaeleonora</b>
        <br />
      </footer>
    </Router>
    </div>
  );
}

export default App;
