import s from "./../Dialogs.module.css"
import {MessagesType} from "../../../redux/store";


export const Message = (props: MessagesType) => {
    return <div className={s.dialog}>{props.message}</div>
}

