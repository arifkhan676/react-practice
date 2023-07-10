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
        { Bookname: bookname, Author: "Ahmed Shamim" },
        { Bookname: "X Company", Author: "Arif Bro" }
      ],
      otherProp: "I am some other props"
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Arif</h1>
        <button onClick={() => this.onChange("Rich Dad Poor Dad")}  > Click to change </button>
        <Book Bookname={this.state.book[0].Bookname} Author={this.state.book[0].Author} />
        <Book Bookname={this.state.book[1].Bookname} Author={this.state.book[1].Author} Name={this.onChange} />

      </div>
    );
  }

}



export default App;
