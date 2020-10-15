import React, {Component} from 'react';
import { Link as RouteLink } from "react-router-dom";
import Header from '../commonViews/Header';
import Footer from '../commonViews/Footer';
import signInStyle from '../styles/signIn.module.css';

function signIn(){
    return(
        <div>
            <Header />

            <div className={signInStyle.signInContainer}>

                <div className={signInStyle.formContainer}>
                    <div className={signInStyle.inputContainer}>
                        <input placeholder='Email' type='email'></input>
                    </div>
                    <div className={signInStyle.inputContainer}>
                        <input placeholder='Password' type='password'></input>
                    </div>
                <RouteLink className={signInStyle.button} to="/deshboard">
                    {"SignIn"}
                </RouteLink>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default signIn

