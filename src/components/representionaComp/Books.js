import React, { Component } from 'react';
import Book from '../BookComp/Book';

class Books extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
    }

    componentDidMount() {
        console.log("BookList componentDidMount!");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("BookList shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    componentDidUpdate() {
        console.log("BookList  componentDidUpdate");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("BookList get derived props", nextProps, prevState);
    }


    render() {
        console.log("BookList rendering called ");
        //const BookState = this.state.book;
        return (
            this.props.book.map((item, index) => {
                return (
                    <Book
                        Bookname={item.Bookname}
                        Author={item.Author}
                        delete={() => this.props.deleteChange(index)}
                        key={item.id}
                        inputName={(e) => this.props.changeInput(e, index)}
                    />
                )
            })
        )
    }
}
export default Books;