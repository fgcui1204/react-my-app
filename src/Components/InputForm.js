import React from "react";

class InputForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert("submit content: "+ this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input type={"text"} value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type={"submit"} value={"提交"} />
            </form>)
    }
}

export default InputForm