import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    ActionsType,
    newMessageBodyAC,
    sendMessageAC,
    StoreType
} from "../../redux/store";
import React, {ChangeEvent, useState} from "react";


type DialogsPropsType = {
    dispatch: (action: ActionsType) => void
    store: StoreType
}

export const Dialogs = (props: DialogsPropsType) => {

    const store = props.store.getState()

    let dialogsElements = store.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = store.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageBody = store.dialogsPage.newMessageBody

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