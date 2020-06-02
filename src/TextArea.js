import React, {PureComponent} from "react";

export default class TextArea extends PureComponent {
    initialText: string;
    onChange: (text: string) => null;

    _textArea: HTMLInputElement;

    render() {
        return (
            <textarea onChange={e => this.props.onChange(e, this._textArea)}
                      defaultValue={this.props.initialText}
                      ref={c => (this._textArea = c)}
                      onKeyUp={e => this.handleKeyUp(e)}
                      onKeyDown={e => this.handleKeyDown(e)}
            />
        )
    }

    componentDidMount() {
        this.resize(this._textArea);
    }

    // noinspection JSMethodCanBeStatic
    handleKeyUp(e: Event) {
        e.preventDefault();

        this.resize(this._textArea);
    }

    // noinspection JSMethodCanBeStatic
    handleKeyDown(e: KeyboardEvent) {
        const modifierPressed = [e.ctrlKey, e.metaKey, e.shiftKey].some(
            key => key);
        if (e.key === "Enter" && modifierPressed) {
            e.preventDefault();
            this.props.onSubmit(e);
        }
    }

    // noinspection JSMethodCanBeStatic
    resize(textArea) {
        const style = textArea.style;
        style.height = "1px";
        style.height = (25 + textArea.scrollHeight) + "px";
    }
}