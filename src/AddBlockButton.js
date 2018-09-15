import React, {Component} from 'react';
import './AddBlockButton.css'

class AddBlockButton extends Component {
    render() {
        return (
            <button
                onClick={e => this.props.onClick(e)}
                id="AddBlockButton"
            >Add another form</button>
        )
    }
}

export default AddBlockButton;