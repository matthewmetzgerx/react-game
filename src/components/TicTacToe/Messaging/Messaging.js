import React from 'react';
import './Messaging.css';

function Messaging(props) {
    return(
        <div className={"messaging"}>
            <span className={props.messageClass}>{props.message}</span>
        </div>
    );
}
export default Messaging;
