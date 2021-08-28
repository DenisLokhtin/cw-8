import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosApi from "./axiosApi";
import AddQuote from "./components/AddQuote/AddQuote";
import Home from "./components/Home/Home";
import EditQuote from "./components/EditQuote/EditQuote";
import './App.css';


function App(props) {
    const categories = [
        {title: 'All', id: '/'},
        {title: 'Star Wars', id: 'star-wars'},
        {title: 'Famous people', id: 'famous-people'},
        {title: 'Saying', id: 'saying'},
        {title: 'Humor', id: 'humor'},
        {title: 'Motivational', id: 'motivational'},
    ];

    const [quotes, setQuotes] = useState([]);

    const [newQuote, setNewQuote] = useState({
        category: 'star-wars',
        author: '',
        text: '',
    })

    const changeCategory = (value) => {
        console.log(value)
        setNewQuote({...newQuote, category: value.toLowerCase()})
    }

    const changeAuthor = (value) => {
        console.log(value)
        setNewQuote({...newQuote, author: value})
    }

    const changeText = (value) => {
        console.log(value)
        setNewQuote({...newQuote, text: value})
    }

    const editQuote = async (event, id) => {
        event.preventDefault()
        try {
            await axiosApi.put('/Quotes/' + id + '.json', newQuote)
        } finally {
            setNewQuote({
                category: '',
                author: '',
                text: '',
            })
            window.location.replace('/')
        }
    }

    const addQuote = async event => {
        event.preventDefault()
        try {
            await axiosApi.post('/Quotes.json', newQuote)
        } finally {
            setNewQuote({
                category: '',
                author: '',
                text: '',
            })
            window.location.replace('/')
        }
    }

    const getQuote = async (id) => {
        let URL = '/Quotes/';
        try {
            await axiosApi.get(URL + id + '.json').then(response => {
                if (response.data !== null) {
                    console.log(response.data)
                    setNewQuote(response.data)
                }
            });
        } catch (e) {
            console.log(e)
        }
    }


    const getQuotes = async (additionalURL) => {
        let URL = '/Quotes.json';
        additionalURL = additionalURL.replace(/-/g, ' ');
        if (additionalURL !== '/') {
            URL = URL + `/?orderBy="category"&equalTo="${additionalURL.substr(1)}"`
        }
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

    const deleteQuote = async (id) => {
        console.log(id)
        let URL = '/Quotes/' + id + '.json';
        try {
            await axiosApi.delete(URL).then(response => {
                getQuotes(window.location.pathname)
            });
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        setInterval(() => {
            getQuotes(window.location.pathname);
        }, 2000)
    }, [window.location.pathname])

    return (
        <div>
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
                    <Route exact path="/" render={() => <Home deleteQuote={(id) => deleteQuote(id)} quotes={quotes}/>}/>
                    <Route path="/add-quote" render={() => <AddQuote changeCategory={(value) => changeCategory(value)}
                                                                     addQuote={addQuote}
                                                                     changeAuthor={(value) => changeAuthor(value)}
                                                                     changeText={(value) => changeText(value)}/>}/>
                    <Route path="/edit-quote/:id"
                           render={() => <EditQuote changeCategory={(value) => changeCategory(value)}
                                                    newQuote={newQuote}
                                                    editQuote={(event, id) => editQuote(event, id)}
                                                    getQuote={(id) => getQuote(id)}
                                                    changeAuthor={(value) => changeAuthor(value)}
                                                    changeText={(value) => changeText(value)}/>}/>
                    <Route path="/star-wars"
                           render={() => <Home deleteQuote={(id) => deleteQuote(id)} quotes={quotes}/>}/>
                    <Route path="/famous-people"
                           render={() => <Home deleteQuote={(id) => deleteQuote(id)} quotes={quotes}/>}/>
                    <Route path="/saying" render={() => <Home deleteQuote={(id) => deleteQuote(id)} quotes={quotes}/>}/>
                    <Route path="/humor" render={() => <Home deleteQuote={(id) => deleteQuote(id)} quotes={quotes}/>}/>
                    <Route path="/motivational"
                           render={() => <Home deleteQuote={(id) => deleteQuote(id)} quotes={quotes}/>}/>
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default App;
