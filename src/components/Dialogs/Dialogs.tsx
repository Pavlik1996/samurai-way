import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesPageType, MessagesType} from "../../redux/state";
import React, {ChangeEvent, useState} from "react";


type DialogsPropsType = {
    state: MessagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)



    const newMessagePost = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        alert(newMessagePost.current?.value)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessagePost}></textarea>
                <button onClick={onClickHandler}>qq</button>
            </div>

        </div>
    )
}