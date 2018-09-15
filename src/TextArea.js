import React, {Component} from "react";

export default class TextArea extends Component {
    initialText: string;
    onChange: (text: string) => null;

    _textArea: HTMLInputElement;

    render() {
        return (
            <textarea onChange={e => this.props.onChange(e)}
                      defaultValue={this.props.initialText}
                      ref={c => (this._textArea = c)}
                      onKeyUp={e => this.handleKeyUp(e)}/>
        )
    }

    componentDidMount() {
        this.resize(this._textArea);
    }

    // noinspection JSMethodCanBeStatic
    handleKeyUp(e: Event) {
        e.preventDefault();

        const textArea = e.target;
        this.resize(textArea);
    }

    // noinspection JSMethodCanBeStatic
    resize(textArea) {
        const style = textArea.style;
        style.height = (25 + textArea.scrollHeight + style.height) + "px";
    }
}