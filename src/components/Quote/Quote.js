import React from 'react';
import './Quote.css'

const Quote = (props) => (
    <div className="quote">
        <div className="quote-redact">
            <span>&#9998;</span>
            <span onClick={() => props.deleteQuote(props.id)}>&#10006;</span>
        </div>
        <p><span className="commas">"</span>  {props.text} <span className="commas">"</span></p>
        <p><span className="commas">—</span> {props.author}</p>
    </div>
);

export default Quote;