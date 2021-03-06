import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./Components/Deshboard";
import SignIn from "./Components/SignIn";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/deshboard" component={Dashboard}></Route>
    </div>
  );
}

export default App;
