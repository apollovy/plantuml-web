import React, {Component} from 'react';
import './UrlField.css'

class UrlField extends Component {
    render() {
        return (
            <div className="url-wrapper">
                <div className="url-input">
                    <a href={this.props.url}
                       className="url-input"
                       target="_blank">{this.props.url}</a>
                </div>
            </div>
        )
    }
}

export default UrlField;