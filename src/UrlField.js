import React, {Component} from 'react';
import './UrlField.css'

class UrlField extends Component {
    render() {
        return (
            <div className="url-wrapper">
                <div className="url-copy-button">
                    <button onClick={e => this.handleButtonClick(e)}>Copy
                    </button>
                </div>
                <div className="url-input">
                    <input type="text" name="url-input" value={this.props.url}
                           readOnly className="url-input"/>
                </div>
            </div>
        )
    }

    handleButtonClick(event: Event) {
        let wrapper = event.target.parentNode.parentNode;
        wrapper.querySelector('[name=url-input]').select();
        document.execCommand("copy");
    }
}

export default UrlField;