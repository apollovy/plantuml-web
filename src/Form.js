import React, {Component} from 'react';
import plantumlEncoder from "plantuml-encoder";
import './Form.css'
import DBManager from "./DBManager";

class Form extends Component {
    defaultText = '';

    plantuml_url: string;
    onSubmit: (x: string) => void;
    blockId: number;
    dbManager: DBManager;
    text: string;

    constructor(props) {
        super(props);

        this.state = {
            form: (
                <form onSubmit={e => this.handleSubmit(e)}>
                    <textarea onChange={e => this.handleChange(e)}
                              defaultValue={props.text}/>
                    <input type="submit"/>
                </form>
            ),
            text: this.defaultText,
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
        const target = event.target;
        const text = target.value;

        this.setState({text: text});
        this.props.dbManager.update(this.props.blockId, text);

        if (target.scrollTop) {
            target.style.height = target.scrollHeight + 20 + 'px';
        }

    }
}

export default Form;