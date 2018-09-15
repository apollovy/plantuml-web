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
    destroyMe: (blockId: number) => null;

    constructor(props) {
        super(props);

        const text = props.text;
        const url = this.urlFromText(text);

        this.state = {
            form: (
                <Form
                    onSubmit={text => this.onFormSubmit(text)}
                    blockId={props.blockId}
                    dbManager={props.dbManager}
                    text={text}
                />
            ),
            image: this.renderImage(url),
            urlField: this.renderUrlField(url),
        };
    }

    render() {
        return [
            this.state.form,
            this.state.urlField,
            this.state.image,
            <input type="button" onClick={e => this.destroy(e)}
                   value="Delete"/>
        ]
    }

    onFormSubmit(text: string) {
        const url = this.urlFromText(text);
        this.setState({
            image: this.renderImage(url),
            urlField: this.renderUrlField(url)
        })
    }

    urlFromText(text) {
        const encoded = plantumlEncoder.encode(text);
        return this.plantuml_url + '/png/' + encoded;
    }

    // noinspection JSMethodCanBeStatic
    renderImage(url: string) {
        return <Image url={url} key={url + Date.now()}/>
    }

    // noinspection JSMethodCanBeStatic
    renderUrlField(url) {
        return <UrlField url={url}/>;
    }

    destroy(e: Event) {
        e.preventDefault();

        this.props.destroyMe(this.props.blockId);
    }
}

export default Block;