import React from 'react';
import './App.css';

const Book = (props) => {
    const date = new Date().getFullYear();
    return (
        <div className="App">
            <h1> Bookname: {props.Bookname}  </h1>
            <h1> Author : {props.Author} </h1>
            <p>  Published in : {date} </p>
            <button style={{ color: "red" }} onClick={props.Name} > Change  </button>
        </div>
    );
}

export default Book; 