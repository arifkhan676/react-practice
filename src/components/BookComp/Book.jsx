import React from 'react';
import '../AllCSSFile/App.css';
//import { Link } from 'react-router-dom'

const Book = ({ book, clickBuy }) => {



    const date = new Date().getFullYear();

    return (

        <div className="AppX" onClick={() => clickBuy(book.id)} >
            <h3> Bookname: {book.Bookname}  </h3>
            <h3> Author : {book.Author} </h3>
            <p>  Published in : {date} </p>

        </div>

    );
}

export default Book;

