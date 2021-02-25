import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Projects } from "./Projects";
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import ProjectDetail from './ProjectDetail';

const NotFound = () => {
  return <h1>404 Not found 🙃</h1>
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:projectId" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;