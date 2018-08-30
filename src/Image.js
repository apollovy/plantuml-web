import React, {Component} from 'react';

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: props.url || '',
        };
    }

    render() {
        return (
            <img src={this.state.url} alt='' hidden={!this.state.url}/>
        )
    }
}

export default Image;