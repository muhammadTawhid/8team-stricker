import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ShowDetails from "./Components/ShowDetails/ShowDetails";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team/:name">
          <ShowDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
