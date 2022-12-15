import s from "./Dialogs.module.css"

type DialogsType = {
    title: string
}

export const Dialogs = (props: DialogsType) => {
    return (
        <div>
            {props.title}
        </div>
    )
}