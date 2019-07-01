import React from 'react';
import Messaging from "./Messaging";
import {mount} from "enzyme/build";

it('renders text reading "Test1" and class "class1"', () => {
    let myprops = {message: "Test1", messageClass:"class1"};
    const msg = mount( <Messaging {...myprops} />);
    expect(msg.find('span').text()).toEqual("Test1");
    expect(msg.find('span').hasClass("class1")).toEqual(true);
});
