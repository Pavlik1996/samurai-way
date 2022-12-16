import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogsType = {
    title: string
}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">Pasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Masha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Zhenya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Kot</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>How are you?</div>
            </div>
        </div>
    )
}