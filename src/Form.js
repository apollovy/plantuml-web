import React, {Component} from 'react';
import plantumlEncoder from "plantuml-encoder";
import './Form.css'

class Form extends Component {
    plantuml_url: string;

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <form method="GET" onSubmit={this.handleSubmit}>
                <textarea onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }

    handleSubmit(event: Event) {
        event.preventDefault();

        let encoded = plantumlEncoder.encode(this.state.text);
        console.log(encoded);
        // let url = this.props.plantuml_url + '/png/' + encoded;

    }

    handleChange(event: Event) {
        this.setState({text: event.target.value})
    }
}

export default Form;