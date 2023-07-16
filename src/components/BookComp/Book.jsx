import React from 'react';
import '../AllCSSFile/App.css';

const Book = ({ book, clickBuy }) => {
    const date = new Date().getFullYear();

    return (
        <div className="AppX" onClick={() => clickBuy(book.id)} >
            <h3> Bookname: {book.Bookname}  </h3>
            <h3> Author : {book.Author} </h3>
            <p>  Published in : {date} </p>
            <button  > New Book </button>

        </div>
    );
}

export default Book;

