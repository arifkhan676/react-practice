import React, { Component } from 'react';
import './App.css';
import Book from './Book';



class App extends Component {

  state = {
    book: [
      { id: 1, Bookname: "Rachel", Author: "Micel" },
      { id: 2, Bookname: "Paradoxical", Author: "Ariof Azad" },
      { id: 3, Bookname: "Software", Author: "Ahmed Shamim" }
    ],
    showBooks: true
  }

  changeInput = (e, index) => {
    const bookSet = {
      ...this.state.book[index]
    }
    bookSet.Bookname = e.target.value;
    const book = [...this.state.book]
    book[index] = bookSet;
    this.setState({ book: book })
  }

  deleteChange = index => {
    const deleteBooks = this.state.book;
    deleteBooks.splice(index, 1);
    this.setState({
      book: deleteBooks
    })
  }

  toggleChange = () => {
    this.setState({ showBooks: !this.state.showBooks })
  }


  render() {

    const BookState = this.state.book;
    let book = null;
    if (this.state.showBooks) {
      book = BookState.map((item, index) => {
        return (
          <Book
            Bookname={item.Bookname}
            Author={item.Author}
            delete={() => this.deleteChange(index)}
            key={item.id}
            inputName={(e) => this.changeInput(e, index)}
          />
        );
      });
    }



    return (
      <div className="App">
        <h1>Hello Arif</h1>
        <button onClick={this.toggleChange} > toggle to booklist </button>

        {book}
      </div>
    );
  }

}



export default App;
