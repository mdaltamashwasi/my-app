import React, { Component } from "react";
import {userHistory} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends Component {
render() {
    return (
      <>
        <div class="menuClass">
          <a href="/home">Home</a>
          <div class="subMenuClass">
              <button class="subMenuClassbtn">About <i class="fa fa-caret-down"></i></button>
              <div class="submenu-content">
                <a href="/aboutSchool">About Our School</a>
                <a href="#compusTour">Compus Tour</a>
                <a href="#award">award</a>
              </div>
            </div> 
            <div class="subMenuClass">
              <button class="subMenuClassbtn">Services <i class="fa fa-caret-down"></i></button>
              <div class="submenu-content">
                <a href="#bring">Bus service</a>
                <a href="#deliver">Road Cross Services</a>
                <a href="#package">Take care service</a>
                <a href="#express">Tution Service</a>
              </div>
            </div> 
            <div class="subMenuClass">
              <button class="subMenuClassbtn">Partners <i class="fa fa-caret-down"></i></button>
              <div class="submenu-content">
                <a href="#link1">School Dress</a>
                <a href="#link2">Canteen</a>
                <a href="#link3">Sports Trainer</a>
                <a href="#link4">Yoga Trainer</a>
              </div>
            </div>
            <div class="subMenuClass">
              <button class="subMenuClassbtn">Student <i class="fa fa-caret-down"></i></button>
              <div class="submenu-content">
                <a href="#link1">Student Notification</a>
                <a href="#link2">Admission</a>
                <a href="#link3">Attaindance</a>
                <a href="#link4">Marks</a>
                <a href="#link4">Sports</a>
                <a href="#link2">Admission Enquiry</a>
                <a href="#link2">Pay tution Fee</a>
                <a href="#link2">Sylabus</a>
              </div>
            </div>

            <div class="subMenuClass">
              <button class="subMenuClassbtn">Administration<i class="fa fa-caret-down"></i></button>
              <div class="submenu-content">
                <a href="#link1">Principle Desk</a>
                <a href="#link2">Staff Details</a>
                <a href="#link3">School Decipline</a>
                <a href="#link4">Medical Facilities</a>
              </div>
            </div>
           <a href="#contact">Contact</a>
        </div>

        <div className="menuDiv"></div>
        <div className="menuDiv"></div>
        <div className="menuDiv"></div>
        
      </>
       
       
      );
}
    
}
export default Menu;