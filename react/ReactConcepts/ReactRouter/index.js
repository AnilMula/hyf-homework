import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import Home from './Home';
import Users from './Users';
import User from './User';

export default function index() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/user/:id">
            <User></User>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
/* 
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
      <REF></REF> */
