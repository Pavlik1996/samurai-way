import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import React, {ChangeEvent} from "react";
import {MessagesPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";


type DialogsPropsType = {
    newMessageBodyAC: (body: string) => void
    sendMessage: () => void
    dialogsPage: MessagesPageType
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody

    const onClickHandler = () => props.sendMessage()

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.newMessageBodyAC(body)
    }

    if (!props.isAuth) return  <Redirect to={'/login'}/>

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