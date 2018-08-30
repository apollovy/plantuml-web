import React, {Component} from 'react';
import plantumlEncoder from "plantuml-encoder";
import './Form.css'

class Form extends Component {
    plantuml_url: string;
    onSubmit: (x: string) => void;

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            form: (
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            ),
            text: '',
        };
    }

    render() {
        return this.state.form
    }

    handleSubmit(event: Event) {
        event.preventDefault();

        let encoded = plantumlEncoder.encode(this.state.text);
        this.props.onSubmit(this.props.plantuml_url + '/png/' + encoded);
    }

    handleChange(event: Event) {
        let target = event.target;

        if (target.scrollTop) {
            target.style.height = target.scrollHeight + 20 + 'px';
        }

        this.setState({text: target.value})
    }
}

export default Form;