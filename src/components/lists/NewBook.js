import React, { useState } from 'react'

const NewBook = ({ selectBook }) => {

    const [inputVal, setInput] = useState();

    const handleChange = (e) => {
        const val = e.target.value;
        setInput(val)
    }
    console.log(inputVal);

    return selectBook && (

        <div>
            <h3> {selectBook.Bookname} </h3>
            <h3> {selectBook.Author} </h3>

            <form action="">

                <label > Bookname </label>
                <br />
                <input type="text" name='Bookname' onChange={handleChange} value={inputVal} />
                <br />
                <label > Writer </label>
                <br />
                <input type="text" name='Writer' />
                <br />
                <label > Description </label>
                <br />
                <input type="text" name='Description' />
                <br />
                <input type="submit" />
            </form>

        </div>

    )
}

export default NewBook


