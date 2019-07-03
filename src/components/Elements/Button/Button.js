import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {

    emitEvent = (eventvalue) => {
        this.props.cb(this.props.event)
    };

    render() {
        return(
            <button className={"button"} onClick={this.emitEvent}>{this.props.text}</button>
        )
    }
}
