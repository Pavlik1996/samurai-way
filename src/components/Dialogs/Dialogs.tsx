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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Pasha"} id={1}/>
                <DialogItem name={"Zhenya"} id={2}/>
                <DialogItem name={"Sasha"} id={3}/>
                <DialogItem name={"Masha"} id={4}/>
                <DialogItem name={"Kot"} id={5}/>
                <DialogItem name={"Sviniya"} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"You"}/>
                <Message message={"Are"}/>
            </div>
        </div>
    )
}