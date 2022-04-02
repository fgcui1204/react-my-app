import React from "react";

class SelectForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { value: 'apple'}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleSubmit(event) {
        this.setState({value: event.target.value})
    }

    handleOnChange(event) {
        alert("你选择的是： " + event.target.value)
        event.preventDefault()
    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>
                请选择
                <select value={this.state.value} onChange={this.handleOnChange}>
                    <option value={"orange"}>橘子</option>
                    <option value={"apple"}>苹果</option>
                    <option value={"banana"}>香蕉</option>
                </select>
            </label>

            <input type={"submit"} value={"submit"}/>
        </form>)
    }
}

export default SelectForm;