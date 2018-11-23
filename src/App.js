import React, { Component } from "react";
import Index from "./pages/index";
import Contact from "./pages/contact";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        data-spy="scroll"
        data-target="#navbar"
        data-offset="30"
      >
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/contact/" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
