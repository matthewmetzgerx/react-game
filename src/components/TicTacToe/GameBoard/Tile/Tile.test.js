import React from 'react';
import Tile from "./Tile";
import ReactDOM from "react-dom";
import {mount} from "enzyme/build";

it('renders tile without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tile />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('is clickable only when not already set', () => {
    let myprops = {value: 0, gameState: "in-progress"};
    const tile = mount( <Tile {...myprops} />);
    expect(tile.find('div').hasClass("clickable")).toEqual(true);
});

it('is not clickable only when already set', () => {
    let myprops = {value: 1, gameState: undefined};
    const tile = mount( <Tile {...myprops} />);
    expect(tile.find('div').hasClass("clickable")).toEqual(false);
});

it('reads X when props value is set to 1', () => {
    let myprops = {value: 1};
    const tile = mount( <Tile {...myprops} />);
    expect(tile.find('i').hasClass("fa-times")).toEqual(true);
});

it('reads "0" when props value is set to 2', () => {
    let myprops = {value: 2};
    const tile = mount( <Tile {...myprops} />);
    expect(tile.find('i').hasClass("fa-circle")).toEqual(true);
});

