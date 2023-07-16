import React from 'react'

const NewBook = ({ selectBook }) => {
    const a = 3 + 4;
    return selectBook && (
        <div>
            <h3> {selectBook.Bookname} </h3>
            <h3> {selectBook.Author} </h3>
            <p>{a}</p>
        </div>
    )
}

export default NewBook


//some changes