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
    let myprops = {value: 0};
    const tile = mount( <Tile {...myprops} />);
    expect((tile.find('div').hasClass("clickable")).length).toEqual(1);
});

it('is not clickable only when already set', () => {
    let myprops = {value: 1};
    const tile = mount( <Tile {...myprops} />);
    expect((tile.find('div').hasClass("clickable")).length).toEqual(0);
});

it('reads X when props value is set to 1', () => {
    let myprops = {value: 1};
    const tile = mount( <Tile {...myprops} />);
    expect(tile.find('div').text()).toEqual("X");
});

it('reads "0" when props value is set to 2', () => {
    let myprops = {value: 1};
    const tile = mount( <Tile {...myprops} />);
    expect(tile.find('div').text()).toEqual("O");
});

it('raises event on click', () => {
    let myprops = {value: 0};
    const tile = mount( <Tile {...myprops} />);
    const cb = jest.fn();
    tile.find('div').simulate('click');
    expect(cb.mock.calls.length).toEqual(1);
});
