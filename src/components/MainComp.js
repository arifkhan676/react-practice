import React, { Component } from 'react';
import BookSomahar from "./lists/Booklist"
import Books from './representionaComp/Books';
import './AllCSSFile/App.css'
import NewBook from './lists/NewBook';

class MainComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: BookSomahar,
            showBooks: true,
            clicktoBuy: null
        }

    }

    clickBuy = (bookid) => {
        // console.log(bookid);
        const Newbook = this.state.book.filter((book) => book.id === bookid)[0];
        this.setState({
            clicktoBuy: Newbook
        })
    }


    toggleChange = () => {
        this.setState({ showBooks: !this.state.showBooks })
    }

    render() {
        let book = null;
        if (this.state.showBooks) {
            book = <Books book={this.state.book} clickBuy={this.clickBuy} />
        }



        return (
            <div className="AppY">
                <h1>Hello Arif</h1>
                <button onClick={this.toggleChange} className='toggle'   > toggle to booklist </button>
                {book}
                <NewBook selectBook={this.state.clicktoBuy} />
            </div>
        );
    }
}


export default MainComp;