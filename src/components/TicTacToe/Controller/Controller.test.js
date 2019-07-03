import React from 'react';
import Controller from "./Controller";
import {mount} from "enzyme/build";
import Button from "../../Elements/Button/Button";

it('renders start-game button in controller reading undefined gameState and empty moves array', () => {
    let myprops = {gameState: undefined, moves:[]};
    const controller = mount( <Controller {...myprops} />);
    expect(controller.find(Button)).toHaveLength(1);
});
