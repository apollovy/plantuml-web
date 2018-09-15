import React, {Component} from 'react';
import Block from './Block'
import AddBlockButton from './AddBlockButton'
import DBManager from './DBManager'

class App extends Component {
    dbManager = new DBManager();
    defaultText = Block.defaultText;

    constructor(props) {
        super(props);

        const blocks = this.getBlocks();

        this.state = {
            blocks: blocks,
            addBlockButton: <AddBlockButton onClick={() => this.addBlock()}
                                            key="1"/>
        };
    }

    render() {
        return [
            this.state.blocks,
            this.state.addBlockButton,
        ]
    }

    addBlock() {
        const blockId = this.dbManager.create(this.defaultText);
        this.setState((state) => {
            const block = this.buildBlock(blockId, this.defaultText);
            const blocks = state.blocks.concat([block]);
            return {
                blocks: blocks,
            }
        });
    }

    getBlocks() {
        const maybe_texts = this.dbManager.readAll();

        let texts;
        if (maybe_texts === null) {
            texts = {};
        } else {
            texts = maybe_texts;
        }

        return Object.entries(texts).map((currentValue) => {
            const [blockId, text] = currentValue;
            return this.buildBlock(blockId, text)
        });
    }

    buildBlock(blockId, text) {
        return <Block blockId={blockId} text={text} key={blockId}
                      dbManager={this.dbManager}/>;
    }
}

export default App;