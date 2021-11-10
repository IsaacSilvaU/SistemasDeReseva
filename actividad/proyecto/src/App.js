import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Inicio } from "./components/inicio";
import { Login } from "./components/login";
import { Formulario } from "./components/formulario"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/formulario">Formulario</Link>
            </li>
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={"/inicio"}>
            <Inicio />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/formulario">
            <Formulario />
          </Route>
{/*           <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
