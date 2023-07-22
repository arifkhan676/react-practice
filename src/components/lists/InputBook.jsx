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
            inputVal: ""
        }
    }

    handleChange = (e) => {
        const val = e.target.value;
        this.setState(
            { inputVal: val }
        );
    }

    render() {
        return (

            <div>
                <form action="">

                    <label > Bookname </label>
                    <br />
                    <input type="text" name='Bookname' onChange={() => { this.handleChange() }} value={this.inputVal} />
                    <br />
                    <p>{this.inputVal}</p>
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

            </div >

        )
    }

}

export default InputBook


