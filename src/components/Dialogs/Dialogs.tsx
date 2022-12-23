import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogsType = {
    title: string
}

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
    id: number
}


const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}

const DialogItem = (props: DialogItemType) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export const Dialogs = (props: DialogsType) => {

    let dialogs = [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Zhenya'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Kot'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'You'},
        {id: 3, message: 'Are'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>
        </div>
    )
}