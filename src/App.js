import React, {Component} from 'react';
import Block from './Block'
import AddBlockButton from './AddBlockButton'
import DBManager from './DBManager'

class App extends Component {
    dbManager = new DBManager();
    defaultText = '';

    constructor(props) {
        super(props);

        const blocks = this.getBlocks();

        this.state = {
            blocks: blocks,
        };
    }

    render() {
        return [
            this.state.blocks.map(
                (block) => <Block
                    blockId={block.blockId}
                    text={block.text}
                    key={block.blockId}
                    dbManager={this.dbManager}
                    destroyMe={() => this.removeBlock(block.blockId)}
                />
            ),
            <AddBlockButton onClick={() => this.addBlock()}
                            key="AddBlockButton"/>
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

    // noinspection JSMethodCanBeStatic
    buildBlock(blockId, text) {
        return {
            blockId: blockId,
            text: text,
        }
    }

    removeBlock(blockId: number) {
        this.setState((state) => {
            return {
                blocks: state.blocks.filter((block) => {
                    return block.blockId !== blockId;
                })
            }
        });
        this.dbManager.delete(blockId);
    }
}

export default App;