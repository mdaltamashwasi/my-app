import React from 'react';
import logo from './logo.svg';
import './App.css';
import Instructions from './Instructions';
import { BrowserRouter, Route } from 'react-router-dom';
//import Header from './app/component/header/Header';
import { Component } from "react";
import Menu from './app/component/menu/Menu';
import Sidebar from './app/component/menu/Sidebar';
import ProductDisplay from './app/component/product/ProductDisplay';
import Header from './app/component/menu/Header';
import AboutUs from './app/component/about/AboutUs';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import LoginComponent from './login/LoginComponent';
import HomeComponent from './home/HomeComponent';

// <Header/>
// <Sidebar />
// <ProductDisplay/>
//  <Instructions /> // using component
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomeComponent}></Route>
          <Route path='/home' Component={HomeComponent}></Route>
          <Route path='/aboutSchool' Component={AboutUs} ></Route>
          <Route path='/login' Component={LoginComponent} ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
}
export default App;
