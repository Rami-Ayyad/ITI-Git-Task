
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Movies from "./components/movies/movies";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
     
   

      <Router>
      <Navbar />
      <Movies/>
      <Switch>

      </Switch>
      </Router>
    </>
  );
}

export default App;
