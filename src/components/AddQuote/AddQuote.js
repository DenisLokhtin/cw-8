import React from 'react';
import './AddQuote.css'

const AddQuote = (props) => (
    <div className="add-quote">
        <h2>submit new quote</h2>
        <form>
            <p>Category</p>
            <select>
                <option>Star Wars</option>
                <option>Famous People</option>
                <option>Saying</option>
                <option>Humor</option>
                <option>Motivational</option>
            </select>
            <p>Author</p>
            <input type="text"/>
            <p>Quote text</p>
            <textarea cols="120" rows="10"></textarea>
            <div>
                <button className="btn-save">Save</button>
            </div>
        </form>
    </div>
);

export default AddQuote;