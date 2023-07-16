import React from 'react'

const NewBook = ({ selectBook }) => {
    return selectBook && (
        <div>
            <h3> {selectBook.Bookname} </h3>
            <h3> {selectBook.Author} </h3>
        </div>
    )
}

export default NewBook
