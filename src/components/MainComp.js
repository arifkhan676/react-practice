import React, { Component } from 'react';
import BookSomahar from "./lists/Booklist"
import Books from './representionaComp/Books';
class MainComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: BookSomahar,
            showBooks: true
        }
        console.log("main component constructor");
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
    componentDidMount() {
        console.log("MainComponent componentDidMount!");
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log("U state MainComp shouldComponentUpdate", nextProps, nextState);
        return true;
    }


    componentDidUpdate() {
        console.log("U state MainComp  componentDidUpdate");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Maincomp get derived props", nextProps, prevState);
    }


    render() {
        console.log("main comp rendering");
        let book = null;
        if (this.state.showBooks) {
            book = <Books book={this.state.book} deleteChange={this.deleteChange} changeInput={this.changeInput} />
        }

        //delete 

        return (
            <div className="App">
                <h1>Hello Arif</h1>
                <button onClick={this.toggleChange}   > toggle to booklist </button>

                {book}
            </div>
        );
    }
}


export default MainComp;