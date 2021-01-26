import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListPost from "./components/post/ListPost";
import ViewPost from "./components/post/ViewPost";


function App() {
  return (
<div>
  <Router>
    <HeaderComponent />
    <div className="container">
      <Switch>
    <Route path = "/" exact component = {ListPost}/>
    <Route path = "/posts" component = {ListPost}/>
    <Route path = "/view-post/:id" component = {ViewPost}/>
      </Switch>
    </div>
    <FooterComponent/>
  </Router>
</div>

  );
}

export default App;
