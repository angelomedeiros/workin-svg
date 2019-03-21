import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "./svgStyles.scss";
import brain from "./brain-clipart.svg";
import FormasBasicas from "./FormasBasicas";
import Idea from "./Idea";
import StarBucks from "./StarBucks";

const ContainerFormasBasicas = () => (
  <div className="App-header">
    {/* Scg na tag imaage */}
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div>
      {/* Svg inline */}
      <svg width="300" height="100" preserveAspectRatio="none">
        <circle r="25" cx="150" cy="50" />
      </svg>
      <svg width="300" height="100" viewBox="0 0 600 300">
        <circle r="25" cx="150" cy="50" />
      </svg>
      {/* Formas básicas */}
      <FormasBasicas />
    </div>
  </div>
);

const EstilizandoSvg = () => (
  <div className="container">
    <svg>
      <use xlinkHref={`${brain}#brain`} fill="green" />
    </svg>
    <svg viewBox="0 0 500 150">
      <circle className="circle circle-1" r="55" cx="200" cy="75" />
      <circle className="circle circle-2" r="55" cx="250" cy="75" />
      <circle className="circle circle-3" r="55" cx="300" cy="75" />
    </svg>
    <Idea />
    <StarBucks />
  </div>
);

const App = () => (
  <div className="App">
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/formas-basicas">Formas básicas</Link>
          </li>
          <li>
            <Link to="/estilizando-svg">Estilizando o svg</Link>
          </li>
        </ul>
      </nav>
      <Route path="/formas-basicas" component={ContainerFormasBasicas} />
      <Route path="/estilizando-svg" component={EstilizandoSvg} />
    </Router>
  </div>
);

export default App;
