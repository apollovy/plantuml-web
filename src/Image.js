import React, {Component} from 'react';

class Image extends Component {

    render() {
        return (
            <img src={this.props.url} alt='' hidden={!this.props.url}/>
        )
    }
}

export default Image;