import React, { useState } from 'react';
import './App.css';

const Book = (props) => {
    const date = new Date().getFullYear();

    const [inp, fullInp] = useState();
    const [getInp, FullgetInp] = useState([]);



    function changeInput(e) {
        const name = e.target.value;
        fullInp(name);
    }

    function handleclick(e) {
        FullgetInp(inp);
    }

    return (
        <div className="App">
            <h1> Bookname: {props.Bookname}  </h1>
            <h1> Author : {props.Author} </h1>
            <p>  Published in : {date} </p>
            <button style={{ color: "red" }} onClick={props.Name} > Change  </button>
            <input name="title" type="text" onChange={changeInput} />
            <button onClick={handleclick} >handleClick</button>
            <p> {inp} </p>
            <h3>{getInp}</h3>
        </div>
    );
}

export default Book; 