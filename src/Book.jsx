import React from 'react';
import './App.css';

const Book = (props) => {
    const date = new Date().getFullYear();

    return (
        <div className="App">
            <button style={{ color: "red" }} onClick={props.delete} > Delete to the booklist </button>
            <h1> Bookname: {props.Bookname}  </h1>
            <h1> Author : {props.Author} </h1>
            <p>  Published in : {date} </p>
            <input type="text" onChange={props.inputName} />
            {/* <button onClick={handleclick} >change Book Name</button> */}

        </div>
    );
}

export default Book;

