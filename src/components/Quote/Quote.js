import React from 'react';
import './Quote.css'

const Quote = (props) => (
    <div className="quote">
        <div className="quote-redact">
            <span>&#9998;</span>
            <span>&#10006;</span>
        </div>
        <p><span className="commas">"</span>  Text <span className="commas">"</span></p>
        <p><span className="commas">—</span> Author</p>
    </div>
);

export default Quote;