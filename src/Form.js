import React, {Component} from 'react';
import './Form.css'
import DBManager from "./DBManager";

class Form extends Component {
    onSubmit: (x: string) => void;
    blockId: number;
    dbManager: DBManager;
    text: string;

    constructor(props) {
        super(props);

        const text = props.text;
        this.state = {
            form: (
                <form onSubmit={e => this.handleSubmit(e)}>
                    <textarea onChange={e => this.handleChange(e)}
                              defaultValue={text}
                              onKeyUp={e => this.textAreaAdjust(e)}/>
                    <input type="submit"/>
                </form>
            ),
            text: text,
        };
    }

    render() {
        return this.state.form
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }

    handleChange(event: Event) {
        const target = event.target;
        const text = target.value;

        this.setState({text: text});
        this.props.dbManager.update(this.props.blockId, text);
    }

    // noinspection JSMethodCanBeStatic
    textAreaAdjust(e: Event) {
        e.preventDefault();

        const textArea = e.target;
        textArea.style.height = "1px";
        textArea.style.height = (25 + textArea.scrollHeight) + "px";
    }
}

export default Form;