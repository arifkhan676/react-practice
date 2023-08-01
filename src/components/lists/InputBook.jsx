import axios from 'axios';
import React, { Component, createRef } from 'react'




class InputBook extends Component {

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(response => console.log(response.data))

    }

    /* const [inputVal, setInput] = useState();
 
     const handleChange = (e) => {
         const val = e.target.value;
         setInput(val)
     }
     console.log(inputVal); */
    constructor(props) {
        super(props)
        this.Bookname = createRef();
        this.Writer = createRef();
        this.Description = createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            { [name]: value }
        );
    }
    handleClick = (e) => {

        console.log(this.Bookname.current.value);
        console.log(this.Writer.current.value);
        console.log(this.Description.current.value);


        e.preventDefault()

    }


    render() {
        return (

            <div>
                <form action="" onSubmit={this.handleClick}>

                    <label > Bookname </label>
                    <br />
                    <input type="text" name='Bookname' ref={this.Bookname} />
                    <br />
                    <label > Writer </label>
                    <br />
                    <input type="text" name='Writer' ref={this.Writer} />
                    <br />
                    <label > Description </label>
                    <br />
                    <input type="text" name='Description' ref={this.Description} />
                    <br />
                    <input type="submit" />
                </form>

            </div >

        )
    }

}

export default InputBook


