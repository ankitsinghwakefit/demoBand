import React, {Component} from 'react';
import Header from '../commonViews/Header';
import Footer from '../commonViews/Footer';
import { Link as RouteLink } from "react-router-dom";

function deshboard(){
    return(
        <div>
            <Header />
            <div>
                <div>
                    Charts
                </div>
            </div>
            <RouteLink  to="/">
                    {"SignIn"}
                </RouteLink>
            <Footer />
        </div>
    )
}

export default deshboard