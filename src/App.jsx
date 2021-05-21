import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Switch, Route } from "react-router-dom";
import Contact from './pages/contact';
import About from './pages/about';
import ToDo from './pages/todo';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ToDo} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/todo/detail/:id" component={TaskDetail} />
        <Route path="/todo/edit/:id" component={ToDo} />
        <Redirect to="/not-found" />  */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
