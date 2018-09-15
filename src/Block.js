import React, {Component} from 'react';
import Form from "./Form";
import Image from "./Image";
import UrlField from "./UrlField";
import DBManager from "./DBManager";
import plantumlEncoder from "plantuml-encoder";

class Block extends Component {
    plantuml_url = "http://plantuml.com/plantuml";

    blockId: number;
    text: string;
    dbManager: DBManager;
    destroyMe: () => null;

    constructor(props) {
        super(props);

        this.state = {
            url: this.urlFromText(props.text),
        };
    }

    render() {
        return [
            <Form
                onSubmit={text => this.onFormSubmit(text)}
                blockId={this.props.blockId}
                dbManager={this.props.dbManager}
                text={this.props.text}
                key="Form"
            />,
            <UrlField url={this.state.url} key="UrlField"/>,
            <Image url={this.state.url} key="Image"/>,
            <input type="button" onClick={e => this.destroy(e)} key="Delete"
                   value="Delete"/>
        ]
    }

    onFormSubmit(text: string) {
        this.setState({
            url: this.urlFromText(text),
        })
    }

    urlFromText(text) {
        const encoded = plantumlEncoder.encode(text);
        return this.plantuml_url + '/png/' + encoded;
    }

    destroy(e: Event) {
        e.preventDefault();

        this.props.destroyMe();
    }
}

export default Block;