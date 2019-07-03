import React from 'react';
import Tile from "./Tile";
import ReactDOM from "react-dom";

it('renders tile without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tile />, div);
    ReactDOM.unmountComponentAtNode(div);
});
