import React from 'react';
import ReactDOM from 'react-dom';
// noinspection ES6UnusedImports
import LocalStorageMock from './LocalStorageMock'
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
