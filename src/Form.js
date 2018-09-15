import React, {Component} from 'react';
import './Form.css'
import DBManager from "./DBManager";
import TextArea from "./TextArea";

class Form extends Component {
    onSubmit: (x: string) => void;
    blockId: number;
    dbManager: DBManager;
    text: string;
    destroy: (e: Event) => null;

    constructor(props) {
        super(props);

        this.state = {
            text: props.text,
        };
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                    <TextArea
                        initialText={this.props.text}
                        onChange={e => this.handleTextAreaChange(e)}
                    />
                <input type="submit"/>
                <button
                    onClick={e => this.props.destroy(e)}
                    key="Delete">Delete
                </button>
            </form>
        )
    }

    handleTextAreaChange(event: Event) {
        const target = event.target;
        const text = target.value;

        this.setState({text: text});
        this.props.dbManager.update(this.props.blockId, text);
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }
}

export default Form;