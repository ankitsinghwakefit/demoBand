import React, {Component} from 'react';
import { Link as RouteLink } from "react-router-dom";
import landingStyle from '../styles/landingPage.module.css';
import Header from '../commonViews/Header';
import Footer from '../commonViews/Footer';

function landingPage(){
    return(
        <div className={landingStyle.landingContainer}>
          <Header />
          <div className={landingStyle.bodyContainer}>
            <div className={landingStyle.innerBodyContainer}>
                <p className={landingStyle.para}>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <RouteLink className={landingStyle.btn} to="/signin">
                    {"LogIn"}
                </RouteLink>
              </div>
              <div className={landingStyle.imageContainer}>
                  <div>
                    <div><img src='https://www.w3schools.com/w3images/bandmember.jpg'></img></div>
                    <h4>Singer</h4>
                  </div>
              </div>
            </div>
          <Footer />
        </div>
    )
}

export default landingPage