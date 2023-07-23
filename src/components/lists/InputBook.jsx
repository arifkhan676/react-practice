import React, { Component } from 'react'

class InputBook extends Component {

    /* const [inputVal, setInput] = useState();
 
     const handleChange = (e) => {
         const val = e.target.value;
         setInput(val)
     }
     console.log(inputVal); */
    constructor(props) {
        super(props)
        this.state = {
            Bookname: "",
            Writer: "",
            Description: ""
        }
        this.handleChange = this.handleChange.bind(this);
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

        console.log(this.state)
        e.preventDefault()

    }


    render() {
        return (

            <div>
                <form action="" onSubmit={this.handleClick}>

                    <label > Bookname </label>
                    <br />
                    <input type="text" name='Bookname' onChange={this.handleChange} value={this.Bookname} />
                    <br />

                    <label > Writer </label>
                    <br />
                    <input type="text" name='Writer' onChange={this.handleChange} value={this.Writer} />
                    <br />
                    <label > Description </label>
                    <br />
                    <input type="text" name='Description' onChange={this.handleChange} value={this.Description} />
                    <br />
                    <input type="submit" />
                </form>

            </div >

        )
    }

}

export default InputBook


