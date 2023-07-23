import React, { Component } from 'react';
import Book from '../BookComp/Book';

class Books extends Component {

    render() {
        return (
            this.props.book.map((item, index) => {
                return (
                    <Book
                        book={item}
                        key={item.id}
                        clickBuy={this.props.clickBuy}
                    />
                )
            })
        )
    }
}
export default Books;