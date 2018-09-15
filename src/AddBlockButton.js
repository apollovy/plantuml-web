import React, {Component} from 'react';
import './AddBlockButton.css'

class AddBlockButton extends Component {
    onClick: (Event) => null;

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