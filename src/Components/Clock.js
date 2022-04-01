import {Component} from "react";

class Clock extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = { date: new Date() }
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    };
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )

    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;

