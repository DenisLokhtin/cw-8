import React from 'react';
import Quote from "../Quote/Quote";
import {NavLink, Route, Switch} from "react-router-dom";
import AddQuote from "../AddQuote/AddQuote";
import './Home.css';

const header = () => {
    switch (window.location.pathname) {
        case '/star-wars':
            return 'Star Wars';
        case '/famous-people':
            return 'Famous people';
        case '/saying':
            return 'Saying';
        case '/humor':
            return 'Humor';
        case '/motivational':
            return 'Motivational';
        default: return 'Home'
    }
};

const Home = (props) => (
    <div className="additional-cont">
        <h2 className="header-category">{header()}</h2>
        <div
            className="container">

            <div className="container-inner">

                <Quote/>

                <div className="categories">
                    <NavLink to="/">All</NavLink>
                    <NavLink to="/star-wars">Star Wars</NavLink>
                    <NavLink to="/famous-people">Famous people</NavLink>
                    <NavLink to="/saying">Saying</NavLink>
                    <NavLink to="/humor">Humor</NavLink>
                    <NavLink to="/motivational">Motivational</NavLink>
                </div>

            </div>

        </div>
    </div>
);

export default Home;