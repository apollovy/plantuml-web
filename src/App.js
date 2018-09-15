import React, {Component} from 'react';
import Block from './Block'
import AddBlockButton from './AddBlockButton'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blocks: [<Block/>],
            addBlockButton: <AddBlockButton onClick={() => this.addBlock()}/>
        };
    }

    render() {
        return [
            this.state.blocks,
            this.state.addBlockButton,
        ]
    }

    addBlock() {
        this.setState((state) => {
            const block = <Block/>;
            const blocks = state.blocks.concat([block]);
            return {
                blocks: blocks,
            }
        })
    }
}

export default App;