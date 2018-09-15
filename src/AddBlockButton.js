import React, {Component} from 'react';
import './AddBlockButton.css'

class AddBlockButton extends Component {
    onClick: (e: Event) => null;

    render() {
        return (
            <button
                onClick={e => this.props.onClick(e)}
                name="AddBlockButton"
            >Add another form</button>
        )
    }
}

export default AddBlockButton;