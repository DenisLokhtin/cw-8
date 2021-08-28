import React from 'react';
import './Quote.css'
import {Redirect, useHistory} from "react-router-dom";

const Quote = (props) => {
    let history = useHistory();
   return (
       <div className="quote">
           <div className="quote-redact">
            <span onClick={() => {
                console.log('click');
                history.replace('/edit-quote/' + props.id)
            }}>&#9998;</span>
               <span onClick={() => props.deleteQuote(props.id)}>&#10006;</span>
           </div>
           <p><span className="commas">"</span> {props.text} <span className="commas">"</span></p>
           <p><span className="commas">—</span> {props.author}</p>
       </div>
   )
}

export default Quote;