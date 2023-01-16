import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    ActionsType,
    newMessageBodyAC,
    sendMessageAC,
    StoreType
} from "../../redux/state";
import React, {ChangeEvent, useState} from "react";


type DialogsPropsType = {
    dispatch: (action: ActionsType) => void
    store: StoreType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.store._state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.store._state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageBody = props.store._state.dialogsPage.newMessageBody

    const onClickHandler = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(newMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onChangeHandler}
                            placeholder={'enter tour message'}></textarea>
                    </div>
                    <div>
                        <button onClick={onClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}