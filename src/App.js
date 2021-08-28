import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosApi from "./axiosApi";
import axios from 'axios';
import Quote from "./components/Quote/Quote";
import AddQuote from "./components/AddQuote/AddQuote";
import './App.css';
import Home from "./components/Home/Home";

function App() {
    const categories = [
        {title: 'All', id: '/'},
        {title: 'Star Wars', id: 'star-wars'},
        {title: 'Famous people', id: 'famous-people'},
        {title: 'Saying', id: 'saying'},
        {title: 'Humor', id: 'humor'},
        {title: 'Motivational', id: 'motivational'},
    ];

    const [quotes, setQuotes] = useState([]);

    const getQuotes = async (additionalURL) => {
        let URL = '/Quotes.json' + additionalURL;
        try {
            await axiosApi.get(URL).then(response => {
                if (response.data !== null) {
                    const quotes = [];
                    for (const [key, value] of Object.entries(response.data)) {
                        value.id = key;
                        quotes.push(value);
                    }
                    setQuotes(quotes)
                }
            });
        } catch (e) {
            console.log(e)
    }
}

useEffect(() => {
    getQuotes()
}, [])

return (
    <div>
        {console.log(quotes)}
        <BrowserRouter>
            <div className="navigation">
                <div className="header">
                    <NavLink to="/">Quotes Central</NavLink>
                </div>
                <div className="additional-nav">
                    <NavLink to="/">Quotes</NavLink>
                    <NavLink to="/add-quote">Submit new Quote</NavLink>
                </div>
            </div>

            <Switch>
                <Route exact path="/" render={() => <Home/>}/>
                <Route path="/add-quote" component={AddQuote}/>
                <Route path="/star-wars" component={Home}/>
                <Route path="/famous-people" component={Home}/>
                <Route path="/saying" component={Home}/>
                <Route path="/humor" component={Home}/>
                <Route path="/motivational" component={Home}/>
            </Switch>

        </BrowserRouter>
    </div>
);
}

export default App;
