import React, {Component} from 'react';
import './Form.css'
import DBManager from "./DBManager";
import TextArea from "./TextArea";

const HARDCODE = 'alice->bob';

class Form extends Component {
    onSubmit: (x: string) => void;
    blockId: number;
    dbManager: DBManager;
    text: string;
    destroy: (e: Event) => null;

    _text: string;
    _textArea: HTMLInputElement;

    constructor(props) {
        super(props);

        this._text = props.text
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                    <TextArea
                        initialText={this._text}
                        onChange={(e, ref) => this.handleTextAreaChange(e, ref)}
                        onSubmit={e => this.handleSubmit(e)}
                    />
                <input type="submit"/>
                <button
                    onClick={ this.handleAddTemplate }
                    key="Template"
                >Add template
                </button>
                <button
                    onClick={e => this.props.destroy(e)}
                    key="Delete"
                    className="Delete-button"
                >Delete
                </button>
            </form>
        )
    }

    handleAddTemplate = () => {
        console.log('update');
        this._textArea.value = HARDCODE;
        this._text = HARDCODE;
    }

    handleTextAreaChange(event: Event, ref: HTMLInputElement) {
        // noinspection JSUnresolvedVariable
        const text = event.target.value;

        this._text = text;
        this._textArea = ref;
        this.props.dbManager.update(this.props.blockId, text);
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        this.props.onSubmit(this._text);
    }
}

export default Form;