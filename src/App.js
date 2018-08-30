import React, {Component} from 'react';
import Form from "./Form";
import Image from "./Image";
import UrlField from "./UrlField";

class App extends Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            form: (
                <Form
                    plantuml_url="http://plantuml.com/plantuml"
                    onSubmit={this.onFormSubmit}
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

export default App;