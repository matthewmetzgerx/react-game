import React from 'react';
import Controller from "./Controller";
import {mount} from "enzyme/build";
import Button from "../../Elements/Button/Button";

it('renders start-game button in controller reading undefined gameState and empty moves', () => {
    let myprops = {gameState: undefined, moves:0};
    const controller = mount( <Controller {...myprops} />);
    expect(controller.find(Button).hasClass("start-game")).toEqual(true);
});

it('renders reset-game button in controller reading "in-progress" gameState and moves greater than 0', () => {
    let myprops = {gameState: "in-progress", moves:1};
    const controller = mount( <Controller {...myprops} />);
    expect(controller.find(Button).first().hasClass("reset-game")).toEqual(true);
});

it('renders revert-move button in controller reading "in-progress" gameState and moves greater than 0', () => {
    let myprops = {gameState: "in-progress", moves:1};
    const controller = mount( <Controller {...myprops} />);
    expect(controller.find(Button).last().hasClass("revert-move")).toEqual(true);
});


it('renders no buttons in controller reading "in-progress" gameState and moves == 0', () => {
    let myprops = {gameState: "in-progress", moves:0};
    const controller = mount( <Controller {...myprops} />);
    expect(controller.find(Button)).toEqual({});
});
