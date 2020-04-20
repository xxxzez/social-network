import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {
    updateNewMessageBodyCreator,
    sendMessageCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    debugger
    let state = props.store.getState().dialogs;

    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} />
    ));
    let messageElements = state.messages.map((m) => (
        <Message message={m.message} />
    ));
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder="Enter your message"
                            onChange={onNewMessageChange}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                        {/* <button onClick={alert("1111")}>Send</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
