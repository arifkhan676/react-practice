import React, { Component } from 'react';
import './App.css';
import Book from './Book';



class App extends Component {

  state = {
    book: [
      { Bookname: "Rachel", Author: "Micel" },
      { Bookname: "Paradoxical", Author: "Ariof Azad" }
    ]
  }

  onChange = (bookname) => {
    this.setState({
      book: [
        { Bookname: "Software", Author: "Ahmed Shamim" },
        { Bookname: "X Company", Author: "Arif Bro" },
        { Bookname: "y Company", Author: " Bro" }
      ],
      otherProp: "I am some other props"
    })
  }

  render() {

    const BookState = this.state.book;
    const BookList = BookState.map((item) => {
      return (
        <Book Bookname={item.Bookname} Author={item.Author} />
      );
    });
    console.log(BookList);


    return (
      <div className="App">
        <h1>Hello Arif</h1>
        <button onClick={() => this.onChange("Rich Dad Poor Dad")}  > Click to change </button>
        {BookList}
      </div>
    );
  }

}



export default App;
