import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const EditQuote = (props) => {
    let {id} = useParams();

    useEffect(() => {
        console.log(id)
        props.getQuote(id)
    }, [id])

    return (
        <div className="add-quote">
            <h2>Quote</h2>
            <form onSubmit={(event) => props.editQuote(event, id)}>
                <p>Category</p>
                <select value={props.newQuote.category} name='category' onChange={(event => props.changeCategory(event.target.value))}>
                    <option>Star Wars</option>
                    <option>Famous People</option>
                    <option>Saying</option>
                    <option>Humor</option>
                    <option>Motivational</option>
                </select>
                <p>Author</p>
                <input name='author' value={props.newQuote.author} onChange={(event => props.changeAuthor(event.target.value))} type="text"/>
                <p>Quote text</p>
                <textarea name='text' value={props.newQuote.text} onChange={(event => props.changeText(event.target.value))} cols="120" rows="10"/>
                <div>
                    <button className="btn-save">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditQuote;