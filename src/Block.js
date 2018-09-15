import React, {Component} from 'react';
import Form from "./Form";
import Image from "./Image";
import UrlField from "./UrlField";
import DBManager from "./DBManager";

class Block extends Component {
    blockId: number;
    text: string;
    dbManager: DBManager;
    defaultText = Form.defaultText;

    constructor(props) {
        super(props);

        this.state = {
            form: (
                <Form
                    plantuml_url="http://plantuml.com/plantuml"
                    onSubmit={url => this.onFormSubmit(url)}
                    blockId={props.blockId}
                    dbManager={props.dbManager}
                    text={props.text}
                />
            ),
            image: <Image/>,
            urlField: <UrlField/>,
        };
    }

    render() {
        return [
            this.state.form,
            this.state.urlField,
            this.state.image,
        ]
    }

    onFormSubmit(url: string) {
        this.setState({
            image: <Image url={url} key={url + Date.now()}/>,
            urlField: <UrlField url={url}/>
        })
    }
}

export default Block;